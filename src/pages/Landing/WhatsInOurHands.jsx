import React from "react"

import icons from "../../assets/landing/whats-in-our-hands"

function WhatsInOurHands() {
  return (
    <div id="wioh-section" className="py-24 bg-dark">
      <div className="site-wrapper w-container">
        <h1 className="section-head text-4xl mb-16 lg:text-5xl">
          What's in Our <br className="xl:idden" />
          Hands?
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mx-auto py-16 md:gap-12 lg:gap-28 xl:gap-16 ">
          {icons.map(({ img, title }, i) => (
            <div key={i} className="text-center flex-center flex-col gap-4">
              <img alt={title + " Icon"} src={img} className="w-36 h-36" />
              <p className="font-medium text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatsInOurHands
