import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

import NavBar from "./components/NavBar"
<<<<<<< HEAD
import Footer from "./components/Footer"
=======
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a

function App() {
  return (
    <>
      <ScrollRestoration />

      <NavBar />

      <Outlet />
<<<<<<< HEAD

      <Footer />
=======
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a
    </>
  )
}

export default App
