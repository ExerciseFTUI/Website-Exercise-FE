import React from "react"

import Lists from "../lists/Lists"
import Logo from "../logo/Logo"

function Navigation() {
  const lists = ["HOME", "PAST PROJECTS", "EVENTS", "FEATURES", "EXTICLE"]

  return (
    <nav
      id="navigation-bar"
      className="fixed bg-dark flex items-center justify-between w-screen h-16 py-0 pl-4 pr-8 z-10"
    >
      <ul
        id="navigation-lists"
        className="h-full flex items-center gap-12 whitespace-nowrap"
      >
        <Logo />

        <Lists
          lists={lists}
          style="h-full relative flex justify-start items-center before:absolute before:bottom-0 before:w-0 before:hover:w-full before:h-0.5 before:bg-light before:ease-in-out before:duration-300"
        />
      </ul>

      <div id="client" className="font-bold flex items-center gap-6">
        <div className="w-1 h-8 bg-light" />
        <p className="text-sm">BE OUR CLIENT</p>
      </div>
    </nav>
  )
}

export default Navigation
