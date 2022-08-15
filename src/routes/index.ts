import React from "react";

interface IRoute {
  path: string;
  component: string | React.FunctionComponent;
}

const routesObject: IRoute[] = [
  {
    path: "/",
    component: React.lazy(() => import("../views/Home")),
  },
  {
    path: "/list",
    component: React.lazy(() => import("../views/Results")),
  },
  {
    path: "/details",
    component: React.lazy(() => import("../views/SingleView")),
  },
];

export default routesObject;
