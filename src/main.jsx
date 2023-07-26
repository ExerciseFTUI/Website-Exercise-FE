import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import "./main.css"

import App from "./App"

import LandingPage from "./pages/Landing/"
import Features from "./pages/Features"
import EventPage from "./pages/EventList/"
import EventRouter from "./components/events/EventRouter.jsx"
import EventDetails from "./pages/EventDetails/"

import PastProject from "./pages/PastProject"
import GetToKnow from "./pages/GetToKnow"
import ExTicle from "./pages/ExTicle"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      EventRouter,
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/past-projects",
        element: <PastProject />,
      },
      // {
      //   path: "/events",
      //   element: <EventPage />
      // },
      {
        path: "/exticle",
        element: <ExTicle />,
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


