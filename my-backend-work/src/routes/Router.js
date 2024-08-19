import { createBrowserRouter, Route } from "react-router-dom";

import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <Home />,
  },
]);

export default router;
