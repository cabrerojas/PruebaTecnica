using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnicaMSF.Models.Responses
{
    public class Result
    {
        public Result()
        {
            Error = new Error();
        }

        public bool Success { get; set; }
        public dynamic Data { get; set; }
        public Error Error { get; set; }
    }
    public class Error
    {
        public string Message { get; set; }
        public int StatusCode { get; set; }
    }
}
