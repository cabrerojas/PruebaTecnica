using System;
using System.Collections.Generic;
using Newtonsoft.Json;

#nullable disable

namespace backend_prueba_tecnica.Models
{
    public partial class Comuna
    {
        public Comuna()
        {
            Personas = new HashSet<Persona>();
        }

        public short RegionCodigo { get; set; }
        public short CiudadCodigo { get; set; }
        public short Codigo { get; set; }
        public string Nombre { get; set; }
        public int CodigoPostal { get; set; }
        public int CodigoLibroClaseElectronico { get; set; }
        [JsonIgnore]
        public virtual Ciudad Ciudad { get; set; }
        [JsonIgnore]
        public virtual ICollection<Persona> Personas { get; set; }
    }
}
