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
      className="fixed bg-dark flex items-center justify-between w-screen h-[74px] z-10 pr-2 md:pl-8 md:pr-10"
    >
      <Logo onClick={closeMenu} style="mr-14" />

      <ul
        id="navigation-lists"
        className={`absolute w-screen bg-dark flex flex-col items-start justify-center duration-200 ease-in-out lg:flex-row lg:relative lg:justify-start lg:items-center lg:top-0 lg:gap-8 lg:ml-8 xl:gap-12 ${open ? "top-16" : "-top-64"}`}
      >
        <Lists lists={lists} onClick={closeMenu}
          liststyle="before:hover:w-full before:h-full"
          textstyle="pl-4 py-2 hover:text-dark lg:p-0 lg:px-2 lg:py-1 lg:font-bold lg:text- xl:text-base"
          path={path}
        />
      </ul>

      <div id="navigation-burger" onClick={() => setOpen(!open)} className="cursor-pointer w-8 h-5 lg:hidden z-10" >
        <div className={burgerStyle + (open ? "relative rotate-45 top-2" : "")} />
        <div className={burgerStyle + (open ? "relative rotate-45" : "")} />
        <div className={burgerStyle + "mb-0 " + (open ? "relative -rotate-45 bottom-2" : "")} />
      </div>

      <div id="navigation-client" className="font-bold items-center gap-6 hidden whitespace-nowrap mr-6 lg:flex" >
        <div className="w-1 lg:h-8 xl:h-10 bg-light" />
        <p className="text-sm xl:text-base">BE OUR CLIENT</p>
      </div>
    </nav>
  )
}

export default NavBar
