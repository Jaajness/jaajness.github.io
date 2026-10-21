import { createBrowserRouter } from "react-router"
import Root from "./pages/Root"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import AIDeclaration from "./pages/AIDeclaration"
import NotFound from "./pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projet/:slug", Component: ProjectDetail },
      { path: "declaration-ia", Component: AIDeclaration },
      { path: "*", Component: NotFound },
    ],
  },
])
