import React from "react"

import CarouselExercise from "./CarouselExercise"
import CarouselProjects from "./CarouselProjects"
import WhatsInOurHands from "./WhatsInOurHands"
import ProjectCards from "./ProjectCards"

function LandingPages() {
  return (
    <div id="landing-pages" className="">
      <CarouselExercise />

      <WhatsInOurHands />

      <section id="landing-collaborated-projects" className="w-screen py-16 bg-grey overflow-hidden">
        <p className="text-3xl text-dark-2 font-light text-center mb-8 px-2">
          Our Collaborated Projects
        </p>

        <div className="flex flex-row relative">
          {/* <ProjectCards /> */}
        </div>

        <CarouselProjects />
      </section>
    </div>
  )
}

export default LandingPages
