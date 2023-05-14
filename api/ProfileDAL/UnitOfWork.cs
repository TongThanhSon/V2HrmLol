// =============================
// Email: kythuat@tlavietnam.vn
// www.tlavietnam.vn
// =============================
using Common.DAO;
using Common.DataContractCore.Base;
using ProfileDAL.EntityFrameworkCore;
using ProfileDAL.Repositories;
using System;
using System.Threading.Tasks;

namespace ProfileDAL
{
    public class ProfileBusiness : System.IDisposable, IProfileBusiness
    {
        readonly ProfileDbContext _context;
        readonly IDBManager<DBAction.System> _dbManager;
        // List Progile
        ICompanyInfoRepository _CompanyInfoRepository;
        IGroupPositionRepository _GroupPositionRepository;
        IPositionRepository _PositionRepository;
        IOrganizationRepository _OrganizationRepository;
        IContractTypeRepository _ContractTypeRepository;
        IOtherListRepository _SysOtherLists;
        IAllowanceRepository _AllowanceRepository;
        IWelfareRepository _BenerfitRepository;
        IAllowanceEmpRepository _AllowanceEmpRepository;
        ISalaryRepository _SalaryRepository;
        ISalaryScaleRepository _SalaryScaleRepository;
        ISalaryRankRepository _SalaryRankRepository;
        ISalaryLevelRepository _SalaryLevelRepository;
        IHuJobBandRepository _HuJobBandRepository;
        IHuJobRepository _HuJobRepository;
        // Dùng chung All Tenant
        IProvinceRepository _ProvinceRepository;
        IShiftSysRepository _ShiftSysRepository;
        IThemeBlogRepository _ThemeBlogRepository;
        IGroupPositionSysRepository _GroupPositionSysRepository;
        IPositionSysRepository _PositionSysRepository;
        IContractTypeSysRepository _ContractTypeSysRepository;
        ISalarySysRepository _SalarySysRepository;
        ISalaryStructureSysRepository _SalaryStructureSysRepository;
        ISalaryElementSysRepository _SalaryElementSysRepository;
        IFormulaSysRepository _FormulaSysRepository;
        IFormListSysRepository _FormListSysRepository;
        // Nghiệp vụ
        IEmployeeRepository _EmployeeRepository;
        IWorkingRepository _WorkingRepository;
        IContractRepository _ContractRepository;
        ICommendRepository _CommendRepository;
        IDisciplineRepository _DisciplineRepository;
        ITerminateRepository _TerminateRepository;
        IInsInformationRepository _InsInformationRepository;
        IInsChangeRepository _InsChangeRepository;
        IInsuranceTypeRepository _InsuranceTypeRepository;
        IFormListRepository _FormListRepository;
        IBlogInternalRepository _BlogInternalRepository;
        IVoteRepository _VoteRepository;
        IUserOrganiRepository _UserOrganiRepository;
        ISettingMapRepository _SettingMapRepository;
        IReportRepository _ReportRepository;
        //Administration
        IRoomRepository _RoomRepository;
        IBookingRepository _BookingRepository;
        //Share
        IBankRepository _BankRepository;
        IBankBranchRepository _BankBranchRepository;

        ICandidateRepository _CandidateRepository;

