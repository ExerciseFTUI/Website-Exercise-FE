import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

import StaffSection from "./StaffSection"
import Sidebar from "./Sidebar"

import { executives, externals } from "../../assets/get-to-know/our-team"

const OurTeam = () => {
  const { div, desc, head, vice } = executives

  const [currentViewed, setCurrentViewed] = useState(-1)

  const ourTeamRef = useRef(null)
  const executivesRef = useRef(null)

  const ourTeamInView = useInView(ourTeamRef, { margin: "-5% 0% -95% 0%" })
  const executivesInView = useInView(executivesRef, {
    margin: "-50% 0%",
  })

  useEffect(() => {
    executivesInView ? setCurrentViewed(0) : setCurrentViewed(-1)
  }, [executivesInView])

  return (
    <div
      ref={ourTeamRef}
      id="get-to-know-our-team"
      className="bg-light text-dark-2 pt-20"
    >
      <div className="site-wrapper w-container flex-center flex-col">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl">Our Team</h1>

          <p className="font-light text-justify text-lg lg:text-xl lg:text-center">
            At the core of our organization is a team of dedicated individuals
            who share a common vision. Meet the faces behind EXERCISE 2023 and
            learn more about their passions and expertise.
          </p>
        </div>

        <section
          ref={executivesRef}
          id={div.replace(" ", "-").toLowerCase()}
          className="pt-32 flex-center flex-col w-full"
        >
          <div className="flex gap-4">
            <div className="flex flex-col text-end gap-16">
              <img
                alt="Dio's Photo"
                src={head.img}
                className="bg-dark-2 rounded-xl hover:scale-110 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
              />

              <div className="relative flex flex-col justify-center before:absolute before:-right-4 before:h-[1.5px] before:w-4 before:bg-dark-2 rounded-xl  md:text-lg md:before:h-0.5">
                <h1>{vice.name}</h1>
                <p className="italic font-extralight">{vice.position}</p>
              </div>
            </div>

            <div className="flex flex-col-reverse text-start gap-16">
              <img
                alt="Bachul's Photo"
                src={vice.img}
                className="bg-dark-2 rounded-xl hover:scale-110 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
              />

              <div className="relative flex flex-col justify-center before:absolute before:-left-4 before:h-[1.5px] before:w-4 before:bg-dark-2 rounded-xl  md:text-lg md:before:h-0.5">
                <h1>{head.name}</h1>
                <p className="italic font-extralight">{head.position}</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6 max-w-3xl mt-12">
            <p className="font-extrabold text-4xl md:text-5xl">{div}</p>

            <p className="text-justify md:text-lg">{desc}</p>
          </div>

          <div className="w-full h-[0.5px] bg-dark-2 rounded-xl hover:scale-110 mt-20" />
        </section>

        {externals.map((ex, i) => (
          <StaffSection
            key={i}
            {...ex}
            setIndex={setCurrentViewed}
            index={i + 1}
          />
        ))}
      </div>

      <Sidebar
        style={{
          transform: ourTeamInView ? "none" : "translateX(-200px)",
          opacity: ourTeamInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
        }}
        index={currentViewed}
      />
    </div>
  )
}

export default OurTeam