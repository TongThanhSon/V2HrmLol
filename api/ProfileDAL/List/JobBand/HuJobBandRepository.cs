using System.Threading.Tasks;
using Common.Paging;
using ProfileDAL.EntityFrameworkCore;
using ProfileDAL.ViewModels;
using ProfileDAL.Models;
using System.Linq;
using Common.Repositories;
using Common.Extensions;
using Microsoft.EntityFrameworkCore;
using System;
using Common.Interfaces;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Oracle.ManagedDataAccess.Client;

namespace ProfileDAL.Repositories
{
    public class HuJobBandRepository : TLARepository<HUJobBand>, IHuJobBandRepository
    {
        private ProfileDbContext _appContext => (ProfileDbContext)_context;
        private readonly ILogger _logger;

        public HuJobBandRepository(ProfileDbContext context) : base(context)
        {

        }

        public async Task<PagedResult<HUJobBandInputDTO>> GetJobBands(HUJobBandInputDTO param)
        {
            try
            {
                var queryable = from p in _appContext.HUJobBands
                                from o in _appContext.OtOtherLists.Where(x => x.ID == p.TITLE_GROUP_ID).DefaultIfEmpty()

                                select new HUJobBandInputDTO
                                {
                                    Id = p.ID,
                                    NameVN = p.NAME_VN,
                                    NameEN = p.NAME_EN,
                                    LevelFrom = p.LEVEL_FROM,
                                    LevelTo = p.LEVEL_TO,
                                    Status = p.STATUS,
                                    StatusName = p.STATUS == 0 ? "Ngừng áp dụng" : "Áp dụng",
                                    TitleGroupId = p.TITLE_GROUP_ID,
                                    TitleGroupName = o.NAME
                                };
                if (param.NameVN != null)
                {
                    queryable = queryable.Where(p => p.NameVN.ToUpper().Contains(param.NameVN.ToUpper()));
                }

                if (param.NameEN != null)
                {
                    queryable = queryable.Where(p => p.NameEN.ToUpper().Contains(param.NameEN.ToUpper()));
                }

                if (param.LevelFrom != null)
                {
                    queryable = queryable.Where(p => p.LevelFrom.ToUpper().Contains(param.LevelFrom.ToUpper()));
                }

                if (param.LevelTo != null)
                {
                    queryable = queryable.Where(p => p.LevelTo.ToUpper().Contains(param.LevelTo.ToUpper()));
                }

                if (param.StatusName != null)
                {
                    queryable = queryable.Where(p => p.StatusName.ToUpper().Contains(param.StatusName.ToUpper()));
                }


                return await PagingList(queryable, param);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString(), param);
                return null;
            }
        }

        public async Task<ResultWithError> GetJobBand(int id)
        {
            try
            {
                var query = await (from p in _appContext.HUJobBands
                                   where p.ID == id
                                select new HUJobBandInputDTO
                                {
                                    Id = p.ID,
                                    NameVN = p.NAME_VN,
                                    NameEN = p.NAME_EN,
                                    LevelFrom = p.LEVEL_FROM,
                                    LevelTo = p.LEVEL_TO,
                                    Status = p.STATUS,
                                    TitleGroupId = p.TITLE_GROUP_ID,
                                }).FirstOrDefaultAsync();


                return new ResultWithError(query);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new ResultWithError(ex.Message);
            }
        }

        public async Task<ResultWithError> UpdateAsync(HUJobBandInputDTO param)
        {
            try
            {
                if(param.Id != 0)
                {
                    var obj = (from p in _appContext.HUJobBands where p.ID == param.Id select p).FirstOrDefault();
                    if(obj == null)
                    {
                        return new ResultWithError("OBJ_NULL");
                    }

                    obj.NAME_VN = param.NameVN;
                    obj.NAME_EN = param.NameEN;
                    obj.LEVEL_FROM = param.LevelFrom;
                    obj.MODIFIED_DATE = DateTime.Now;
                    obj.CREATED_DATE = DateTime.Now;
                    var result = _appContext.HUJobBands.Update(obj);
                    await _appContext.SaveChangesAsync();
                }
                else
                {
                    var data = Map<HUJobBandInputDTO, HUJobBand>(param, new HUJobBand());
                    data.STATUS = -1;
                    data.MODIFIED_DATE = DateTime.Now;
                    data.MODIFIED_BY = _appContext.UserName;
                    var result = await _appContext.HUJobBands.AddAsync(data);
                    await _appContext.SaveChangesAsync();
                    return new ResultWithError(data);
                }
                return new ResultWithError(200);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new ResultWithError(ex.Message);
            }
        }

        public async Task<ResultWithError> ChangeStatusAsync(List<int> ids, int status)
        {
            try
            {
                var query = from p in _appContext.HUJobBands where ids.Contains((int)p.ID) select p;
                foreach(var item in query)
                {
                    item.STATUS = status;
                    item.MODIFIED_DATE = DateTime.Now;
                }
                await _appContext.SaveChangesAsync();
                return new ResultWithError(200);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new ResultWithError(ex.Message);
            }
        }

        public async Task<ResultWithError> ChangeStatusAsync(List<int> ids)
        {
            try
            {
                var query = from p in _appContext.HUJobBands where ids.Contains((int)p.ID) select p;
                foreach (var item in query)
                {
                    item.STATUS = item.STATUS ==0?-1:0;
                    item.MODIFIED_DATE = DateTime.Now;
                }
                await _appContext.SaveChangesAsync();
                return new ResultWithError(200);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new ResultWithError(ex.Message);
            }
        }

        public async Task<ResultWithError> DeleteAsync(List<int> ids)
        {
            try
            {
                var query = from p in _appContext.HUJobBands where ids.Contains((int)p.ID) select p;
                foreach (var item in query)
                {
                    _appContext.HUJobBands.Remove(item);
                }
                await _appContext.SaveChangesAsync();
                return new ResultWithError(200);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new ResultWithError(ex.Message);
            }
        }

        public async Task<bool> ValidateJobBand(HUJobBandInputDTO param)
        {
            try
            {
                var c = _appContext.HUJobBands.Where(x => x.NAME_VN.ToLower().Equals(param.NameVN.ToLower()) && x.ID != param.Id);
                return  await c.AnyAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return false;
            }
        }

        public async Task<ResultWithError> GetCboJobBand()
        {
            try
            {
                var data = await (from p in _appContext.HUJobBands
                                  select new{id = p.ID,
                                             name=p.LEVEL_FROM}).ToListAsync();
                return new ResultWithError(data);
            }
            catch (Exception ex)
            {
                return new ResultWithError(ex.Message);
            }
        }

    }
}
