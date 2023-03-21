import React from "react"

import Carousel from "../components/carousel/Carousel"
import ProjectCards from "../components/projectCards/ProjectCards"

function LandingPages() {
  return (
    <div id="landing-pages" className="pt-16">
      <Carousel />

      <section id="wioh" className="bg-light w-screen p-24 text-center">
        <p id="wioh-title" className="text-dark-2 font-light text-4xl mb-16">
          What's in Our Hands?
        </p>

        <div id="wioh-boxes" className="flex flex-row justify-evenly">
          <div className="bg-grey-2 w-48 h-48" />
          <div className="bg-grey-2 w-48 h-48" />
          <div className="bg-grey-2 w-48 h-48" />
          <div className="bg-grey-2 w-48 h-48" />
        </div>
      </section>

      <section id="project-cards-landing" className="w-screen py-16">
        <p
          id="project-cards-landing-title"
          className="text-3xl text-dark-1 text-center mb-8"
        >
          Save your time, stay organized, get more done!
        </p>
        <div
          id="project-cards-landing-lists"
          className=" flex items-center justify-evenly "
        >
          <ProjectCards />
        </div>
      </section>
    </div>
  )
}

export default LandingPages
