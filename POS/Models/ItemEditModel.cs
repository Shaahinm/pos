using System.Collections.Generic;
using System.Web.Mvc;

namespace POS.Models
{
    public class ItemEditModel
    {
        public string Id { get; set; }
        public string ItemName { get; set; }
        public string ItemSku { get; set; }
        public IList<SelectListItem> ItemTag { get; set; }
        public IList<SelectListItem> ItemDepartment { get; set; }
        public IList<SelectListItem> ItemCategory { get; set; }
    }

    public class DropDown
    {
        public string _id { get; set; }
        public string name { get; set; }
    }

    public class DropDownResponseModel
    {
        public string status { get; set; }
        public string statusCode { get; set; }
        public IList<DropDown> items { get; set; }
    }



    public class ItemResponseModel
    {
        public string status { get; set; }
        public string statusCode { get; set; }
        public ItemModel item { get; set; }
    }

    public class TagModel
    {
        public string _id { get; set; }
        public string name { get; set; }
        public string value { get; set; }
        public string text { get; set; }

    }
}