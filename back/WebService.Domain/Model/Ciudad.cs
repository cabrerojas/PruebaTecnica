using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebService.API.Model
{
    [Table("Ciudad")]
    public partial class Ciudad
    {
        public Ciudad()
        {
            Comunas = new HashSet<Comuna>();
        }

        [Key]
        public short RegionCodigo { get; set; }
        [Key]
        public short Codigo { get; set; }
        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }

        [ForeignKey(nameof(RegionCodigo))]
        [InverseProperty(nameof(Region.Ciudades))]
        public virtual Region RegionCodigoNavigation { get; set; }
        [InverseProperty(nameof(Comuna.Ciudad))]
        public virtual ICollection<Comuna> Comunas { get; set; }
    }
}
