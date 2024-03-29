﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.UserService.Models;

namespace Emart.UserService.Repositories
{
    public interface IUserRepository
    {
        Buyer BuyerLogin(string username,string password);
        Seller SellerLogin(string username,string password);
        void SellerSignUp(Seller seller);
        void BuyerSignUp(Buyer buyer);
    }
}
