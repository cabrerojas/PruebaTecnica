using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebService.Domain.Views
{
    public class PersonaDto
    {
        [Required(ErrorMessage = "campo run es requerido")]
        public string run { get; set; }
        [Required(ErrorMessage = "campo nombres es requerido")]
        public string nombres { get; set; }
        public string nombre { get; set; }
        [Required(ErrorMessage = "campo apellido_paterno es requerido")]
        public string apellido_paterno { get; set; }
        [Required(ErrorMessage = "campo apellido_materno es requerido")]
        public string apellido_materno { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Email invalido")]
        public string email { get; set; }
        [Required(ErrorMessage = "campo sexo es requerido")]
        public short sexo_code { get; set; }
        public string sexo_name { get; set; }
        [Required(ErrorMessage = "campo fecha_nacimiento es requerido")]
        public string fecha_nacimiento { get; set; }
        [Required(ErrorMessage = "campo region es requerido")]
        public short region_code { get; set; }
        public string region_name { get; set; }
        [Required(ErrorMessage = "campo comuna es requerido")]
        public short comuna_code { get; set; }
        [Required(ErrorMessage = "campo cuidad es requerido")]
        public short cuidad_code { get; set; }
        public string cuidad_name { get; set; }
        [Required(ErrorMessage = "campo direccion es requerido")]
        public string direccion { get; set; }
        [Required(ErrorMessage = "campo telefono es requerido")]
        public int telefono { get; set; }
        public string observaciones { get; set; }
    }
}
