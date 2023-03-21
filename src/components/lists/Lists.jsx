import React from "react"
import { Link } from "react-router-dom"

function Lists({ lists = [""], ...props }) {
  return lists.map((list, i) => (
    <li key={i} className={"text-light text-sm font-semibold " + props.style}>
      <Link to={list.toLowerCase().replace(" ", "-")}>{list}</Link>
    </li>
  ))
}

export default Lists
