import React from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/images/exercise-logos.svg"

function Logo({ ...props }) {
  return (
    <Link id="exercise-logo" to="/" onClick={props.onClick}>
      <img
        alt="Exercise's Logo"
        src={logo}
        className={props.size ? `w-${props.size}` : "w-24"}
      />
    </Link>
  )
}

export default Logo
