import React from "react"
<<<<<<< HEAD
import { Link } from "react-router-dom"

import CarouselExercise from "./CarouselExercise"
import CarouselProjects from "./CarouselProjects"
import WhatsInOurHands from "./WhatsInOurHands"
import FeaturesCards from "./FeaturesCards"
import Testimoni from "./Testimoni"

function LandingPage() {
  return (
    <div id="landing-pages">
      <CarouselExercise />

      <WhatsInOurHands />

      <CarouselProjects />

      <FeaturesCards />

      <div
        id="landing-be-our-client-section"
        className="relative bg-dark bg-opacity-90 text-center"
      >
        <div className="site-wrapper w-container h-screen flex-center flex-col gap-16">
          <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl">
            Be our client
          </h1>

          <p className="font-light text-lg leading-relaxed md:text-2xl lg:text-3xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed">
            We pride ourselves on our ability to deliver results that exceed
            your expectations, and we're passionate about helping businesses
            like yours thrive in today's competitive market. So why wait?
          </p>

          <div className="">
            <Link
              to="/portfolios"
              className="btn bg-light text-dark-2 text-sm rounded-md mr-6 md:text-2xl lg:text-3xl lg:mr-20 xl:text-2xl"
            >
              Our portfolio
            </Link>
            <Link
              to="/social-media"
              className="btn bg-light text-dark-2 text-sm rounded-md md:text-2xl lg:text-3xl xl:text-2xl"
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

      <Testimoni />
=======

import Carousel from "./Carousel"
import WhatsInOurHands from "./WhatsInOurHands"
import ProjectCards from "./ProjectCards"

function LandingPages() {
  return (
    <div id="landing-pages" className="">
      <Carousel />

      <WhatsInOurHands />

      <section id="landing-collaborated-projects" className="w-screen py-16 bg-grey overflow-hidden">
        <p className="text-3xl text-dark-2 font-light text-center mb-8 px-2">
          Our Collaborated Projects
        </p>

        <div className="flex flex-row relative">
          <ProjectCards />
        </div>
      </section>
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a
    </div>
  )
}

<<<<<<< HEAD
export default LandingPage
=======
export default LandingPages
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a
