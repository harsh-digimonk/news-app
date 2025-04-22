
import ListScreen from "./pages/ListScreen";
import DetailScreen from "./pages/DetailScreen";
import NotFound from "./components/NotFound";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ListScreen />,
  },
  {
    path: "/about/:id",
    element: <DetailScreen />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
