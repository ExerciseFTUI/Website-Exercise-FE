import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import App from "./App"

import EventPage from "./pages/Event"
import LandingPage from "./pages/Landing/"

import "./main.css"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/events",
        element: <EventPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/home" />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
