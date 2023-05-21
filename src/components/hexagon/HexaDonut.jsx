import React from "react"

import { motion } from "framer-motion"

import hexaDonut from "../../assets/hexagonals/hexa-donut.svg"

function HexaDonut({
  duration = 8,
  initial = Math.random() * 100,
  className = "",
  clock = 1,
}) {
  return (
    <motion.img
      alt="Hexagonal"
      src={hexaDonut}
      className={className}
      initial={{
        rotate: 0,
      }}
      animate={{
        rotate: 360 * clock,
      }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  )
}

export default HexaDonut
