import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PlayPage from "../../pages/PlayPage";
import { useAppSelector } from "../../redux/store";
import { memo } from "react";

const Routes = () => {
  const configState = useAppSelector((s) => s.config);
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          children: [
            {
              path: "/",
              index: true,
              element: <HomePage />,
            },
            {
              path: "/play",
              element: configState.participantsCount > 1 ? <PlayPage /> : <Navigate to="/" />,
            },
          ],
        },
      ])}
    />
  );
};

export default memo(Routes);
