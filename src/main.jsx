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
      // {
      //   path: "/events/event/:name",
      //   element: <EventDetails />,
      // },
      {
        path:'/events/event/power-factory-digsilent-training',
        element: 
        <EventDetails 
          title={"Power Factory DigSILENT Training"}
          prices={{
            indv: 100,
            team: 450
          }}
          date={"29 April 2023"}
          desc={"Digsilent Training is a training with the DigSilent application specifically for students majoring in Electrical Engineering who want to take Electric Power specialization. Digsilent Training collaborates with STL Laboratory FTUI in March 2023."}
          benefits={"Kompetensi Dasar STL dan DigSILENT"} 
          curriculum={{
            day1: [
              "Dasar STL",
              "Pengenalan DigSILENT",
              "Simulasi Pembuatan & Pembuatan Single Line Diagram"
            ],
            day2: [
              "Load Flow",
              "Short Circuit",
              "Pembuatan Single Line Diagram",
              "Error Handling, Summary, & Report"
            ]
          }}
        />
      },
      {
        path:'/events/event/technoskill-1.0',
        element: 
        <EventDetails 
          title={"Technoskill 1.0"}
          prices={{
            indv: 35,
            team: 90
          }}
          date={"29 Mei 2023"}
          desc={"Technoskill 1.0 this time is present to support the hard skill needs of the Electrical Engineering Department residents by bringing two series of events, namely Workshops and Webinars which can be attended by all students and students of the Electrical Engineering Department."}
          benefits={"Kompetensi Dasar"} 
          curriculum={{
            day1: "Deep Learning for Image Classification",
            day2: null
          }}
          apps={null}
        />
      },
      {
        path:'/events/event/proteus-training',
        element: 
        <EventDetails 
          title={"Proteus Training"}
          prices={{
            indv: 35,
            team: null
          }}
          date={"29 April 2023"}
          desc={"Proteus Training is an exciting opportunity to learn electronic design in a fun and hands-on way. No prior experience required. With Digital Laboratory, , this immersive event offers hands-on projects, expert mentorship, and insights into IC decoders, multiplexers, and more."}
          benefits={"Kompetensi Dasar STL dan DigSILENT"} 
          curriculum={{
            day1: [
              "Creating new project with proteus",
              "Learn how to read datasheets",
              "Learn about IC Decoder and seven segment",
              "Learn about IC multiplexer and demux",
              "Learn about flip flop, register, and counter"
            ],
          }}
          apps={null}
        />
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
