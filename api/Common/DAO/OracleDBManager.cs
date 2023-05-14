using MDL.Common.Helpers;
using MDL.DataContractCore.Base;
using MDL.DataContractCore.Exception;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using static MDL.DataContractCore.Base.DBConnectType;

namespace Common.DAO
{
    public class OracleDBManager<TAction> : IDBManager<TAction>, IDisposable
    {
        private OracleCommand _command;
        private string ConnectString
        {
            get
            {
                //TODO: decrypt
                if (typeof(TAction).Name.ToUpper() == "WRITE")
                {
                    return AppConfigHelper.AppSetting.ConnectionSettings.ConnectionStrings.WriteConnectString;

                }
                else if (typeof(TAction).Name.ToUpper() == "SYSTEM")
                {
                    return AppConfigHelper.AppSetting.ConnectionSettings.ConnectionStrings.SystemConnectString;
                }
                else
                {
                    return AppConfigHelper.AppSetting.ConnectionSettings.ConnectionStrings.ReadConnectString;
                }
            }
        }

        public OracleDBManager()
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
        /// Convert customDBType to OracleDBType
        /// Cần dùng hàm này cho cả MsSQL nếu có
        /// </summary>
        /// <param name="customDbType"></param>
        /// <returns></returns>
        private OracleDbType ConvertDBType(CustomDbType customDbType)
        {
            switch (customDbType)
            {
                case CustomDbType.Cursor: return OracleDbType.RefCursor;
                case CustomDbType.DateTime: return OracleDbType.Date;
                case CustomDbType.Decimal: return OracleDbType.Decimal;
                case CustomDbType.Double: return OracleDbType.Double;
                case CustomDbType.Int: return OracleDbType.Double;
                case CustomDbType.NChar: return OracleDbType.NChar;
                case CustomDbType.NVarChar: return OracleDbType.NVarchar2;
                case CustomDbType.Timestamp: return OracleDbType.TimeStamp;
                case CustomDbType.XmlType: return OracleDbType.XmlType;
                default:
                    return OracleDbType.Varchar2;
            }
        }

        public async Task<DataSet> GetDataSetAsync(string spName, List<CustomParameter> paramData)
        {
            _command = new OracleCommand(spName)
            {
                CommandType = CommandType.StoredProcedure
            };

            if (_command != null)
            {
                foreach (var c in paramData)
                {
                    _command.Parameters.Add(c.Name, ConvertDBType(c.DataType), c.Size, c.Value, c.Direction);
                }
                try
                {
                    using OracleConnection conn = new OracleConnection(ConnectString);
                    _command.Connection = conn;
                    await conn.OpenAsync();

                    DataSet rslt = new DataSet();
                    OracleDataAdapter adapter = new OracleDataAdapter(_command);
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
                    throw new MDLDatabaseException("GetDataSetAsync:" + e.Message, e);
                }
            }

            throw new NotImplementedException();
        }

        public bool UpdateTable(string tbName, DataTable tbData)
        {
            if (string.IsNullOrEmpty(tbName)) throw new Exception("tbName is null");
            if (tbData == null) throw new Exception("tbData is null");

            OracleCommand cmd;

            using OracleConnection Conn = new OracleConnection(ConnectString);
            Conn.Open();
            //init structure (require table name must have primary key)
            cmd = new OracleCommand()
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
                OracleDataAdapter adapter = new OracleDataAdapter(cmd);
                var sqlBuilder = new OracleCommandBuilder(adapter);
                adapter.InsertCommand = sqlBuilder.GetInsertCommand();
                adapter.UpdateCommand = sqlBuilder.GetUpdateCommand();
                adapter.DeleteCommand = sqlBuilder.GetDeleteCommand();
                int rsExec = adapter.Update(tbData);
                return rsExec > 0;
            }
            catch (Exception e)
            {
                //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                throw new MDLDatabaseException("UpdateTable:" + e.Message, e);
            }
        }

