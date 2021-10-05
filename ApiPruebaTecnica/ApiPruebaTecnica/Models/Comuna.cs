using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiPruebaTecnica.Models
{
    public class Comuna
    {
		public short RegionCodigo { get; set; }
		public short CiudadCodigo { get; set; }
		[Key]
		public short Codigo { get; set; }
		public string Nombre { get; set; }
		public int CodigoPostal { get; set; }
		public int CodigoLibroClaseElectronico { get; set; }
	}
}
