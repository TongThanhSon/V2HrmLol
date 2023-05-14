using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace Common.DAO
{
    public class MsSqlDBManager<TAction> : IDBManager<TAction>, IDisposable
    {
        private SqlCommand _command;
        private string ConnectString
        {
            get
            {
                return "Data Source=192.168.60.22\\SQL2019,1433;Initial Catalog=tenantdb1;User ID=sa;Password=MatKhau@123";
            }
            //get
            //{
            //    if (typeof(TAction).Name == "Read")
            //    {
            //        //TODO: decrypt
            //        return AppConfigHelper.AppSetting.ConnectionSettings.ConnectionStrings.ReadConnectString;
            //    }
            //    else if (typeof(TAction).Name.ToUpper() == "SYSTEM")
            //    {
            //        return AppConfigHelper.AppSetting.ConnectionSettings.ConnectionStrings.SystemConnectString;
            //    }
            //    else
            //    {
            //        //TODO: decrypt
            //        return AppConfigHelper.AppSetting.ConnectionSettings.ConnectionStrings.WriteConnectString;
            //    }
            //}
        }

        public MsSqlDBManager()
        {

        }

        public void Dispose()
        {
            this.Dispose(true);
        }

        /// <summary>
        /// Releases the resources used by the Component.
        /// </summary>
        /// <param name="disposing">Send true value when Dispose Method is called by the program</param>
        private void Dispose(bool disposing)
        {
            if (disposing)
            {
                GC.SuppressFinalize(this);
            }

            if (this._command != null)
            {
                this._command.Parameters.Clear();
                this._command.Dispose();
            }
        }

        /// <summary>
        /// Convert customDBType to SQLDBType
        /// Cần dùng hàm này cho cả MsSQL nếu có
        /// </summary>
        /// <param name="customDbType"></param>
        /// <returns></returns>
        private SqlDbType ConvertDBType(CustomDbType customDbType)
        {
            switch (customDbType)
            {
                case CustomDbType.Cursor: return SqlDbType.Variant;
                case CustomDbType.DateTime: return SqlDbType.Date;
                case CustomDbType.Decimal: return SqlDbType.Decimal;
                case CustomDbType.Double: return SqlDbType.Float;
                case CustomDbType.Int: return SqlDbType.Int;
                case CustomDbType.NChar: return SqlDbType.NChar;
                case CustomDbType.NVarChar: return SqlDbType.NVarChar;
                case CustomDbType.Timestamp: return SqlDbType.Timestamp;
                case CustomDbType.XmlType: return SqlDbType.Xml;
                default:
                    return SqlDbType.NVarChar;
            }
        }

        public bool UpdateTable(string tbName, DataTable tbData)
        {
            if (string.IsNullOrEmpty(tbName)) throw new Exception("tbName is null");
            if (tbData == null) throw new Exception("tbData is null");

            SqlCommand cmd;

            using SqlConnection Conn = new SqlConnection(ConnectString);
            Conn.Open();
            //init structure (require table name must have primary key)
            cmd = new SqlCommand()
            {
                CommandText = "select * from " + tbName + " where (1=0)",
                CommandType = CommandType.Text,
                Connection = Conn
            };

            try
            {
                if (string.IsNullOrEmpty(tbData.TableName)) tbData.TableName = tbName;
                //Execute  
                DataSet dataSet = new DataSet();
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                var sqlBuilder = new SqlCommandBuilder(adapter);
                adapter.InsertCommand = sqlBuilder.GetInsertCommand();
                adapter.UpdateCommand = sqlBuilder.GetUpdateCommand();
                adapter.DeleteCommand = sqlBuilder.GetDeleteCommand();
                int rsExec = adapter.Update(tbData);
                return rsExec > 0;
            }
            catch (Exception e)
            {
                //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                throw new System.Exception("UpdateTable:" + e.Message, e);
            }
        }

        public async Task<DataSet> GetDataSetAsync(string spName, List<CustomParameter> paramData)
        {
            _command = new SqlCommand(spName)
            {
                CommandType = CommandType.StoredProcedure
            };

            if (_command != null)
            {
                foreach (var c in paramData)
                {
                    if (c.DataType == CustomDbType.Cursor)
                    {
                        //_command.Parameters.Add(new SqlParameter(c.Name, SqlDbType.Structured));
                        continue;
                    }
                    var newCmd = new SqlParameter(c.Name, ConvertDBType(c.DataType), c.Size);
                    newCmd.Value = c.Value;
                    newCmd.Direction = c.Direction;
                    _command.Parameters.Add(newCmd);
                }
                try
                {
                    using SqlConnection conn = new SqlConnection(ConnectString);
                    _command.Connection = conn;
                    await conn.OpenAsync();

                    DataSet rslt = new DataSet();
                    SqlDataAdapter adapter = new SqlDataAdapter(_command);
                    adapter.Fill(rslt);

                    // //set return param out value
                    foreach (var ip in paramData)
                    {
                        if (ip.Direction == ParameterDirection.Input) continue;
                        if (ip.DataType != CustomDbType.Cursor)
                        {
                            try { ip.Value = _command.Parameters[ip.Name].Value.ToString(); } catch { }
                        }
                    }

                    return rslt;
                }
                catch (Exception e)
                {
                    //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                    throw new System.Exception("GetDataSetAsync:" + e.Message, e);
                }
            }

            throw new NotImplementedException();
        }

        //public async Task<DataTable> UpdateTableReturnData(TableObject objTable, DataTable tbData)
        //{
        //    if (objTable == null) throw new System.Exception("objTable is null");
        //    if (tbData == null) throw new System.Exception("tbData is null");
        //    if (objTable.KEYCOLUMNS == null) throw new System.Exception("Action is requiring key column");
        //    if (objTable.KEYCOLUMNS.Count == 0) throw new System.Exception("Action is requiring key column");
        //    //Check DataTable must be contained key column
        //    foreach (string sCol in objTable.KEYCOLUMNS)
        //    {
        //        if (!tbData.Columns.Contains(sCol)) throw new System.Exception("Data do not contain primary key " + sCol);
        //    }

        //    //check if use auto number
        //    if (objTable.IS_AUTONUMBER_BY_MAX)
        //    {
        //        if (string.IsNullOrEmpty(objTable.AUTONUMBER_COLUMN)) throw new ("No auto number column were set");
        //    }

        //    //Get data exist on database and prepare for update
        //    var dataKeys = tbData.DefaultView.ToTable(true, objTable.KEYCOLUMNS.ToArray());

        //    //join string to compare in Sql (+)
        //    var strColumnKeys = "convert(nvarchar(max)," + string.Join(")+convert(nvarchar(max),", objTable.KEYCOLUMNS.ToArray()) + ")";
        //    var strDataKeys = "NULL";//Hope key is not null
        //    foreach (DataRow dr in dataKeys.Rows)
        //    {
        //        var strPerData = "";
        //        foreach (var s in objTable.KEYCOLUMNS) strPerData += dr[s].ToString();
        //        strDataKeys += ",'" + strPerData + "'";
        //    }

        //    //warning!!!
        //    var strdataOrigin = "select * from " + objTable.TABLE_NAME + " where " + strColumnKeys + " in (" + strDataKeys + ")";
        //    var dataOrigin = await GetDataTableAsync(strdataOrigin);


        //    var strMaxID = "select max(" + objTable.AUTONUMBER_COLUMN + ") from " + objTable.TABLE_NAME + "";
        //    decimal maxID = 0;
        //    if (objTable.IS_AUTONUMBER_BY_MAX)
        //    {
        //        var dataMaxID = await GetDataTableAsync(strMaxID);
        //        if (dataMaxID != null) if (dataMaxID.Rows.Count > 0) if (dataMaxID.Rows[0][0].ToString() != "") maxID = decimal.Parse(dataMaxID.Rows[0][0].ToString());
        //        maxID++;
        //    }

        //    //process data: compare with dataOrigin to define add new or update
        //    foreach (DataRow dr in tbData.Rows)
        //    {
        //        //find by key column
        //        var strFilter = " 1=1";
        //        foreach (var s in objTable.KEYCOLUMNS) strFilter += " and Convert(" + s + ",'System.String') = '" + dr[s].ToString() + "'";
        //        var findRows = dataOrigin.Select(strFilter);

        //        //if exists -> modified
        //        if (findRows.Length > 0)
        //        {
        //            //Maybe change to list of update column
        //            foreach (DataColumn dc in dataOrigin.Columns)
        //            {
        //                try
        //                {
        //                    if (tbData.Columns.Contains(dc.ColumnName)) findRows[0][dc.ColumnName] = dr[dc.ColumnName];
        //                }
        //                catch { }
        //            }
        //        }
        //        //else -> add new row (ID autonumber?)
        //        else
        //        {
        //            var newData = dataOrigin.NewRow();
        //            foreach (DataColumn dc in dataOrigin.Columns)
        //            {
        //                try
        //                {
        //                    if (tbData.Columns.Contains(dc.ColumnName)) newData[dc.ColumnName] = dr[dc.ColumnName];
        //                }
        //                catch { }
        //            }
        //            //Nếu sử dụng maxID
        //            if (objTable.IS_AUTONUMBER_BY_MAX)
        //            {
        //                if (dataOrigin.Columns.Contains(objTable.AUTONUMBER_COLUMN))
        //                {
        //                    newData[objTable.AUTONUMBER_COLUMN] = maxID;
        //                    maxID++;
        //                }
        //            }
        //            dataOrigin.Rows.Add(newData);
        //        }
        //    }

        //    //Update data Origin to database
        //    using SqlConnection Conn = new SqlConnection(ConnectString);
        //    Conn.Open();
        //    //init structure (require table name must have primary key)
        //    SqlCommand cmd = new()
        //    {
        //        CommandText = "select * from " + objTable.TABLE_NAME + " where (1=0)",
        //        CommandType = CommandType.Text,
        //        Connection = Conn
        //    };

        //    try
        //    {
        //        if (string.IsNullOrEmpty(dataOrigin.TableName)) dataOrigin.TableName = objTable.TABLE_NAME;
        //        //Execute  
        //        DataSet dataSet = new DataSet();
        //        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
        //        var sqlBuilder = new SqlCommandBuilder(adapter);
        //        adapter.InsertCommand = sqlBuilder.GetInsertCommand();
        //        adapter.UpdateCommand = sqlBuilder.GetUpdateCommand();
        //        adapter.DeleteCommand = sqlBuilder.GetDeleteCommand();
        //        int rsExec = adapter.Update(dataOrigin);
        //        if (rsExec > 0)
        //        {
        //            return dataOrigin;
        //        }
        //        else
        //            return null;
        //    }
        //    catch (Exception e)
        //    {
        //        //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
        //        throw new ("UpdateTableReturnData:" + e.Message, e);
        //    }

        //}

        //public async Task<int> UpdateTable(TableObject objTable, DataTable tbData)
        //{
        //    if (objTable == null) throw new ("objTable is null");
        //    if (tbData == null) throw new ("tbData is null");
        //    if (objTable.KEYCOLUMNS == null) throw new ("Action is requiring key column");
        //    if (objTable.KEYCOLUMNS.Count == 0) throw new ("Action is requiring key column");
        //    //Check DataTable must be contained key column
        //    foreach (string sCol in objTable.KEYCOLUMNS)
        //    {
        //        if (!tbData.Columns.Contains(sCol)) throw new ("Data do not contain primary key " + sCol);
        //    }

        //    //check if use auto number
        //    if (objTable.IS_AUTONUMBER_BY_MAX)
        //    {
        //        if (string.IsNullOrEmpty(objTable.AUTONUMBER_COLUMN)) throw new ("No auto number column were set");
        //    }

        //    //Get data exist on database and prepare for update
        //    var dataKeys = tbData.DefaultView.ToTable(true, objTable.KEYCOLUMNS.ToArray());

        //    //join string to compare in Sql (+)
        //    var strColumnKeys = "convert(nvarchar(max)," + string.Join(")+convert(nvarchar(max),", objTable.KEYCOLUMNS.ToArray()) + ")";
        //    var strDataKeys = "NULL";//Hope key is not null
        //    foreach (DataRow dr in dataKeys.Rows)
        //    {
        //        var strPerData = "";
        //        foreach (var s in objTable.KEYCOLUMNS) strPerData += dr[s].ToString();
        //        strDataKeys += ",'" + strPerData + "'";
        //    }

        //    //warning!!!
        //    var strdataOrigin = "select * from " + objTable.TABLE_NAME + " where " + strColumnKeys + " in (" + strDataKeys + ")";
        //    var dataOrigin = await GetDataTableAsync(strdataOrigin);


        //    var strMaxID = "select max(" + objTable.AUTONUMBER_COLUMN + ") from " + objTable.TABLE_NAME + "";
        //    decimal maxID = 0;
        //    if (objTable.IS_AUTONUMBER_BY_MAX)
        //    {
        //        var dataMaxID = await GetDataTableAsync(strMaxID);
        //        if (dataMaxID != null) if (dataMaxID.Rows.Count > 0) if (dataMaxID.Rows[0][0].ToString() != "") maxID = decimal.Parse(dataMaxID.Rows[0][0].ToString());
        //        maxID++;
        //    }

        //    //process data: compare with dataOrigin to define add new or update
        //    foreach (DataRow dr in tbData.Rows)
        //    {
        //        //find by key column
        //        var strFilter = " 1=1";
        //        foreach (var s in objTable.KEYCOLUMNS) strFilter += " and Convert(" + s + ",'System.String') = '" + dr[s].ToString() + "'";
        //        var findRows = dataOrigin.Select(strFilter);

        //        //if exists -> modified
        //        if (findRows.Length > 0)
        //        {
        //            //Maybe change to list of update column
        //            foreach (DataColumn dc in dataOrigin.Columns)
        //            {
        //                try
        //                {
        //                    if (tbData.Columns.Contains(dc.ColumnName)) findRows[0][dc.ColumnName] = dr[dc.ColumnName];
        //                }
        //                catch { }
        //            }
        //        }
        //        //else -> add new row (ID autonumber?)
        //        else
        //        {
        //            var newData = dataOrigin.NewRow();
        //            foreach (DataColumn dc in dataOrigin.Columns)
        //            {
        //                try
        //                {
        //                    if (tbData.Columns.Contains(dc.ColumnName)) newData[dc.ColumnName] = dr[dc.ColumnName];
        //                }
        //                catch { }
        //            }
        //            //Nếu sử dụng maxID
        //            if (objTable.IS_AUTONUMBER_BY_MAX)
        //            {
        //                if (dataOrigin.Columns.Contains(objTable.AUTONUMBER_COLUMN))
        //                {
        //                    newData[objTable.AUTONUMBER_COLUMN] = maxID;
        //                    maxID++;
        //                }
        //            }
        //            dataOrigin.Rows.Add(newData);
        //        }
        //    }

        //    //Update data Origin to database
        //    using SqlConnection Conn = new SqlConnection(ConnectString);
        //    Conn.Open();
        //    //init structure (require table name must have primary key)
        //    SqlCommand cmd = new()
        //    {
        //        CommandText = "select * from " + objTable.TABLE_NAME + " where (1=0)",
        //        CommandType = CommandType.Text,
        //        Connection = Conn
        //    };

        //    try
        //    {
        //        if (string.IsNullOrEmpty(dataOrigin.TableName)) dataOrigin.TableName = objTable.TABLE_NAME;
        //        //Execute  
        //        DataSet dataSet = new DataSet();
        //        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
        //        var sqlBuilder = new SqlCommandBuilder(adapter);
        //        adapter.InsertCommand = sqlBuilder.GetInsertCommand();
        //        adapter.UpdateCommand = sqlBuilder.GetUpdateCommand();
        //        adapter.DeleteCommand = sqlBuilder.GetDeleteCommand();
        //        int rsExec = adapter.Update(dataOrigin);
        //        return rsExec;
        //    }
        //    catch (Exception e)
        //    {
        //        //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
        //        throw new ("UpdateTable:" + e.Message, e);
        //    }
        //}


        #region "Private function"

        /// <summary>
        /// Get datatable inner class 
        /// </summary>
        /// <param name="cmd"></param>
        /// <returns></returns>
        private async Task<DataTable> GetDataTableAsync(string cmd)
        {
            _command = new SqlCommand(cmd)
            {
                CommandType = CommandType.Text
            };

            if (_command != null)
            {
                try
                {
                    using SqlConnection conn = new SqlConnection(ConnectString);
                    _command.Connection = conn;
                    await conn.OpenAsync();

                    DataSet rslt = new DataSet();
                    SqlDataAdapter adapter = new SqlDataAdapter(_command);
                    adapter.Fill(rslt);
                    if (rslt == null) return null;
                    if (rslt.Tables.Count == 0) return null;
                    return rslt.Tables[0];
                }
                catch (Exception e)
                {
                    //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                    throw new ("GetDataTableAsync:" + e.Message, e);
                }
            }
            throw new NotImplementedException();
        }

        #endregion
    }
}
