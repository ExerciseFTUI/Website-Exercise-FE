import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { HexaDonut } from "../../components/hexagon"

import exerLogoNoCirc from "../../assets/exercise-logos-no-circ.svg"

function Header() {
  return (
    <div
      id="header-section"
      className="overflow-clip xl:pb-32 xl:pt-48 lg:mb-32 lg:mt-10 mb-10"
    >
      <div className="w-container lg:pt-20 site-wrapper relative flex-center flex-wrap xl:items-start xl:justify-between">
        <div className="absolute w-full h-full -z-10">
          <HexaDonut
            duration={24}
            initial={78}
            className="absolute -left-[40%] -top-[10%] w-[28rem] md:w-[32rem] md:-left-[20%] md:-top-[35%] lg:w-[40rem] xl:-top-[200%] xl:-left-[25%]"
          />
          <HexaDonut
            duration={18}
            className="absolute -top-[20%] -left-[5%] w-96 md:-top-[25%] md:left-[15%] lg:w-[28rem] xl:w-[32rem] xl:-top-[200%] xl:left-[5%]"
            clock={-1}
            initial={56}
          />
        </div>

        <motion.img
          alt="Exercise's Logo Without Circle"
          src={exerLogoNoCirc}
          className="w-[20rem] mt-32 mb-20 md:w-[28rem] lg:w-[36rem] xl:m-0"
        />

        <div className="w-container site-wrapper text-center flex-center flex-col gap-8 xl:items-start xl:gap-4">
          <p className="font-medium text-lg max-w-lg lg:text-xl xl:text-start">
            We started innovating since 1234 with a track record of qualified
            work and has become one of the growing technology organizations of
            the University of Indonesia. Dig further to find out the best of us!
          </p>

          <Link to="/about-us" className="btn-light rounded-md text-lg lg:text-xl">
            Get to Know
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
