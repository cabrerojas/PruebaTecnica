using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebService.API.Controllers
{
    public class RegionController : ControllerBase
    {
        // GET: RegionController
        public IActionResult Index()
        {
            return Ok();
        }

        // GET: RegionController/Details/5
        public IActionResult Details(int id)
        {
            return Ok();
        }

        // GET: RegionController/Create
        public IActionResult Create()
        {
            return Ok();
        }

        // POST: RegionController/Create
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

        // GET: RegionController/Edit/5
        public IActionResult Edit(int id)
        {
            return Ok();
        }

        // POST: RegionController/Edit/5
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

        // GET: RegionController/Delete/5
        public IActionResult Delete(int id)
        {
            return Ok();
        }

        // POST: RegionController/Delete/5
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
