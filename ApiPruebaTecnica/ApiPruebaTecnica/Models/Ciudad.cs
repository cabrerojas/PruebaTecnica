using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiPruebaTecnica.Models
{
    public class Ciudad
    {
        [ForeignKey("Region")]
        [Column(Order = 0)]
        public short RegionCodigo { get; set; }
        [Key][Column(Order = 1)]

        public short Codigo { get; set; }

        public string Nombre { get; set; }


        
    }
}
