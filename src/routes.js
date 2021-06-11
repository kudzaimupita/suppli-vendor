/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import Maps from "./views/examples/Maps.js";
import Users from "./views/examples/Users.js";
import ProfileSettings from "./views/examples/ProfileSettings.js";
import CreateProduct from "./views/examples/CreateProducts.js";
import EditProduct from "./views/examples/EditProduct.js";
import ProductDetails from "./pages/ProductDetails";

import Tables from "./views/examples/Tables.js";

var routes = [
  {
    path: "/index",
    name: "Overview",
    icon: "ni ni-tv-2 text-success",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/order-summary",
    name: "Order summary",
    icon: "ni ni-single-copy-04 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-bag-17 text-black",
    component: Tables,
    layout: "/admin",
  },

  {
    path: "/create-products",
    name: "Add product",
    icon: "ni ni-fat-add text-info",
    component: CreateProduct,
    layout: "/admin",
  },
    {
    path: "/campaign",
    name: "Email marketing",
    icon: "ni ni-email-83 text-red",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/plug-settings",
    name: "Settings",
    icon: "ni ni-settings-gear-65 text-primary",
    component: ProfileSettings,
    layout: "/admin",
  },
  {
    path: "/product/:id",
    // name: "Settings",
    // icon: "ni ni-settings-gear-65 text-primary",
    component: ProductDetails,
    layout: "/admin",
  },



  {
    path: "/edit-product/:id",
    // name: "Settingsssssss",
    component: EditProduct,
    layout: "/admin",
  },
];
export default routes;
