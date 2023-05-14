﻿using Common.Interfaces;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PayrollDAL.Models
{
    [Table("PA_KPI_FORMULA")] // PHẦN TỬ LƯƠNG
    public class KpiFormula : IAuditableEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }
        
        [Required]
        [MaxLength(100)]
        public string COL_NAME { get; set; }
        public string FORMULA { get; set; }
        public string FORMULA_NAME { get; set; }
        public bool IS_ACTIVE { get; set; }
        public int ORDERS { get; set; }
        [MaxLength(450)]
        public string CREATE_BY { get; set; }
        [MaxLength(450)]
        public string UPDATED_BY { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        public DateTime? UPDATED_DATE { get; set; }
    }
}