        IPositionPaperRepository _PositionPaperRepository;
        public ProfileBusiness(ProfileDbContext context, IDBManager<DBAction.System> dbManager)
        {
            _context = context;
            _dbManager = dbManager;
        }
        public ProfileBusiness(ProfileDbContext context)
        {
            _context = context;
        }
        public IReportRepository ReportRepository
        {
            get
            {
                if (_ReportRepository == null)
                    _ReportRepository = new ReportRepository(_context);

                return _ReportRepository;

            }
        }
        public ISettingMapRepository SettingMapRepository
        {
            get
            {
                if (_SettingMapRepository == null)
                    _SettingMapRepository = new SettingMapRepository(_context);

                return _SettingMapRepository;

            }
        }
        public IUserOrganiRepository UserOrganiRepository
        {
            get
            {
                if (_UserOrganiRepository == null)
                    _UserOrganiRepository = new UserOrganiRepository(_context, _dbManager);

                return _UserOrganiRepository;

            }
        }
        public IVoteRepository VoteRepository
        {
            get
            {
                if (_VoteRepository == null)
                    _VoteRepository = new VoteRepository(_context);

                return _VoteRepository;

            }
        }
        public IBlogInternalRepository BlogInternalRepository
        {
            get
            {
                if (_BlogInternalRepository == null)
                    _BlogInternalRepository = new BlogInternalRepository(_context);

                return _BlogInternalRepository;

            }
        }
        public IFormListRepository FormListRepository
        {
            get
            {
                if (_FormListRepository == null)
                    _FormListRepository = new FormListRepository(_context);

                return _FormListRepository;

            }
        }
        public IInsuranceTypeRepository InsuranceTypeRepository
        {
            get
            {
                if (_InsuranceTypeRepository == null)
                    _InsuranceTypeRepository = new InsuranceTypeRepository(_context);

                return _InsuranceTypeRepository;

            }
        }
        public IInsChangeRepository InsChangeRepository
        {
            get
            {
                if (_InsChangeRepository == null)
                    _InsChangeRepository = new InsChangeRepository(_context);

                return _InsChangeRepository;

            }
        }
        public IInsInformationRepository InsInformationRepository
        {
            get
            {
                if (_InsInformationRepository == null)
                    _InsInformationRepository = new InsInformationRepository(_context);

                return _InsInformationRepository;

            }
        }
        public ITerminateRepository TerminateRepository
        {
            get
            {
                if (_TerminateRepository == null)
                    _TerminateRepository = new TerminateRepository(_context);

                return _TerminateRepository;

            }
        }
        public IEmployeeRepository EmployeeRepository
        {
            get
            {
                if (_EmployeeRepository == null)
                    _EmployeeRepository = new EmployeeRepository(_context);

                return _EmployeeRepository;
            }
        }
        public ISalaryLevelRepository SalaryLevelRepository
        {
            get
            {
                if (_SalaryLevelRepository == null)
                    _SalaryLevelRepository = new SalaryLevelRepository(_context);

                return _SalaryLevelRepository;
            }
        }
        public ISalaryRankRepository SalaryRankRepository
        {
            get
            {
                if (_SalaryRankRepository == null)
                    _SalaryRankRepository = new SalaryRankRepository(_context);

                return _SalaryRankRepository;
            }
        }
        public ISalaryScaleRepository SalaryScaleRepository
        {
            get
            {
                if (_SalaryScaleRepository == null)
                    _SalaryScaleRepository = new SalaryScaleRepository(_context);

                return _SalaryScaleRepository;
            }
        }
        public ISalaryRepository SalaryRepository
        {
            get
            {
                if (_SalaryRepository == null)
                    _SalaryRepository = new SalaryRepository(_context);

                return _SalaryRepository;
            }
        }
        public IAllowanceEmpRepository AllowanceEmpRepository
        {
            get
            {
                if (_AllowanceEmpRepository == null)
                    _AllowanceEmpRepository = new AllowanceEmpRepository(_context);

                return _AllowanceEmpRepository;
            }
        }
        public IWelfareRepository BenerfitRepository
        {
            get
            {
                if (_BenerfitRepository == null)
                    _BenerfitRepository = new WelfareRepository(_context);

                return _BenerfitRepository;
            }
        }
        public IAllowanceRepository AllowanceRepository
        {
            get
            {
                if (_AllowanceRepository == null)
                    _AllowanceRepository = new AllowanceRepository(_context);

                return _AllowanceRepository;
            }
        }
        public IOtherListRepository SysOtherLists
        {
            get
            {
                if (_SysOtherLists == null)
                    _SysOtherLists = new OtherListRepository(_context);

                return _SysOtherLists;
            }
        }
        public IOrganizationRepository OrganizationRepository
        {
            get
            {
                if (_OrganizationRepository == null)
                    _OrganizationRepository = new OrganizationRepository(_context);

                return _OrganizationRepository;
            }
        }
        public IContractTypeRepository ContractTypeRepository
        {
            get
            {
                if (_ContractTypeRepository == null)
                    _ContractTypeRepository = new ContractTypeRepository(_context);

                return _ContractTypeRepository;
            }
        }
        public ICompanyInfoRepository CompanyInfoRepository
        {
            get
            {
                if (_CompanyInfoRepository == null)
                    _CompanyInfoRepository = new CompanyInfoRepository(_context);

                return _CompanyInfoRepository;
            }
        }
        public IGroupPositionRepository GroupPositionRepository
        {
            get
            {
                if (_GroupPositionRepository == null)
                    _GroupPositionRepository = new GroupPositionRepository(_context);

                return _GroupPositionRepository;
            }
        }
        public IPositionRepository PositionRepository
        {
            get
            {
                if (_PositionRepository == null)
                    _PositionRepository = new PositionRepository(_context);

                return _PositionRepository;
            }
        }
        public IGroupPositionSysRepository GroupPositionSysRepository
        {
            get
            {
                if (_GroupPositionSysRepository == null)
                    _GroupPositionSysRepository = new GroupPositionSysRepository(_context);

                return _GroupPositionSysRepository;
            }
        }
        public IPositionSysRepository PositionSysRepository
        {
            get
            {
                if (_PositionSysRepository == null)
                    _PositionSysRepository = new PositionSysRepository(_context);

                return _PositionSysRepository;
            }
        }
        public IContractTypeSysRepository ContractTypeSysRepository
        {
            get
            {
                if (_ContractTypeSysRepository == null)
                    _ContractTypeSysRepository = new ContractTypeSysRepository(_context);

                return _ContractTypeSysRepository;
            }
        }
        public ISalarySysRepository SalarySysRepository
        {
            get
            {
                if (_SalarySysRepository == null)
                    _SalarySysRepository = new SalarySysRepository(_context);

                return _SalarySysRepository;
            }
        }
        public ISalaryStructureSysRepository SalaryStructureSysRepository
        {
            get
            {
                if (_SalaryStructureSysRepository == null)
                    _SalaryStructureSysRepository = new SalaryStructureSysRepository(_context);

                return _SalaryStructureSysRepository;

            }
        }
        public ISalaryElementSysRepository SalaryElementSysRepository
        {
            get
            {
                if (_SalaryElementSysRepository == null)
                    _SalaryElementSysRepository = new SalaryElementSysRepository(_context);

                return _SalaryElementSysRepository;
            }
        }
        public IFormulaSysRepository FormulaSysRepository
        {
            get
            {
                if (_FormulaSysRepository == null)
                    _FormulaSysRepository = new FormulaSysRepository(_context);

                return _FormulaSysRepository;
            }
        }

