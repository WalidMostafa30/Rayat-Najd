import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const AllProjects = React.lazy(() =>
  import("../pages/AllProjects/AllProjects")
);
const ProjectsMap = React.lazy(() =>
  import("../pages/ProjectsMap/ProjectsMap")
);
const Project = React.lazy(() =>
  import("../pages/Project/Project")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-projects",
        element: <AllProjects />,
      },
      {
        path: "projects-map",
        element: <ProjectsMap />,
      },
      {
        path: "project/:id",
        element: <Project />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
