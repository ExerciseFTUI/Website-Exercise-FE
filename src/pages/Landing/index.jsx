import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import Header from "./Header"
import CollaboratedProjects from "./Projects"
import WhatsInOurHands from "./WhatsInOurHands"
import Features from "./Features"
import Testimoni from "./Testimoni"
import { HexaBorder } from "../../components/hexagon"
import Event from "./Event"
import ExTicle from "./ExTicle"

function LandingPage() {
  return (
    <div id="landing-pages">
      <Header />

      <WhatsInOurHands />

      <CollaboratedProjects />

      <Features />

      <Testimoni />

      <Event />

      <ExTicle />

      <div
        id="our-client-section"
        className="relative bg-dark bg-opacity-95 text-center overflow-clip"
      >
        <div className="site-wrapper w-container h-screen flex-center flex-col gap-16">
          <HexaBorder
            duration={24}
            className="absolute -z-[5] w-96 h-96 md:w-[48rem] md:h-[48rem]"
          />

          <h1 className="font-extrabold text-4xl md:text-7xl lg:text-8xl">
            Be our client
          </h1>

          <p className="font-light text-lg leading-relaxed md:text-2xl lg:text-3xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed max-w-4xl">
            We pride ourselves on our ability to deliver results that exceed
            your expectations, and we're passionate about helping businesses
            like yours thrive in today's competitive market. So why wait?
          </p>

          <div className="flex">
            <Link
              to="/portfolios"
              className="btn-light text-sm rounded-md mr-6 md:text-2xl lg:text-3xl lg:mr-20 xl:text-2xl"
            >
              Our portfolio
            </Link>
            <Link
              to="/social-media"
              className="btn-light text-sm rounded-md md:text-2xl lg:text-3xl xl:text-2xl"
            >
              Connect with us
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Be our Client Image"
            className="object-cover absolute top-0 left-0 w-full h-full -z-10"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
