import React from "react"
import { Link } from "react-router-dom"

function Lists({ lists = [""], ...props }) {
  return lists.map((list, i) => (
    <li key={i} className={
        "relative w-full lg:w-auto before:absolute before:bottom-0 before:bg-light before:ease-in-out before:duration-300 " +
        props.liststyle + 
        (props.path == list.toLowerCase().replace(" ", "") ? " before:w-full" : " before:w-0")
    }>
      <Link
        to={list.toLowerCase().replace(" ", "-")}
        className={
          "block relative w-full h-full text-sm font-bold duration-300 ease-in-out " +
          props.textstyle +
          (props.path == list.toLowerCase().replace(" ", "") ? " text-dark" : " text-light")
        }
        onClick={props.onClick}
      >
        {list}
      </Link>
    </li>
  ))
}

export default Lists
