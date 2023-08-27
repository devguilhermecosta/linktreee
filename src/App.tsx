import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home"
import Admin from "./pages/admin/admin"
import Login from "./pages/login"
import Networks from "./pages/networks"
import NotFound from "./pages/notfound"
import Private from "./routes/private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Private><Admin /></Private>,
  },
  {
    path: "admin/social",
    element: <Private><Networks /></Private>,
  },
  {
    path: "*",
    element: <NotFound />,
  }

])

export { router };