        public async Task<DataTable> UpdateTableReturnData(TableObject objTable, DataTable tbData)
        {
            try
            {
                if (objTable == null) throw new MDLDatabaseException("objTable is null");
                if (tbData == null) throw new MDLDatabaseException("tbData is null");
                if (objTable.KEYCOLUMNS == null) throw new MDLDatabaseException("Action is requiring key column");
                if (objTable.KEYCOLUMNS.Count == 0) throw new MDLDatabaseException("Action is requiring key column");
                //Check DataTable must be contained key column
                foreach (string sCol in objTable.KEYCOLUMNS)
                {
                    if (!tbData.Columns.Contains(sCol)) throw new MDLDatabaseException("Data do not contain primary key " + sCol);
                }

                //check if use auto number
                if (objTable.IS_AUTONUMBER_BY_MAX)
                {
                    if (string.IsNullOrEmpty(objTable.AUTONUMBER_COLUMN)) throw new MDLDatabaseException("No auto number column were set");
                }

                //Get data exist on database and prepare for update
                var dataKeys = tbData.DefaultView.ToTable(true, objTable.KEYCOLUMNS.ToArray());

                //join string to compare in oracle (||)
                var strColumnKeys = string.Join("||", objTable.KEYCOLUMNS.ToArray());
                var strDataKeys = "NULL";//Hope key is not null
                foreach (DataRow dr in dataKeys.Rows)
                {
                    var strPerData = "";
                    foreach (var s in objTable.KEYCOLUMNS) strPerData += dr[s].ToString();
                    strDataKeys += ",'" + strPerData + "'";
                }

                //warning!!!
                var strdataOrigin = "select * from " + objTable.TABLE_NAME + " where " + strColumnKeys + " in (" + strDataKeys + ")";
                var dataOrigin = await GetDataTableAsync(strdataOrigin);


                var strMaxID = "select max(" + objTable.AUTONUMBER_COLUMN + ") from " + objTable.TABLE_NAME + "";
                decimal maxID = 0;
                if (objTable.IS_AUTONUMBER_BY_MAX)
                {
                    var dataMaxID = await GetDataTableAsync(strMaxID);
                    if (dataMaxID != null) if (dataMaxID.Rows.Count > 0 && dataMaxID.Rows[0][0].ToString() != "") maxID = decimal.Parse(dataMaxID.Rows[0][0].ToString());
                    maxID++;
                }

                //process data: compare with dataOrigin to define add new or update
                foreach (DataRow dr in tbData.Rows)
                {
                    if (dr.RowState != DataRowState.Deleted)
                    {
                        //find by key column
                        var strFilter = " 1=1";
                        foreach (var s in objTable.KEYCOLUMNS) strFilter += " and Convert(" + s + ",'System.String') = '" + dr[s].ToString() + "'";
                        var findRows = dataOrigin.Select(strFilter);

                        //if exists -> modified
                        if (findRows.Length > 0)
                        {
                            //Maybe change to list of update column
                            foreach (DataColumn dc in dataOrigin.Columns)
                            {
                                try
                                {
                                    if (tbData.Columns.Contains(dc.ColumnName)) findRows[0][dc.ColumnName] = dr[dc.ColumnName];
                                }
                                catch { }
                            }
                        }
                        //else -> add new row (ID autonumber?)
                        else
                        {
                            var newData = dataOrigin.NewRow();
                            foreach (DataColumn dc in dataOrigin.Columns)
                            {
                                try
                                {
                                    if (tbData.Columns.Contains(dc.ColumnName)) newData[dc.ColumnName] = dr[dc.ColumnName];
                                }
                                catch { }
                            }
                            //Nếu sử dụng maxID
                            if (objTable.IS_AUTONUMBER_BY_MAX)
                            {
                                if (dataOrigin.Columns.Contains(objTable.AUTONUMBER_COLUMN))
                                {
                                    newData[objTable.AUTONUMBER_COLUMN] = maxID;
                                    maxID++;
                                }
                            }
                            dataOrigin.Rows.Add(newData);
                        }
                    }

                }

                //Update data Origin to database
                using OracleConnection Conn = new OracleConnection(ConnectString);
                Conn.Open();
                //init structure (require table name must have primary key)
                OracleCommand cmd = new()
                {
                    CommandText = "select * from " + objTable.TABLE_NAME + " where (1=0)",
                    CommandType = CommandType.Text,
                    Connection = Conn
                };


                dataOrigin.TableName = objTable.TABLE_NAME;
                //Execute  
                DataSet dataSet = new DataSet();
                OracleDataAdapter adapter = new OracleDataAdapter(cmd);
                var sqlBuilder = new OracleCommandBuilder(adapter);
                adapter.InsertCommand = sqlBuilder.GetInsertCommand();
                adapter.UpdateCommand = sqlBuilder.GetUpdateCommand();
                adapter.DeleteCommand = sqlBuilder.GetDeleteCommand();
                int rsExec = adapter.Update(dataOrigin);

                if (rsExec > 0)
                {
                    return dataOrigin;
                }
                else return null;
            }
            catch (Exception e)
            {
                //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                throw new MDLDatabaseException("UpdateTable:" + e.Message, e);
            }
        }

