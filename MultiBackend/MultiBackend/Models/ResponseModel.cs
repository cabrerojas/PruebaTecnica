using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiBackend.Models
{
    public class ResponseModel
    {
        public string messageResponse { get; set; }
        public object data { get; set; }
        public string error { get; set; }
    }
}
