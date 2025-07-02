
import type { RouteObject } from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import Home from "../pages/Home";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  }
];