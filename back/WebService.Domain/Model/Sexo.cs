using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebService.API.Model
{
    [Table("Sexo")]
    public partial class Sexo
    {
        public Sexo()
        {
            Personas = new HashSet<Persona>();
        }

        [Key]
        public short Codigo { get; set; }
        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }
        [Required]
        [StringLength(1)]
        public string Letra { get; set; }

        [InverseProperty(nameof(Persona.SexoCodigoNavigation))]
        public virtual ICollection<Persona> Personas { get; set; }
    }
}
