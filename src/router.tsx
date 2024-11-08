import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Providers from './components/providers/Providers';

import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const Routers = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default Routers;
