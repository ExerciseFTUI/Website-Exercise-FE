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
import ExTicle from "./pages/ExTicle"
import ComingSoon from "./components/comingSoon/ComingSoon"
import ErrorPage from "./components/errorPage/ErrorPage"

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/feature",
        children: [{ path: "background-remover", element: <ComingSoon /> }],
      },
      {
        path: "/past-projects",
        element: <PastProject />,
      },
      {
        path: "/exticle",
        element: <ExTicle />,
        children: [{ path: ":title", element: <ComingSoon /> }],
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
