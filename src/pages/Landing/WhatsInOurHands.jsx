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
      className="bg-light w-screen flex flex-col items-center text-center pt-32 pb-48 lg:px-12 xl:pt-48 xl:pb-64"
    >
      <p className="text-dark-2 font-light text-4xl mb-16 px-2 md:px-0">
        What's in Our Hands?
      </p>

      <div className="grid grid-cols-2 gap-16 md:gap-x-32 lg:grid-flow-row lg:grid-cols-4 xl:gap-24">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="group bg-grey-2 p-4 flex justify-center items-center w-32 h-32 sm:w-40 sm:h-40 xl:w-48 xl:h-48 hover:bg-opacity-0 duration-300 ease-out cursor-help"
          >
            <img alt="icon" src={icon} className="w-full h-full group-hover:hidden duration-300 ease-out" />
            <p className="text-grey-2 font-semibold text-lg  hidden group-hover:block duration-300 ease-out sm:text-xl lg:text-2xl xl:text-4xl">Untitled</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatsInOurHands
