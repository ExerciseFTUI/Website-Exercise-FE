import React, { useState } from "react"
import { useLocation } from "react-router-dom"

import Lists from "./lists/Lists"
import Logo from "./logo/Logo"

function NavBar() {
  const lists = ["HOME", "PAST PROJECTS", "EVENTS", "FEATURES", "EXTICLE"]
  const burgerStyle = "burger-item w-8 h-1 mb-1 bg-light ease-in-out duration-150 "

  let path = useLocation().pathname.replace("/", "")

  let [open, setOpen] = useState(false)

  let closeMenu = () => setOpen(false)

  return (
    <nav id="navigation-bar"
      className="fixed bg-dark flex items-center justify-between w-screen h-16 z-10 pr-3"
    >
      <Logo onClick={closeMenu} />

      <ul
        id="navigation-lists"
        className={`absolute w-screen bg-dark flex flex-col items-start justify-center duration-200 ease-in-out md:flex-row md:relative md:justify-start md:items-center md:top-0 md:gap-3 md:ml-3 ${open ? "top-16" : "-top-64"}`}
      >
        <Lists lists={lists} onClick={closeMenu}
          liststyle="before:hover:w-full before:h-full"
          textstyle="pl-4 py-2 hover:text-dark md:p-0 md:px-2 md:py-1 md:font-bold"
          path={path}
        />
      </ul>

      <div id="navigation-burger" onClick={() => setOpen(!open)} className="cursor-pointer w-8 h-5 md:hidden z-10" >
        <div className={burgerStyle + (open ? "relative rotate-45 top-2" : "")} />
        <div className={burgerStyle + (open ? "relative rotate-45" : "")} />
        <div className={burgerStyle + "mb-0 " + (open ? "relative -rotate-45 bottom-2" : "")} />
      </div>

      <div id="navigation-client" className="font-bold items-center gap-6 hidden whitespace-nowrap mr-6 md:flex" >
        <div className="w-1 h-8 bg-light" />
        <p className="text-sm">BE OUR CLIENT</p>
      </div>
    </nav>
  )
}

export default NavBar
