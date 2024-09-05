import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import TaskOnePage from "../pages/TaskOnePage";
import TaskTwoPage from "../pages/TaskTwoPage";
import TaskThreePage from "../pages/TaskThreePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TaskOnePage />,
      },
      {
        path: "/task-two",
        element: <TaskTwoPage />,
      },
      {
        path: "/task-three",
        element: <TaskThreePage />,
      },
    ],
  },
]);

export default router;
