import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import "./main.css"

import App from "./App"

import LandingPage from "./pages/Landing/"
import Features from "./pages/Features"
import EventPage from "./pages/EventList/"
import EventDetails from "./pages/EventDetails/"

import PastProject from "./pages/PastProject"
import GetToKnow from "./pages/GetToKnow"

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
      {
        path: "/events/event/:name",
        element: <EventDetails />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/past-projects",
        element: <PastProject />,
      },
      {
        path: "/about-us",
        element: <GetToKnow />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
