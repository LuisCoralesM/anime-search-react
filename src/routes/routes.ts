import Home from "../views/Home";
import Results from "../views/Results";
import SingleView from "../views/SingleView";

interface IRoute {
  path: string;
  component: string | React.FunctionComponent<unknown>;
}

const routesObject: IRoute[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: Results,
  },
  {
    path: "/details",
    component: SingleView,
  },
];

export default routesObject;
