using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace MultiBackend.Models
{
    public partial class Persona
    {
        [Key]
        public Guid Id { get; set; }
        public string Run { get; set; }
        public int RunCuerpo { get; set; }
        public string RunDigito { get; set; }
        public string Nombre { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Email { get; set; }
        public short SexoCodigo { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        [ForeignKey("RegionCodigo")]
        public short? RegionCodigo { get; set; }
        [ForeignKey("CiudadCodigo")]
        public short? CiudadCodigo { get; set; }
        public short? ComunaCodigo { get; set; }
        public string Direccion { get; set; }
        public int? Telefono { get; set; }
        public string Observaciones { get; set; }
        [ForeignKey("ComunaCodigo")]
        public virtual Comuna Comuna { get; set; }
        [ForeignKey("SexoCodigo")]
        public virtual Sexo SexoCodigoNavigation { get; set; }
    }

    public class PersonaVm {
        public Guid Id { get; set; }
        public string Run { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Email { get; set; }
        public short SexoCodigo { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public short? ComunaCodigo { get; set; }
        public string Direccion { get; set; }
        public int? Telefono { get; set; }
        public string Observaciones { get; set; }
        public short? RegionCodigo { get; set; }
        public short? CiudadCodigo { get; set; }
    }
}
