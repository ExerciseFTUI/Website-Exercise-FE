import React from "react"
import { Link } from "react-router-dom"

function Lists({ lists = [""], nav = false, style = "", ...props }) {
  const beforeStyles =
    "before:bg-light before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:-z-10 before:ease-in-out before:duration-200 hover:before:w-full"

  return lists.map((list, i) => (
    <Link
      key={i}
      to={list.toLowerCase().replace(" ", "-")}
      className={
        (nav &&
          `${beforeStyles} px-4 z-10 h-12 hover:text-dark xl:h-auto xl:px-2 ` +
            (props.path == list.toLowerCase().replace(" ", "-") &&
              "before:w-full text-dark")) +
        ` text-lg font-extrabold relative flex items-center ease-out duration-300 ${style}`
      }
      onClick={props.onClick}
    >
      {list}
    </Link>
  ))
}

export default Lists
