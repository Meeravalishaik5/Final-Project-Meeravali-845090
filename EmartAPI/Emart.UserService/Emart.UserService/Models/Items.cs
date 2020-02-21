﻿using System;
using System.Collections.Generic;

namespace Emart.UserService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string CategoryId { get; set; }
        public string SubcategoryId { get; set; }
        public decimal Price { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public int StockNumber { get; set; }
        public string Remarks { get; set; }

        public virtual Category Category { get; set; }
        public virtual SubCategory Subcategory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
