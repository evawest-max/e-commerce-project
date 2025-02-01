"use client"
import './App.css'
import CartProvider from './context folder/appContext'
import Appsection from './app componets';
import ShowRoom from './showRoom component/showroom'
import Cart from './cart component/cart'
import Checkout from './cart component/checkoutPage'
import Notfound from './notfound/notfound'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Appsection />}>
      <Route index element={<ShowRoom />} />
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>

      <Route path='*' element={<Notfound />} />
    </Route>
  )
)

export default function Home() {
  return (

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}
