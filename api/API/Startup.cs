using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using CoreDAL.EntityFrameworkCore;
using CoreDAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CoreDAL;
using CoreDAL.Repositories;
using ProfileDAL.EntityFrameworkCore;
using PayrollDAL.EntityFrameworkCore;
using ProfileDAL.Repositories;
using ProfileDAL;
using Common;
using AttendanceDAL.Repositories;
using AttendanceDAL;
using AttendanceDAL.EntityFrameworkCore;
using PayrollDAL.Repositories;
using PayrollDAL;
using Newtonsoft.Json;
using System.Linq;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;
using IdentityModel.Client;
using CoreDAL.Utilities;
using Microsoft.Extensions.Options;
using HRProcessDAL;
using HRProcessDAL.Repositories;
using HRProcessDAL.EntityFrameworkCore;
using Common.DAO;
using Common.DataContractCore.Base;

namespace API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            HostingEnvironment = hostingEnvironment;
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.Configure<JWTSettings>(Configuration.GetSection("JWTSettings"));
            // Config Migration CoreDAL
            TLAContext.isMigration = true;
            services.AddDbContext<TLAContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("CoreDbContext");
                    });
            });
            services.AddDbContext<CoreDbContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("CoreDbContext");
                    });
            });
            services.AddDbContext<RefreshTokenContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("RefreshTokenContext");
                    });
            });

            services.AddDbContext<ProfileDbContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("ProfileDbContext");
                    }).EnableSensitiveDataLogging();
            });

            services.AddDbContext<HRProcessDbContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("HRProcessDbContext");
                    }).EnableSensitiveDataLogging();
            });

            services.AddDbContext<AttendanceDbContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("ProfileDbContext");
                    }).EnableSensitiveDataLogging();
            });
            services.AddDbContext<PayrollDbContext>(options =>
            {
                options.UseSqlServer(Configuration["connectionString"],
                    sqlOracleOptions =>
                    {
                        sqlOracleOptions.MigrationsAssembly("ProfileDbContext");
                    }).EnableSensitiveDataLogging();
            });
            services.AddIdentity<SysUser, IdentityRole>(opts =>
            {
                opts.Password.RequiredUniqueChars = 0;
                opts.Password.RequireNonAlphanumeric = false;
            })

            .AddEntityFrameworkStores<CoreDbContext>()
            .AddEntityFrameworkStores<ProfileDbContext>()
            .AddEntityFrameworkStores<HRProcessDbContext>()
            .AddEntityFrameworkStores<PayrollDbContext>()
            .AddEntityFrameworkStores<AttendanceDbContext>()
            .AddDefaultTokenProviders();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(o =>
            {
                o.RequireHttpsMetadata = false;
                o.SaveToken = true;
                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = Configuration["JwtToken:Issuer"],
                    ValidAudience = Configuration["JwtToken:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey
                    (Encoding.UTF8.GetBytes(Configuration["JwtToken:SecretKey"])),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = false,
                    ValidateIssuerSigningKey = true
                };
            });


            // Tannv:
            services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin",
                      builder =>
                          builder
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .SetIsOriginAllowed(origin => true) // allow any origin
                            .AllowCredentials() // <==

                      );
            });


            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            //services.AddNodeServices();

            // Register the Swagger generator, defining one or more Swagger 
            //Prevent automatically convert to UTC

            //services.AddMvc().AddJsonOptions(options =>
            //{
            //    options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Local;
            //    options.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
            //});
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
                c.CustomSchemaIds(type => type.ToString());
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Histaff API",
                    Version = "v1",
                    Description = "APIs of Histaff",

                });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    In = ParameterLocation.Header,
                    Description = "Please insert JWT with Bearer into field",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                        },
                        new List<string>()
                    }
                 });
                //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            });

            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IProfileBusiness, ProfileBusiness>();
            services.AddTransient<IHRProcessBusiness, HRProcessBusiness>();
            services.AddTransient<IAttendanceBusiness, AttendanceBusiness>();
            services.AddTransient<IPayrollBusiness, PayrollBusiness>();
            services.AddTransient<IRefreshTokenService, RefreshTokenService>();
            services.AddTransient <IDBManager<DBAction.System>, MsSqlDBManager<DBAction.System>>();


            //------ Environment Development ----------
            services.AddTransient<IDatabaseInitializer, DatabaseInitializer>();
            services.AddRouting(o => o.LowercaseQueryStrings = true);
            services.AddAuthorization();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.Use(async (ctx, next) =>
            {
                await next();
                if (ctx.Response.StatusCode == 204)
                {
                    ctx.Response.ContentLength = 0;
                }
            });

            app.UseStaticFiles();

            //Tannv: 
            app.UseCors("AllowOrigin");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger(c =>
                {
                    c.RouteTemplate = "/swagger/{documentName}/swagger.json";

                });
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Histaff API v1");


                });
            }
            else
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger(c =>
                {
                    c.RouteTemplate = "/swagger/{documentName}/swagger.json";

                });
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Histaff API v1");


                });
                //app.UseMvc(routes =>
                //{
                //    routes.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}");
                //    routes.MapRoute("Sitemap", "sitemap.xml", new { controller = "Home", action = "SitemapXml" });
                //});
                //app.UseExceptionHandler("/Home/Error");
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }

    }
}
