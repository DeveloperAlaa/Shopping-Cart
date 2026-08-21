import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import Store from './routes/store'
import Home from './routes/home'
import RootLayout from './components/root-layout'
import { ShoppingCartProvider } from './contexts/shoppingCartContext'
import CartDrawer from './components/cart-drawer'


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/store",
        element: <Store />,
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={ router } />
      <CartDrawer />
    </ShoppingCartProvider>
  </StrictMode>,
)
