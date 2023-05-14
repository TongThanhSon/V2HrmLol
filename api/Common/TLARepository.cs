using Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Common.Paging;
using Common.Extensions;
using System.Collections.Generic;
using System.Linq.Expressions;
using System;
using Common.DataAccess;
using System.Net.Http;
using System.Net;
using System.Text;
using Newtonsoft.Json;
using System.IO;
using Common.DAO;
using Common.DataContractCore.Base;

namespace Common.Repositories
{
    public static class extensionmethods
    {
        // Order by dynamic method
        public static IQueryable<T> OrderByField<T>(this IQueryable<T> q, string SortField)
        {
            Boolean isAscending = SortField.Substring(0, 1) == "-";
            var param = Expression.Parameter(typeof(T), "p");
            var prop = Expression.Property(param, isAscending ? SortField.Substring(1) : SortField);
            var exp = Expression.Lambda(prop, param);

            string method = isAscending ? "OrderByDescending" : "OrderBy";
            Type[] types = new Type[] { q.ElementType, exp.Body.Type };
            var mce = Expression.Call(typeof(Queryable), method, types, q.Expression, exp);
            return q.Provider.CreateQuery<T>(mce);
        }
    }
    public class TLARepository
    {
        protected readonly DbContext _context;
        protected TLAQueryData QueryData;
        private TLAContext _tlaDbContext => (TLAContext)_context;
        public TLARepository(DbContext context)
        {
            _context = context;
            QueryData = new TLAQueryData(_tlaDbContext);
        }
    }
    public class TLARepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly DbContext _context;
        protected readonly DbSet<TEntity> _entities;
        protected TLAQueryData QueryData;
        private TLAContext _tlaDbContext => (TLAContext)_context;

        readonly IDBManager<DBAction.System> _dbManager;

