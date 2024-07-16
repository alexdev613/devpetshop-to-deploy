import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './App';
import { Toaster } from 'react-hot-toast';
import './index.css'
import { register } from 'swiper/element/bundle';

import CartProvider from './contexts/CartContext';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