        public async Task<int> UpdateTable(TableObject objTable, DataTable tbData)
        {
            try
            {
                if (objTable == null) throw new MDLDatabaseException("objTable is null");
                if (tbData == null) throw new MDLDatabaseException("tbData is null");
                if (objTable.KEYCOLUMNS == null) throw new MDLDatabaseException("Action is requiring key column");
                if (objTable.KEYCOLUMNS.Count == 0) throw new MDLDatabaseException("Action is requiring key column");
                //Check DataTable must be contained key column
                foreach (string sCol in objTable.KEYCOLUMNS)
                {
                    if (!tbData.Columns.Contains(sCol)) throw new MDLDatabaseException("Data do not contain primary key " + sCol);
                }

                //check if use auto number
                if (objTable.IS_AUTONUMBER_BY_MAX)
                {
                    if (string.IsNullOrEmpty(objTable.AUTONUMBER_COLUMN)) throw new MDLDatabaseException("No auto number column were set");
                }

                //Get data exist on database and prepare for update
                var dataKeys = tbData.DefaultView.ToTable(true, objTable.KEYCOLUMNS.ToArray());

                //join string to compare in oracle (||)
                var strColumnKeys = string.Join("||", objTable.KEYCOLUMNS.ToArray());
                var strDataKeys = "NULL";//Hope key is not null
                foreach (DataRow dr in dataKeys.Rows)
                {
                    var strPerData = "";
                    foreach (var s in objTable.KEYCOLUMNS) strPerData += dr[s].ToString();
                    strDataKeys += ",'" + strPerData + "'";
                }

                //warning!!!
                var strdataOrigin = "select * from " + objTable.TABLE_NAME + " where " + strColumnKeys + " in (" + strDataKeys + ")";
                var dataOrigin = await GetDataTableAsync(strdataOrigin);


                var strMaxID = "select max(" + objTable.AUTONUMBER_COLUMN + ") from " + objTable.TABLE_NAME + "";
                decimal maxID = 0;
                if (objTable.IS_AUTONUMBER_BY_MAX)
                {
                    var dataMaxID = await GetDataTableAsync(strMaxID);
                    if (dataMaxID != null) if (dataMaxID.Rows.Count > 0 && dataMaxID.Rows[0][0].ToString() != "") maxID = decimal.Parse(dataMaxID.Rows[0][0].ToString());
                    maxID++;
                }

                //process data: compare with dataOrigin to define add new or update
                foreach (DataRow dr in tbData.Rows)
                {
                    if (dr.RowState != DataRowState.Deleted)
                    {
                        //find by key column
                        var strFilter = " 1=1";
                        foreach (var s in objTable.KEYCOLUMNS) strFilter += " and Convert(" + s + ",'System.String') = '" + dr[s].ToString() + "'";
                        var findRows = dataOrigin.Select(strFilter);

                        //if exists -> modified
                        if (findRows.Length > 0)
                        {
                            //Maybe change to list of update column
                            foreach (DataColumn dc in dataOrigin.Columns)
                            {
                                try
                                {
                                    if (tbData.Columns.Contains(dc.ColumnName)) findRows[0][dc.ColumnName] = dr[dc.ColumnName];
                                }
                                catch { }
                            }
                        }
                        //else -> add new row (ID autonumber?)
                        else
                        {
                            var newData = dataOrigin.NewRow();
                            foreach (DataColumn dc in dataOrigin.Columns)
                            {
                                try
                                {
                                    if (tbData.Columns.Contains(dc.ColumnName)) newData[dc.ColumnName] = dr[dc.ColumnName];
                                }
                                catch { }
                            }
                            //Nếu sử dụng maxID
                            if (objTable.IS_AUTONUMBER_BY_MAX)
                            {
                                if (dataOrigin.Columns.Contains(objTable.AUTONUMBER_COLUMN))
                                {
                                    newData[objTable.AUTONUMBER_COLUMN] = maxID;
                                    maxID++;
                                }
                            }
                            dataOrigin.Rows.Add(newData);
                        }
                    }

                }

                //Update data Origin to database
                using OracleConnection Conn = new OracleConnection(ConnectString);
                Conn.Open();
                //init structure (require table name must have primary key)
                OracleCommand cmd = new()
                {
                    CommandText = "select * from " + objTable.TABLE_NAME + " where (1=0)",
                    CommandType = CommandType.Text,
                    Connection = Conn
                };


                dataOrigin.TableName = objTable.TABLE_NAME;
                //Execute  
                DataSet dataSet = new DataSet();
                OracleDataAdapter adapter = new OracleDataAdapter(cmd);
                var sqlBuilder = new OracleCommandBuilder(adapter);
                adapter.InsertCommand = sqlBuilder.GetInsertCommand();
                adapter.UpdateCommand = sqlBuilder.GetUpdateCommand();
                adapter.DeleteCommand = sqlBuilder.GetDeleteCommand();
                int rsExec = adapter.Update(dataOrigin);
                return rsExec;
            }
            catch (Exception e)
            {
                //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                throw new MDLDatabaseException("UpdateTable:" + e.Message, e);
            }
        }


        #region "Private function"

        /// <summary>
        /// Get datatable inner class 
        /// </summary>
        /// <param name="cmd"></param>
        /// <returns></returns>
        private async Task<DataTable> GetDataTableAsync(string cmd)
        {
            _command = new OracleCommand(cmd)
            {
                CommandType = CommandType.Text
            };

            if (_command != null)
            {
                try
                {
                    using OracleConnection conn = new OracleConnection(ConnectString);
                    _command.Connection = conn;
                    await conn.OpenAsync();

                    DataSet rslt = new DataSet();
                    OracleDataAdapter adapter = new OracleDataAdapter(_command);
                    adapter.Fill(rslt);
                    if (rslt == null) return null;
                    if (rslt.Tables.Count == 0) return null;
                    return rslt.Tables[0];
                }
                catch (Exception e)
                {
                    //LogHelper.WriteExceptionToLog(String.Format("errorString: {0}\ne: {1}", e.Message, e.ToString()));
                    throw new MDLDatabaseException("GetDataTableAsync", e);
                }
            }
            throw new NotImplementedException();
        }

        #endregion
    }
}
