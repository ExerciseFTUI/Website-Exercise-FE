import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  Navigate, 
  RouterProvider 
} from 'react-router-dom'

import App from './App'
import LandingPages from './pages/LandingPages'

import './main.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPages />
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to="/" />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
