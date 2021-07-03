using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebService.API.Controllers
{
    public class ComunaController : ControllerBase
    {
        // GET: HomeController
        public IActionResult Index()
        {
            return Ok();
        }

        // GET: HomeController/Details/5
        public IActionResult Details(int id)
        {
            return Ok();
        }

        // GET: HomeController/Create
        public IActionResult Create()
        {
            return Ok();
        }

        // POST: HomeController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }

        // GET: HomeController/Edit/5
        public IActionResult Edit(int id)
        {
            return Ok();
        }

        // POST: HomeController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }

        // GET: HomeController/Delete/5
        public IActionResult Delete(int id)
        {
            return Ok();
        }

        // POST: HomeController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }
    }
}
