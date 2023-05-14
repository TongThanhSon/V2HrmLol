using Common.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProfileDAL.Models
{
    [Table("HU_JOB_BAND")]
    public class HUJobBand 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }

        [Required]
        [MaxLength(255)]
        public string NAME_VN { get; set; }

        [MaxLength(255)]
        public string NAME_EN { get; set; }

        [MaxLength(5)]
        public string LEVEL_FROM { get; set; }

        [MaxLength(5)]
        public string LEVEL_TO { get; set; }

        public int? STATUS { get; set; }

        public DateTime? CREATED_DATE { get; set; }

        public string CREATED_BY { get; set; }

        public string CREATED_LOG { get; set; }

        public string MODIFIED_BY { get; set; }

        public DateTime? MODIFIED_DATE { get; set; }

        public string MODIFIED_LOG { get; set; }

        public int? TITLE_GROUP_ID { get; set; }

        public int? OTHER { get; set; }

    }
}
