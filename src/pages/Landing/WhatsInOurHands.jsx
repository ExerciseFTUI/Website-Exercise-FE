import React from "react"

<<<<<<< HEAD
import icons from "../../assets/landing/icons"

function WhatsInOurHands() {
  return (
    <div id="landing-whats-in-our-hands-section" className="py-20 xl:pb-32">
      <div className="site-wrapper w-container">
        <p className="section-head font-light text-grey-2 text-5xl mb-16 xl:text-6xl">
          What's in Our <br className="xl:hidden" />
          Hands?
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 xl:gap-4">
          {icons.map(({ img, title }, i) => (
            <div
              key={i}
              className="group bg-grey-2 cursor-alias duration-300 ease-out w-36 h-36 p-4 flex-center text-center hover:bg-opacity-0 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-40 xl:h-40"
            >
              <img
                alt={title + " Icon"}
                src={img}
                className="group-hover:hidden duration-300 ease-out"
              />
              <p className="font-semibold text-grey-2 text-lg hidden group-hover:block duration-300 ease-out md:text-xl xl:text-2xl">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
=======
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

      <div className="grid grid-cols-2 gap-8 sm:grid-flow-row sm:grid-cols-4">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="bg-grey-2 p-4 flex justify-center items-center w-32 h-32 xl:w-48 xl:h-48"
          >
            <img alt="icon" src={icon} className="w-full h-full" />
          </div>
        ))}
      </div>
    </section>
>>>>>>> 8a0538f714f9f65e73a976538d9c3fbe0bf5454a
  )
}

export default WhatsInOurHands
