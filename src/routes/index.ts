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
  {
    path: "/top",
    component: React.lazy(() => import("../views/TopResults")),
  },
  {
    path: "/current",
    component: React.lazy(() => import("../views/CurrentResults")),
  },
];

export default routesObject;
