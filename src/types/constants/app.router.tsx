import { createHashRouter } from "react-router-dom";
import { ERouteNames } from "./e.route.names";
import { Classes } from "../../pages/Classes";
import { AboutUs } from "../../pages/AboutUs";
import { Home } from "../../pages/Home";

export const publicRoutes = createHashRouter([
  {
    path: ERouteNames.HOME,
    element: <Home />
  },
  {
    path: ERouteNames.CLASSES,
    element: <Classes />
  },
  {
    path: ERouteNames.ABOUT_US,
    element: <AboutUs />
  }
]);
