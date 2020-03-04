import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import RegistrationTable from "views/RegistrationTable/RegistrationTable"
import Icons from "views/examples/Icons.js";
import Example from "views/examples/User";
import App from "views/Calendar/Calendar";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-tv-2 text-primary",
    component: App,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Customer Table",
    icon: "ni ni-bullet-list-67 text-red",
    component: RegistrationTable,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Customer Registration",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/user",
    name: "User Registration",
    icon: "ni ni-circle-08 text-pink",
    component: Example,
    layout: "/auth"
  }
];
export default routes;
