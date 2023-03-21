import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

import Navigation from "./components/navigation/Navigation"

function App() {
  return (
    <>
      <ScrollRestoration />

      <Navigation />

      <Outlet />
    </>
  )
}

export default App
