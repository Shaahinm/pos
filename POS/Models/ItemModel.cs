using System.Collections.Generic;
using System.Web.Mvc;

namespace POS.Models
{
    public class EditViewModel
    {
        public string _id { get; set; }
        public string itemName { get; set; }
        public string itemSku { get; set; }
        public IList<SelectListItem> itemDepartment { get; set; }
        public string itemDepartmentId { get; set; }
        public IList<SelectListItem> itemCategory { get; set; }
        public string itemCategoryId { get; set; }
        public IList<TagModel> itemTag { get; set; }
        public string price { get; set; }
        public string cost { get; set; }
        public IList<SelectListItem> taxType { get; set; }
        public string taxtTypeId { get; set; }
        public IList<SelectListItem> priceType { get; set; }
        public string priceTypeId { get; set; }
        public string tags { get; set; }
        public string taxedPrice { get; set; }

    }

    public class ItemModel
    {
        public string _id { get; set; }
        public string itemName { get; set; }
        public string itemSku { get; set; }
        public DropDown itemDepartment { get; set; }
        public DropDown itemCategory { get; set; }
        public IList<TagModel> itemTag { get; set; }
        public string price { get; set; }
        public string cost { get; set; }
        public DropDown taxType { get; set; }
        public string priceType { get; set; }
        public string tags { get; set; }
        public string taxedPrice { get; set; }

    }

}