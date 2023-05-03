import React from "react"
import { Link } from "react-router-dom"

<<<<<<< HEAD
import logo from "../../assets/exercise-logos.svg"

function Logo({ size, style = "", ...props }) {
  return (
    <Link id="exercise-logo" to="/home" onClick={props.onClick}>
      <img
        alt="Exercise's Logo"
        src={logo}
        className={`${size || "w-16"} ${style}`}
=======
import logo from "../../assets/images/exercise-logos.svg"

function Logo({ ...props }) {
  return (
    <Link id="exercise-logo" to="/" onClick={props.onClick}>
      <img
        alt="Exercise's Logo"
        src={logo}
        className={props.size ? `w-${props.size}` : "w-24"}
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a
      />
    </Link>
  )
}

export default Logo
