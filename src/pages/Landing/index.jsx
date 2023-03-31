import React from "react"

import ProjectCards from "./ProjectCards"

import Carousel from "./Carousel"
import WhatsInOurHands from "./WhatsInOurHands"

function LandingPages() {
  return (
    <div id="landing-pages" className="pt -16">
      <Carousel />

      <WhatsInOurHands />

      <section id="landing-project-cards" className="w-screen py-16">
        <p className="text-3xl text-dark-1 text-center mb-8">
          Save your time, stay organized, get more done!
        </p>
        <div
          id="project-cards-landing-lists"
          className=" flex items-center justify-evenly "
        >
          {/* <ProjectCards /> */}
        </div>
      </section>
    </div>
  )
}

export default LandingPages
