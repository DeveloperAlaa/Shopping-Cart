import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import Store from './routes/store'
import Home from './routes/home'
import RootLayout from './components/root-layout'


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
