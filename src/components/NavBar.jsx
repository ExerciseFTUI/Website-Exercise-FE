import React, { useState } from "react"
import { useLocation } from "react-router-dom"

import Lists from "./lists/Lists"
import Logo from "./logo/Logo"

function NavBar() {
  const lists = [
    "HOME",
    "PAST PROJECTS",
    "EVENTS",
    "FEATURES",
    "EXTICLE",
    "ABOUT US",
  ]
  const burgerStyle =
    "burger-item w-8 h-1 mb-1 bg-light ease-in-out duration-150 "

  let path = useLocation().pathname.replace("/", "")

  let [open, setOpen] = useState(false)

  let closeMenu = () => setOpen(false)

  return (
    <nav
      id="navigation-bar"
      className="bg-dark text-light sticky top-0 z-10 w-screen h-20 px-6 flex items-center justify-between xl:px-16"
    >
      <Logo size="w-[84px]" style="xl:hidden" onClick={closeMenu} />

      <div
        id="navigation-lists"
        className={`bg-dark absolute left-0 w-full flex flex-col ${
          open ? "top-16" : "-top-[500%]"
        } ease-in-out duration-150 xl:relative xl:top-0 xl:flex-row xl:items-center xl:gap-11`}
      >
        <Logo
          size="w-[86px]"
          style="hidden px-2 xl:block"
          onClick={closeMenu}
        />

        <Lists
          nav
          lists={lists}
          style="xl:font-bold"
          onClick={closeMenu}
          path={path}
        />
      </div>

      <div
        id="navigation-burger"
        onClick={() => setOpen(!open)}
        className="cursor-pointer xl:hidden z-10"
      >
        <div className={burgerStyle + (open && "relative rotate-45 top-2 ")} />
        <div className={burgerStyle + (open && "relative rotate-45 ")} />
        <div
          className={
            burgerStyle + "mb-0 " + (open && "relative -rotate-45 bottom-2 ")
          }
        />
      </div>

      <div
        id="navigation-client"
        className="font-bold items-center gap-6 hidden whitespace-nowrap xl:flex"
      >
        <div className="w-1 h-10 bg-light" />
        <p className="text-lg font-bold">BE OUR CLIENT</p>
      </div>
    </nav>
  )
}

export default NavBar
