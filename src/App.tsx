import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home"
import Admin from "./pages/admin/admin"
import Login from "./pages/login"
import Networks from "./pages/networks"
import NotFound from "./pages/notfound"

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
    path: "/admin/social",
    element: <Admin />,
  },
  {
    path: "networks",
    element: <Networks />,
  },
  {
    path: "*",
    element: <NotFound />,
  }

])

export { router };
