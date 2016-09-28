using Newtonsoft.Json;
using POS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace POS.Controllers
{
    public class ItemController : Controller
    {
        public ActionResult New()
        {
            return View();
        }

        private readonly Uri uri = new Uri("http://ieisys.com:12220/");

        public async Task<ActionResult> Edit(string id)
        {
            //var departments = new List<string> { "yek", "do", "se" };

            try
            {
                var httpClient = new System.Net.Http.HttpClient { BaseAddress = uri };
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await httpClient.GetAsync("api/item/" + id);
                var res = await response.Content.ReadAsStringAsync();
                var item = JsonConvert.DeserializeObject<ItemResponseModel>(res);

                var deps = await GetDropDowns("department", item.item.itemDepartment._id);
                var cats = await GetDropDowns("category", item.item.itemCategory._id);
                var taxes = await GetDropDowns("tax", item.item.taxType._id);

                var tags = "";

                foreach (TagModel tag in item.item.itemTag)
                {
                    tags += tag.value + ",";
                }

                tags = tags.Remove(tags.LastIndexOf(",", StringComparison.Ordinal));

                var model = new EditViewModel
                {
                    _id = item.item._id,
                    itemName = item.item.itemName,
                    itemSku = item.item.itemSku,
                    itemDepartment = deps,
                    itemCategory = cats,
                    itemTag = item.item.itemTag,
                    price = item.item.price,
                    cost = item.item.cost,
                    taxType = taxes,
                    priceType = new SelectListItem[]
                    {
                        new SelectListItem {
                            Value = "fixed",
                            Text = "ثابت",
                            Selected = (item.item.priceType.Equals("fixed"))
                        },
                         new SelectListItem {
                            Value = "variable",
                            Text = "متغییر",
                            Selected = (item.item.priceType.Equals("variable"))
                        },
                        new SelectListItem {
                            Value = "unit",
                            Text = "ثابت",
                            Selected = (item.item.priceType.Equals("unit"))
                        }
                    },
                    tags = tags,
                    taxedPrice = item.item.taxedPrice
                    //itemDepartment = item.item.itemDepartment.Select(e => new SelectListItem
                    //{
                    //    Text = e,
                    //    Value = "1",
                    //    Selected = (_response.item.departmetn.id == e.id)
                    //}).ToList(),
                };
                return View(model);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpGet]
        public ActionResult SingleOption()
        {
            return PartialView("Edit_partials/Templates/_SingleChoiceTemplate");
        }

        public async Task<IList<SelectListItem>> GetDropDowns(string name, string id)
        {
            try
            {

                var httpClient = new HttpClient { BaseAddress = uri };
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await httpClient.GetAsync("api/" + name);
                var res = await response.Content.ReadAsStringAsync();

                var _response = JsonConvert.DeserializeObject<DropDownResponseModel>(res);
                var toReturn = _response.items.Select(e => new SelectListItem
                {
                    Text = e.name,
                    Value = e._id,
                    Selected = (id.Equals(e._id))
                }).ToList();

                Console.Write(toReturn);

                return toReturn;

            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return null;
            }
        }
    }
}