using System.Web.Mvc;

namespace POS.Controllers
{
    public class ItemController : Controller
    {
        public ActionResult New()
        {
            return View();
        }

        public ActionResult Edit(string id)
        {
            return View();
        }

        [HttpGet]
        public ActionResult SingleOption()
        {
            return PartialView("Edit_partials/Templates/_SingleChoiceTemplate");
        }
    }
}