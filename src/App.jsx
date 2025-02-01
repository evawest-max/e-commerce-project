
import './App.css'
import CartProvider from './context folder/appContext'
import Appsection from './app componets';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ShowRoom from './showRoom component/showroom'
import Cart from './cart component/cart'
import Checkout from './cart component/checkoutPage'
import Notfound from './notfound/notfound'

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

function App() {

  return (

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
