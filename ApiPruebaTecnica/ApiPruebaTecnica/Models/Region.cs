using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiPruebaTecnica.Models
{
    public class Region
    {
        [Key]
        public short Codigo { get; set; }
        public string Nombre { get; set; }
        public string NombreOficial { get; set; }
        public int CodigoLibroClaseElectronico { get; set; }
    }
}
