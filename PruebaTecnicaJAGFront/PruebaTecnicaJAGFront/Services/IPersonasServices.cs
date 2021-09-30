using PruebaTecnicaJAGFront.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnicaJAGFront.Services
{
    interface IPersonasServices
    {
        Task<List<Personas>> GetListarPersonasAsync();
    }
}