        public IFormListSysRepository FormListSysRepository
        {
            get
            {
                if (_FormListSysRepository == null)
                    _FormListSysRepository = new FormListSysRepository(_context);

                return _FormListSysRepository;

            }
        }
        public IProvinceRepository ProvinceRepository
        {
            get
            {
                if (_ProvinceRepository == null)
                    _ProvinceRepository = new ProvinceRepository(_context);

                return _ProvinceRepository;
            }
        }
        public IThemeBlogRepository ThemeBlogRepository
        {
            get
            {
                if (_ThemeBlogRepository == null)
                    _ThemeBlogRepository = new ThemeBlogRepository(_context);

                return _ThemeBlogRepository;
            }
        }
        public IWorkingRepository WorkingRepository
        {
            get
            {
                if (_WorkingRepository == null)
                    _WorkingRepository = new WorkingRepository(_context);

                return _WorkingRepository;
            }
        }

        public IContractRepository ContractRepository
        {
            get
            {
                if (_ContractRepository == null)
                    _ContractRepository = new ContractRepository(_context);

                return _ContractRepository;
            }
        }
        public ICommendRepository CommendRepository
        {
            get
            {
                if (_CommendRepository == null)
                    _CommendRepository = new CommendRepository(_context);

                return _CommendRepository;
            }
        }
        public IDisciplineRepository DisciplineRepository
        {
            get
            {
                if (_DisciplineRepository == null)
                    _DisciplineRepository = new DisciplineRepository(_context);

                return _DisciplineRepository;
            }
        }
        public IShiftSysRepository ShiftSysRepository
        {
            get
            {
                if (_ShiftSysRepository == null)
                    _ShiftSysRepository = new ShiftSysRepository(_context);

                return _ShiftSysRepository;
            }
        }
        public IRoomRepository RoomRepository
        {
            get
            {
                if (_RoomRepository == null)
                    _RoomRepository = new RoomRepository(_context);

                return _RoomRepository;
            }
        }
        public IBookingRepository BookingRepository
        {
            get
            {
                if (_BookingRepository == null)
                    _BookingRepository = new BookingRepository(_context);

                return _BookingRepository;
            }
        }
        public IBankRepository BankRepository
        {
            get
            {
                if (_BankRepository == null)
                    _BankRepository = new BankRepository(_context);

                return _BankRepository;
            }
        }
        public IBankBranchRepository BankBranchRepository
        {
            get
            {
                if (_BankBranchRepository == null)
                    _BankBranchRepository = new BankBranchRepository(_context);

                return _BankBranchRepository;
            }
        }

        public IPositionPaperRepository PositionPaperRepository
        {
            get
            {
                if (_PositionPaperRepository == null)
                    _PositionPaperRepository = new PositionPaperRepository(_context);

                return _PositionPaperRepository;
            }
        }

        public IHuJobBandRepository HuJobBandRepository
        {
            get
            {
                if (_HuJobBandRepository == null)
                    _HuJobBandRepository = new HuJobBandRepository(_context);

                return _HuJobBandRepository;
            }
        }

        public IHuJobRepository HuJobRepository
        {
            get
            {
                if (_HuJobRepository == null)
                    _HuJobRepository = new HuJobRepository(_context);

                return _HuJobRepository;
            }
        }
        public ICandidateRepository CandidateRepository
        {
            get
            {
                if (_CandidateRepository == null)
                    _CandidateRepository = new CandidateRepository(_context);

                return _CandidateRepository;
            }
        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }

    }
}