        public TLARepository(DbContext context)
        {
            _context = context;
            _entities = context.Set<TEntity>();
            QueryData = new TLAQueryData(_tlaDbContext);
        }
        public virtual async Task<TEntity> Get(int id)
        {
            return await _entities.FindAsync(id);
        }
        public virtual async Task<ResultWithError> Add(TEntity entity)
        {
            _entities.Add(entity);
            await _context.SaveChangesAsync();
            return new ResultWithError(entity);
        }
        public virtual async Task<int> AddRange(IEnumerable<TEntity> entities)
        {
            _entities.AddRange(entities);
            return await _context.SaveChangesAsync();
        }
        public virtual async Task<int> Update(TEntity entity)
        {
            _entities.Update(entity);
            return await _context.SaveChangesAsync();
        }
        public virtual async Task<int> Remove(TEntity entity)
        {
            _entities.Remove(entity);
            return await _context.SaveChangesAsync();
        }
        protected async Task<PagedResult<T>> PagingList<T>(IQueryable<T> list, Pagings param)
        {
            try
            {
                if (param.PageNo == 0)
                {
                    param.PageNo = 1;
                }

                if (param.PageSize == -1)
                {
                    var r = await list.ToListAsync();
                    var x = new PagedResult<T>(r, param.PageNo, param.PageSize, r.Count);
                    return x;
                }
                else
                {
                    if (param.PageSize == 0)
                    {
                        param.PageSize = 20;
                    }
                    int skip = (param.PageNo - 1) * param.PageSize;
                    if (param.Sort != null)
                    {

                        list = list.OrderByField(param.Sort.Split(",")[0]);
                    }
                    int count = await list.CountAsync();
                    var q = list.Skip(skip).Take(param.PageSize);
                    var r = await q.ToListAsync();
                    var x = new PagedResult<T>(r, param.PageNo, param.PageSize, count);
                    return x;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        protected async Task<PagedResults<T>> PagingLists<T>(IQueryable<T> list, Pagings param)
        {
            try
            {
                if (param.currentPage == 0)
                {
                    param.currentPage = 1;
                }

                if (param.PageSize == -1)
                {
                    var r = await list.ToListAsync();
                    var x = new PagedResults<T>(r, param.currentPage, param.PageSize, r.Count);
                    return x;
                }
                else
                {
                    if (param.PageSize == 0)
                    {
                        param.PageSize = 10;
                    }
                    int skip = (param.currentPage - 1) * param.PageSize;
                    if (param.Sort != null)
                    {
                        list = list.OrderByField(param.Sort);
                    }
                    int count = await list.CountAsync();
                    var q = list.Skip(skip).Take(param.PageSize);
                    var r = await q.ToListAsync();
                    var x = new PagedResults<T>(r, param.currentPage, param.PageSize, count);
                    return x;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // Map ViewModel to Model
        protected TDestination Map<TSource, TDestination>(TSource source, TDestination destination)
        {
            foreach (var des in destination.GetType().GetProperties())
            {
                string desProperties = des.Name.ToLower().Replace("_", "");
                foreach (var src in source.GetType().GetProperties())
                {
                    try
                    {
                        string srcProperties = src.Name.ToLower().Replace("_", "");
                        if (srcProperties == desProperties)
                        {
                            if (src.PropertyType.Namespace != "System.Collections.Generic")
                            {
                                var value = src.GetValue(source, null);
                                //if (value != null)
                                //{
                                //    des.SetValue(destination, value, null);
                                //}
                                try
                                {
                                    des.SetValue(destination, value, null);
                                }
                                catch
                                {
                                    continue;
                                }
                            }
                            break;
                        }
                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }
                }
            }
            return destination;
        }
        // Upload Image from Base64 String to onther Server api
        public async Task<string> UploadBase64(string imgBase64)
        {
            var httpClient = HttpClientFactory.Create();
            // var url = "http://gohr.vn:6868/api/uploadBase64?Folder=gohr";


            var code = "core_tenant/timekeeping/" + DateTime.Now.ToString("yyyyMM");
            var url = "http://core.vn:6868/api/uploadBase64?Folder=" + code;

            List<string> a = new List<string>();
            a.Add(imgBase64);
            HttpResponseMessage res = await httpClient.PostAsJsonAsync(url, a);
            if (res.StatusCode == HttpStatusCode.OK)
            {
                var content = res.Content;
                var rest = await content.ReadAsAsync<ResponseUpFile>();

                return rest.data[0].url;

            }
            return String.Empty;
        }
        // notification
        protected void LogFile(string strLog)
        {

            StreamWriter log;
            FileStream fileStream = null;
            DirectoryInfo logDirInfo = null;
            FileInfo logFileInfo;

            string logFilePath = "D:\\Logs\\";
            logFilePath = logFilePath +  "-" + System.DateTime.Today.ToString("MM-dd-yyyy") + "." + "txt";
            logFileInfo = new FileInfo(logFilePath);
            logDirInfo = new DirectoryInfo(logFileInfo.DirectoryName);
            if (!logDirInfo.Exists) logDirInfo.Create();
            if (!logFileInfo.Exists)
            {
                fileStream = logFileInfo.Create();
            }
            else
            {
                fileStream = new FileStream(logFilePath, FileMode.Append);
            }
            log = new StreamWriter(fileStream);
            log.WriteLine(strLog);
            log.Close();
        }
        public async Task<NotifyHomeView> SendNotification(NotificationModel item)
        {

            try
            {

                var r = await QueryData.ExecuteStore<NotifyHomeView>("PKG_NOTIFY.PORTAL_COUNT_HOME", new
                {
                    P_EMP_ID = _tlaDbContext.EmpId,
                    P_CUR = QueryData.OUT_CURSOR
                });
               
                WebRequest tRequest = WebRequest.Create("https://fcm.googleapis.com/fcm/send");
                tRequest.Method = "post";
                //serverKey - Key from Firebase cloud messaging server  
                ///tRequest.Headers.Add(string.Format("Authorization: key=AAAAZlSd_3E:APA91bFGs4FLQTRfORS8c_Ny4v8Ti7uAh9iuhh7RaT9aD6PF-eqHYQ6H79iK1bGL8v9RQxSD2CIAsgxSNYfxiyfQtU0utSfYPj6WJy1PhYHg44BYcZBOg2geaJy6HkPPHtw8tW2qb8XS", "mykey"));
                //Sender Id - From firebase project setting  
                //tRequest.Headers.Add(string.Format("Sender: id=439506304881", "mySendId"));
                tRequest.Headers.Add(string.Format("Authorization: key=AAAARIhlN68:APA91bHqUjyZRhE_uu6cHKPxsNYGVe_spYvpxDI_JBfGibrKHAsEznz1wKMyzEXGLA3fT4T1ZTGMTpJDApP6l14Tre8p545777N-XP1XQnFVwDgVPBxbYwokA_LKaQkVc3EzR4bEBvyJ", "mykey"));
                tRequest.Headers.Add(string.Format("Sender: id=294346110895", "mySendId"));
                tRequest.ContentType = "application/json";
                int ibg = int.Parse(r[0].TotalApprove.ToString());
                var payload = new
                {
                    registration_ids = item.Devices,
                    priority = "high",
                    content_available = true,
                    notification = new
                    {
                        body = item.Body,
                        title = item.Title,
                        badge = ibg
                    }
                };

                string postbody = JsonConvert.SerializeObject(payload).ToString();
                Byte[] byteArray = Encoding.UTF8.GetBytes(postbody);
                tRequest.ContentLength = byteArray.Length;
                using (Stream dataStream = tRequest.GetRequestStream())
                {
                    dataStream.Write(byteArray, 0, byteArray.Length);
                    using (WebResponse tResponse = tRequest.GetResponse())
                    {
                        using (Stream dataStreamResponse = tResponse.GetResponseStream())
                        {
                            if (dataStreamResponse != null) using (StreamReader tReader = new StreamReader(dataStreamResponse))
                                {
                                    String sResponseFromServer = tReader.ReadToEnd();
                                    //result.Response = sResponseFromServer;
                                }
                        }
                    }
                }
                return r[0];
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
       
    }
}

