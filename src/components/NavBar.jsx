import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

import Lists from "./lists/Lists"
import Logo from "./logo/Logo"

function NavBar() {
  const lists = [
    "HOME",
    "PAST PROJECTS",
    "EVENTS",
    "FEATURES",
    "EXTICLE",
    "ABOUT US",
  ]
  const beforeStyles =
    "before:bg-light before:rounded-md before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:-z-10 before:ease-in-out before:duration-200 hover:before:w-full"
  const burgerStyle =
    "burger-item w-8 h-1 mb-1 bg-light ease-in-out duration-150 "

  let path = useLocation().pathname.replace("/", "")

  let [open, setOpen] = useState(false)

  let closeMenu = () => setOpen(false)

  const { scrollY } = useScroll()

  const topOff = useTransform(scrollY, [0, 540], [-80, 0])
  const top = useSpring(topOff, {
    stiffness: 50,
    damping: 40,
  })

  const topDesk = useTransform(scrollY, [0, 340], [-80, 0])
  const topD = useSpring(topDesk, {
    stiffness: 50,
    damping: 40,
  })

  const opacityOff = useTransform(scrollY, [0, 540], ["#0D273400", "#0D2734ff"])

  const marqueeVariants = {
    animate: {
      x: [0, -495],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  }

  return (
    <motion.nav
      id="navigation-bar"
      className="fixed top-0 z-20 w-screen h-20 px-6 flex items-center justify-between xl:px-14"
      style={{
        backgroundColor: opacityOff,
      }}
    >
      <motion.span
        className="relative z-20"
        style={{ top: path == "home" ? top : 0 }}
      >
        <Logo size="w-20" style="xl:hidden" onClick={closeMenu} />
      </motion.span>

      <div
        id="navigation-lists"
        className={
          "ease-in-out duration-150 bg-dark shadow-dark-2 shadow-md absolute top-0 py-20 w-[80%] h-[100vh] " +
          (open ? "-left-0 " : "-left-[500%] ") +
          "xl:bg-opacity-0 xl:shadow-none xl:h-20 xl:w-full xl:py-0 xl:relative xl:left-0 xl:flex xl:flex-row xl:items-center xl:justify-between"
        }
      >
        <motion.span
          className="relative z-20"
          style={{ top: path == "home" ? topD : 0 }}
        >
          <Logo
            size="w-[104px]"
            style="hidden px-2 xl:block"
            onClick={closeMenu}
          />
        </motion.span>

        <ul className="bg-dark  flex flex-col xl:bg-opacity-0 xl:flex-row xl:items-center xl:gap-8">
          <Lists
            lists={lists}
            style={`${beforeStyles} px-6 z-10 h-12 hover:text-dark xl:h-auto xl:px-2 xl:font-bold`}
            onClick={closeMenu}
            path={path}
          />
        </ul>

        <Link
          to="/client"
          className="bg-light rounded-md text-dark-2 font-extrabold hidden xl:block py-1 px-2 overflow-hidden w-24 h-8"
        >
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="whitespace-nowrap"
          >
            BE OUR CLIENT BE OUR CLIENT BE OUR CLIENT BE OUR CLIENT BE OUR
            CLIENT
          </motion.div>
        </Link>
      </div>

      <div
        id="navigation-burger"
        onClick={() => setOpen(!open)}
        className="cursor-pointer xl:hidden z-10"
      >
        <div className={burgerStyle + (open && "relative rotate-45 top-2 ")} />
        <div className={burgerStyle + (open && "relative rotate-45 ")} />
        <div
          className={
            burgerStyle + "mb-0 " + (open && "relative -rotate-45 bottom-2 ")
          }
        />
      </div>
    </motion.nav>
  )
}

export default NavBar
