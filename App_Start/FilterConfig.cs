﻿using System.Web;
using System.Web.Mvc;

namespace ANGULAR_HRMS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}