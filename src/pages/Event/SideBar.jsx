import React from "react"

import Lists from "../../components/lists/Lists"

function SideBar() {
  const lists = [
    "About",
    "Benefits",
    "Peserta",
    "Kurikulum & Silabus",
    "Sistem Belajar",
    "Aplikasi",
    "Testimoni Peserta",
    "FAQ",
  ]

  return (
    <div id="event-sidebar">
      <div className="bg-grey">
        <Lists lists={lists} />
      </div>
    </div>
  )
}

export default SideBar
