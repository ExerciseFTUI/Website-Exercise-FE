import React from "react"
import { Link } from "react-router-dom"

import features from "../../assets/features"

function Features() {
  return (
    <div id="landing-features-section" className="py-20">
      <div className="site-wrapper w-container">
        <p className="font-semibold text-grey-2 text-xl section-head md:text-2xl lg:text-3xl lg:mb-20">
          Save your time, stay organized, get more done!
        </p>

        <div className="flex-center flex-wrap gap-8 lg:gap-2">
          {features.map((f, i) => (
            <div key={i} className="bg-grey-2 w-fit rounded-xl overflow-hidden">
              <img
                alt={f.title + " Image"}
                src={f.img}
                className="object-cover object-center w-full h-56 lg:h-72 lg:w-96"
              />

              <div className="w-full py-4 px-6 lg:w-96 lg:h-56 lg:text-center">
                <Link
                  to={`/feature/${f.title.toLowerCase().replace(" ", "-")}`}
                  className="font-extrabold text-base underline lg:text-xl"
                >
                  {f.title}
                </Link>

                <p className="font-light text-justify text-sm my-4 lg:text-lg">
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
