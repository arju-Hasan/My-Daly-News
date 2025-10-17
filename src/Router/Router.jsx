
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
    // {
    //   path: "/",
    //   Component: Home,
    // }
    ]
  },
]);

export default router;