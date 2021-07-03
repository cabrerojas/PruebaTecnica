using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebService.API.Model
{
    [Table("Region")]
    public partial class Region
    {
        public Region()
        {
            Ciudades = new HashSet<Ciudad>();
        }

        [Key]
        public short Codigo { get; set; }
        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }
        [Required]
        [StringLength(40)]
        public string NombreOficial { get; set; }
        public int CodigoLibroClaseElectronico { get; set; }

        [InverseProperty(nameof(Ciudad.RegionCodigoNavigation))]
        public virtual ICollection<Ciudad> Ciudades { get; set; }
    }
}
