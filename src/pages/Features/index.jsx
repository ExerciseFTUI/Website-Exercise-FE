import React from "react"
import { Link } from "react-router-dom"

import features from "../../assets/features"
import headerImg from "../../assets/features/header.jpg"

function Features() {
  return (
    <div id="features-page">
      <div className="relative w-screen bg-dark bg-opacity-90 flex-center">
        <img
          alt="Header Image"
          src={headerImg}
          className="object-cover w-full h-full absolute top-0 left-0 -z-10"
        />

        <div className="site-wrapper w-container text-center py-36 md:py-64">
          <h1 className="mb-8 font-extrabold tracking-wider text-4xl md:text-5xl lg:text-7xl">
            Our Features
          </h1>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl">
            At Exercise, we're committed to providing you with the best tools to
            help you work smarter, not harder. Try out our innovative features
            today and take your workflow to the next level!
          </p>
        </div>
      </div>

      <div>
        {features.map((e, i) => (
          <div
            key={i}
            id={`${e.title.toLowerCase().replace(/ +/g, "-")}-section`}
            className="group py-12 flex-center bg-light even:bg-dark text-dark-2 even:text-light"
          >
            <div className="site-wrapper w-container flex-center flex-col lg:flex-row-reverse gap-8 lg:justify-between lg:w-full xl:max-w-6xl">
              <img
                alt={`${e.title} Poster`}
                src={e.img}
                className="object-cover object-center h-96 lg:max-w-md lg:h-[480px]"
              />

              <div className="text-center max-w-lg flex-center flex-col gap-6 lg:text-start lg:items-start">
                <h1 className="font-extrabold text-3xl md:text-4xl">
                  {e.title}
                </h1>

                <p className="text-center lg:text-justify md:text-lg">
                  {e.desc}
                </p>

                <Link
                  to={`event/${e.title.toLowerCase().replace(/ +/g, "-")}`}
                  className="btn-dark group-even:btn-light md:text-lg"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
