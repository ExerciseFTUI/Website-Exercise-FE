import React from "react"
import { Link } from "react-router-dom"

import { AutoSlider } from "../../components/carousels"

import car1 from "../../assets/images/landing/carousel/be-our-client.png"

function Carousel() {
  const imgs = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    car1,
  ]

  return (
    <section
      id="landing-carousel"
      className="relative overflow-hidden flex items-center justify-center"
    >
      <AutoSlider imgs={imgs} />

      <div className="absolute px-7 w-full h-full flex flex-col items-center justify-center top-0 bg-dark bg-opacity-90 md:items-start md:pl-32">
        <h1 className="text-6xl font-extrabold text-center xl:text-8xl">
          EXERCISE{" "}
          <span className="text-8xl md:text-6xl sm:text-6xl xl:text-8xl">
            FTUI
          </span>
        </h1>

        <p className="w-[85%] max-w-md mt-12 font-light text-center md:text-justify xl:text-xl">
          We started innovating since 1234 with a track record of qualified work
          and has become one of the growing technology organizations of the
          University of Indonesia. Dig further to find out the best of us!
        </p>

        <Link to="get-to-know" className="bg-dark-2 py-1 px-4 font-bold mt-12">
          Get to Know
        </Link>
      </div>
    </section>
  )
}

export default Carousel
