import React from "react"
import { Link } from "react-router-dom"

function Lists({ lists = [""], ...props }) {
    return lists.map((list, i) => (
        <li key={i} className={props.liststyle}>
            <Link
                to={list.toLowerCase().replace(" ", "-")}
                className={
                    "block w-full h-full text-light text-sm font-semibold " +
                    props.textstyle
                }
                onClick={props.onClick}
            >
                {list}
            </Link>
        </li>
    ))
}

export default Lists
