using System.Threading.Tasks;
using Common.Paging;
using ProfileDAL.EntityFrameworkCore;
using ProfileDAL.ViewModels;
using ProfileDAL.Models;
using System.Linq;
using Common.Repositories;
using Common.Extensions;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System;
using Common.DAO;
using Common.DataContractCore.Base;
using System.Data;
using System.Dynamic;

namespace ProfileDAL.Repositories
{
    public class UserOrganiRepository : TLARepository<UserOrgani>, IUserOrganiRepository
    {
        private ProfileDbContext _appContext => (ProfileDbContext)_context;
        private readonly IDBManager<DBAction.System> _dbManager;


        public UserOrganiRepository(ProfileDbContext context,
                                 IDBManager<DBAction.System> dBManager) : base(context)
        {
            _dbManager = dBManager;

        }

        public async Task<ResultWithError> UpdateAsync(UserOrganiDTO param)
        {
            try
            {
                var r = await _appContext.UserOrganis.Where(c => c.USER_ID == param.UserId).ToArrayAsync();
                _appContext.UserOrganis.RemoveRange(r);

                if (param.OrgIds.Count > 0)
                {
                    var list = new List<UserOrgani>();

                    foreach (var item in param.OrgIds)
                    {
                        var i = new UserOrgani();
                        i.USER_ID = param.UserId;
                        i.ORG_ID = item;
                        list.Add(i);
                    }
                    await _appContext.UserOrganis.AddRangeAsync(list);

                }
                await _appContext.SaveChangesAsync();
                return new ResultWithError(200);
            }
            catch (Exception ex)
            {

                return new ResultWithError(ex);
            }
        }
        public async Task<ResultWithError> UpdateGroupAsync(UserOrganiDTO param)
        {
            try
            {
                var r = await _appContext.UserGroupOrganis.Where(c => c.GROUP_ID == param.GroupId).ToArrayAsync();
                _appContext.UserGroupOrganis.RemoveRange(r);

                if (param.OrgIds.Count > 0)
                {
                    var list = new List<UserGroupOrgani>();

                    foreach (var item in param.OrgIds)
                    {
                        var i = new UserGroupOrgani();
                        i.GROUP_ID = param.GroupId;
                        i.ORG_ID = item;
                        list.Add(i);
                    }
                    await _appContext.UserGroupOrganis.AddRangeAsync(list);

                }
                await _appContext.SaveChangesAsync();
                return new ResultWithError(200);
            }
            catch (Exception ex)
            {

                return new ResultWithError(ex);
            }
        }
        /// <summary>
        /// Get list phong ban ma tenant duoc phan quyen
        /// </summary>
        /// <returns></returns>
        public async Task<ResultWithError> ListUserPermission(string Id)
        {
            try
            {
                var queryable = await (from p in _appContext.UserOrganis
                                       where p.USER_ID == Id
                                       select p.ORG_ID
                                      ).ToListAsync();
                return new ResultWithError(queryable);
            }
            catch (Exception ex)
            {
                return new ResultWithError(ex.Message);
            }
        }
        public async Task<ResultWithError> ListGroupPermission(int Id)
        {
            try
            {
                var queryable = await (from p in _appContext.UserGroupOrganis
                                       where p.GROUP_ID == Id
                                       select p.ORG_ID
                                      ).ToListAsync();
                return new ResultWithError(queryable);
            }
            catch (Exception ex)
            {
                return new ResultWithError(ex.Message);
            }
        }
        /// <summary>
        /// get list phong ban phan quyen theo current user va user selected
        /// </summary>
        /// <returns></returns>
        public async Task<ResultWithError> GetUserOrg(string OrgSelectedId)
        {
            try
            {
                var data = await QueryData.ExecuteList("PKG_COMMON.LIST_USER_ORG",
                     new
                     {
                         P_IS_ADMIN = _appContext.IsAdmin == true ? 1 : 0,
                         
                         P_CURENT_USER_ID = _appContext.CurrentUserId,
                         P_PERMISSION_USER_ID = OrgSelectedId,
                         P_CUR = QueryData.OUT_CURSOR
                     }, false);

                return new ResultWithError(data);
            }
            catch (Exception ex)
            {
                return new ResultWithError(ex.Message);
            }
        }
        public async Task<ResultWithError> GetOrgPermission()
        {
            try
            {
                var data = await QueryData.ExecuteList("PKG_COMMON.LIST_ORG_PERMISSION",
                     new
                     {
                         P_IS_ADMIN = _appContext.IsAdmin == true ? 1 : 0,
                         
                         P_CURENT_USER_ID = _appContext.CurrentUserId,
                         P_CUR = QueryData.OUT_CURSOR
                     }, false);

                return new ResultWithError(data);
            }
            catch (Exception ex)
            {
                return new ResultWithError(ex.Message);
            }
        }
        public async Task<ResultWithError> GetOrgPermission(string UserId, int tenantId, bool isAdmin)
        {


            try
            {
                var x = new
                {
                    P_IS_ADMIN = isAdmin == true ? 1 : 0,
                    P_CURENT_USER_ID = UserId,
                    P_CUR = QueryData.OUT_CURSOR
                };

                var parameters = new List<CustomParameter>
                {
                new CustomParameter() { Name = "P_IS_ADMIN", Direction = ParameterDirection.Input, DataType = CustomDbType.Int, Size = 1000, Value = x.P_IS_ADMIN },
                new CustomParameter() { Name = "P_CURENT_USER_ID", Direction = ParameterDirection.Input, DataType = CustomDbType.NVarChar, Size = 20, Value = x.P_CURENT_USER_ID },
                };

                var rsData = await _dbManager.GetDataSetAsync("SP_SYS_LIST_ORG_PERMISSION", parameters);
                List<dynamic> expandoList = new List<dynamic>();

              
                if (rsData != null) {
                    var table = rsData.Tables[0];
                    foreach (DataRow row in table.Rows)
                    {
                        //create a new ExpandoObject() at each row
                        var expandoDict = new ExpandoObject() as IDictionary<String, Object>;
                        foreach (DataColumn col in table.Columns)
                        {
                            //put every column of this row into the new dictionary
                            expandoDict.Add(col.ToString(), row[col.ColumnName].ToString());
                        }

                        //add this "row" to the list
                        expandoList.Add(expandoDict);
                    }
                }
                //return rsData;


                //var data = await QueryData.ExecuteList("PKG_COMMON.LIST_ORG_PERMISSION",
                //    x, false);

                return new ResultWithError(expandoList);
            }
            catch (Exception ex)
            {
                return new ResultWithError(ex.Message);
            }
        }
        public async Task GrantGroupOrgPermissionTouser(int GroupId, string UserId)
        {
            try
            {
                var rm = await _appContext.UserOrganis.Where(c => c.USER_ID == UserId).ToListAsync();
                _appContext.UserOrganis.RemoveRange(rm);

                var r = await (from a in _appContext.UserGroupOrganis
                               where a.GROUP_ID == GroupId
                               select new UserOrgani
                               {
                                   ORG_ID = a.ORG_ID,
                                   USER_ID = UserId
                               }).ToArrayAsync();
                await _appContext.UserOrganis.AddRangeAsync(r);
                await _appContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



    }
}
