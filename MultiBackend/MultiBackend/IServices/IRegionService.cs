using MultiBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiBackend.IServices
{
    public interface IRegionService
    {
        IEnumerable<Region> GetRegiones();
        IEnumerable<Ciudad> GetCiudades();
        IEnumerable<Comuna> GetComunas();
    }
}
