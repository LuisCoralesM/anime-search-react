import Home from "../views/Home";

interface IRoute {
  path: string;
  component: string | React.FunctionComponent<unknown>;
}

const routesObject: IRoute[] = [
  {
    path: "/",
    component: Home,
  },
];

export default routesObject;
