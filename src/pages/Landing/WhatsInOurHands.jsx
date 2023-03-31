import React from "react"

import ico1 from "../../assets/icons/landing/what-we-can-do/Database Administrator.svg"
import ico2 from "../../assets/icons/landing/what-we-can-do/Laptop Settings.svg"
import ico3 from "../../assets/icons/landing/what-we-can-do/Tools.svg"
import ico4 from "../../assets/icons/landing/what-we-can-do/Website.svg"

function WhatsInOurHands() {
  const icons = [ico1, ico2, ico3, ico4]

  return (
    <section
      id="landing-wioh"
      className="bg-light w-screen flex flex-col items-center text-center py-16 xl:p-24"
    >
      <p className="text-dark-2 font-light text-4xl mb-16 px-2 md:px-0">
        What's in Our Hands?
      </p>

      <div className="grid grid-cols-2 gap-8 md:grid-flow-row md:grid-cols-4">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="bg-grey-2 p-4 flex justify-center items-center w-32 h-32 xl:w-32 xl:h-32"
          >
            <img alt="icon" src={icon} className="w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatsInOurHands
