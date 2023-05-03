import React from "react"
import { Outlet } from "react-router-dom"

import SideBar from "./SideBar"

function EventMore() {
  return (
    <div className="">
      <SideBar />

      <Outlet />
    </div>
  )
}

export default EventMore
