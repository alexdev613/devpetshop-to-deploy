import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

import { Layout } from './components/Layout';
import { ProductDetails } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { Favorites } from './pages/Favorites';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/carrinho",
        element: <Cart />
      },
      {
        path: "/favoritos",
        element: <Favorites />
      },
      {
        path: "/produto/:id",
        element: <ProductDetails />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export { router };