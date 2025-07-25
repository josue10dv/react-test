
import type { RouteObject } from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Sueldo from "../pages/Sueldo";
import Bono from "../pages/Bono";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "sueldo", element: <Sueldo /> },
      { path: "bono", element: <Bono /> },
    ],
  }
];