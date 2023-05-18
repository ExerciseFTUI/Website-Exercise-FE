import React from "react"
import { Link } from "react-router-dom"

// import Lists from "../../components/lists/Lists"

function SideBar() {
  const lists = ["About", "Benefits", "Kurikulum", "Aplikasi", "FAQ", "Harga"]

  return (
    <aside
      id="event-sidebar"
      className="hidden xl:block h-screen sticky top-0 w-[10%]"
    >
      <div className="bg-light text-dark-2 flex flex-col items-start gap-2 px-8">
        {lists.map((l, i) => (
          <Link
            key={i}
            to={`#${l.toLowerCase()}-section`}
            className="font-bold text-lg"
          >
            {l}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default SideBar
