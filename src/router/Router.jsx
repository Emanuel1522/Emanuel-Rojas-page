import Home from "../Home";
import Cv from "../pages/Cv";
import Diploma from "../pages/Diploma";
import Project from "../pages/Project";

export const Router = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projects",
    element: <Project />
  },
  {
    path: "/diplomas",
    element: <Diploma />
  },
  {
    path: "/cv",
    element: <Cv />
  }
];
