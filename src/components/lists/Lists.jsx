import React from "react"
import { Link } from "react-router-dom"

<<<<<<< HEAD
function Lists({ lists = [""], style = "", ...props }) {
  return lists.map((list, i) => (
    <Link
      key={i}
      to={list.toLowerCase().replace(" ", "-")}
      className={`text-lg font-extrabold relative flex items-center ease-out duration-300 ${style} ${
        props.path == list.toLowerCase().replace(" ", "-") &&
        "before:w-full text-dark"
      }`}
      onClick={props.onClick}
    >
      {list}
    </Link>
=======
function Lists({ lists = [""], ...props }) {
  return lists.map((list, i) => (
    <li key={i} className={
        "relative w-full md:w-auto before:absolute before:bottom-0 before:bg-light before:ease-in-out before:duration-300 " +
        props.liststyle + 
        (props.path == list.toLowerCase().replace(" ", "") ? " before:w-full" : " before:w-0")
    }>
      <Link
        to={list.toLowerCase().replace(" ", "-")}
        className={
          "block relative w-full h-full text-sm font-bold duration-100 ease-in-out " +
          props.textstyle +
          (props.path == list.toLowerCase().replace(" ", "") ? " text-dark" : " text-light")
        }
        onClick={props.onClick}
      >
        {list}
      </Link>
    </li>
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a
  ))
}

export default Lists
