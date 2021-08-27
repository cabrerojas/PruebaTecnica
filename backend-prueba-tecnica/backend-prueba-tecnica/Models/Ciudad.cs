using System;
using System.Collections.Generic;
using Newtonsoft.Json;

#nullable disable

namespace backend_prueba_tecnica.Models
{
    public partial class Ciudad
    {
        public Ciudad()
        {
            Comunas = new HashSet<Comuna>();
        }

        public short RegionCodigo { get; set; }
        public short Codigo { get; set; }
        public string Nombre { get; set; }

        [JsonIgnore]
        public virtual Region RegionCodigoNavigation { get; set; }
        public virtual ICollection<Comuna> Comunas { get; set; }
    }
}
