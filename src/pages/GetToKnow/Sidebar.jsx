import { useEffect, useState } from "react"

import sidebar from "../../assets/get-to-know"

const Sidebar = ({ style = {}, index = -1 }) => {
  const [selected, setSelected] = useState(-1)
  const [hovered, setHovered] = useState(-1)

  useEffect(() => {
    setSelected(index)
  }, [index])

  return (
    <ul
      className="bg-light fixed z-10 top-36 left-8 drop-shadow-md rounded-sm hidden xl:block"
      style={style}
    >
      {sidebar.map((ic, i) => {
        return (
          // prettier-ignore
          <li
            className={`${selected == i ? "bg-dark-2" : "bg-light"} w-12 h-12 flex-center duration-100 ease-linear hover:bg-dark-2 relative`}
            key={i}
            tabIndex={i}
            onClick={() => setSelected(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            <a
              title={ic.desc}
              href={`#${ic.desc.toLowerCase().replace(/ /g, "-")}`}
              className="w-full h-full"
            >
              <img
                className="h-4 md:h-6 my-3 mx-auto"
                src={selected == i || hovered == i ? ic.active : ic.inactive}
              />
            </a>
            
            <h1 className={`bg-dark-2 text-light text-base h-full flex-center absolute left-full top-0 whitespace-nowrap overflow-hidden ease-in-out duration-200 w-fit ${hovered == i ? "scale-x-100 px-4" : "scale-x-0 px-0"} origin-left`}>{ic.desc}</h1>
          </li>
        )
      })}
    </ul>
  )
}

export default Sidebar
