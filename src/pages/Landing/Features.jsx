import React from "react"
import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"

import features from "../../assets/features"

function Features() {
  return (
    <div id="landing-features-section" className="py-32">
      <div className="site-wrapper  w-container">
        <TypeAnimation
          className="bg-light text-dark text-center section-head w-fit h-9 p-2 text-4xl rounded-md lg:mb-20 lg:h-12 lg:text-5xl"
          sequence={[
            "Save your time",
            1500,
            "Stay organized",
            1500,
            "Get more done!",
            2500,
          ]}
          cursor={false}
          repeat={Infinity}
          speed={55}
          wrapper="h1"
        >
          Save your time, stay organized, get more done!
        </TypeAnimation>

        <div className="flex-center  flex-wrap gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-light text-dark-2 w-fit rounded-xl overflow-hidden md:flex md:flex-row lg:flex-col"
            >
              <img
                alt={f.title + " Image"}
                src={f.img}
                className="object-cover object-center overflow-hidden w-full h-56 md:max-w-sm lg:h-72"
              />

              <div className="w-full py-4 px-6 lg:w-96 lg:h-56 lg:text-center">
                <Link
                  to={f.link}
                  className="font-extrabold text-base underline md:text-2xl"
                >
                  {f.title}
                </Link>

                <p className="font-light text-justify text-sm my-4 md:text-lg">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
