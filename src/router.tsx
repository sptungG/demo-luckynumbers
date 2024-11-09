import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Providers from './components/providers/Providers';

import PrizeConfigScreen from './pages/PrizeConfigScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrizeConfigScreen />,
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
