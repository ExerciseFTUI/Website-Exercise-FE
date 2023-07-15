import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Link } from "react-router-dom"

import unknown from "../../assets/get-to-know/our-team/unknown.png"

const personModel = {
  img: "",
  name: "",
  linkedin: "",
  position: "",
}

const staffModel = {
  img: "",
  name: "",
  linkedin: "",
}

function StaffSection({
  head = personModel,
  vice = personModel,
  div = "",
  desc = "",
  staffs = [staffModel],
  index = -1,
  setIndex,
}) {
  const divRef = useRef(null)
  const divInView = useInView(divRef, { margin: "-5% 0% -95% 0%" })

  useEffect(() => {
    setIndex(index)
  }, [divInView])
  return (
    <section
      ref={divRef}
      id={div.replace(/[ ]/g, "-").toLowerCase()}
      className="pt-24 w-full"
    >
      <div className="flex-center flex-col gap-8 md:flex-row">
        {vice.name == "" ? (
          <div className="flex-center flex-col lg:mr-8 text-center">
            <img
              alt={head.name + "'s Photo"}
              src={head.img}
              className="bg-grey-1 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
            />

            <Link target="_blank" rel="noopener noreferrer" to={head.linkedin}>
              <h1>{head.name}</h1>
            </Link>
            <p className="italic font-extralight">{head.position}</p>
          </div>
        ) : (
          <div className="flex gap-3">
            <div className="flex flex-col text-end gap-16">
              <img
                alt={head.name + "'s Photo"}
                src={head.img}
                className="bg-grey-1 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
              />

              <div className="relative flex flex-col justify-center before:absolute before:-right-4 before:h-[1.5px] before:w-4 before:bg-grey-1 md:text-lg md:before:h-0.5">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={vice.linkedin}
                >
                  <h1>{vice.name}</h1>
                </Link>
                <p className="italic font-extralight">{vice.position}</p>
              </div>
            </div>

            <div className="flex flex-col-reverse text-start gap-16">
              <img
                alt={vice.name + "'s Photo"}
                src={vice.img}
                className="bg-grey-1 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
              />

              <div className="relative flex flex-col justify-center before:absolute before:-left-4 before:h-[1.5px] before:w-4 before:bg-grey-1 md:text-lg md:before:h-0.5">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={head.linkedin}
                >
                  <h1>{head.name}</h1>
                </Link>
                <p className="italic font-extralight">{head.position}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center space-y-6 max-w-3xl md:max-w-xs md:text-start lg:max-w-sm">
          <p className="font-extrabold text-4xl lg:text-5xl">{div}</p>

          <p className="text-justify lg:text-lg">{desc}</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col">
        <p className="self-center rounded-md bg-gradient-to-r from-dark-2 to-grey-1 px-2 py-1 font-medium text-light text-xl md:text-2xl">
          Staffs
        </p>

        <div
          id="staffs-carousel"
          className="overflow-x-auto flex self-center gap-4 pt-8 pb-8 max-w-sm md:max-w-[38rem] lg:max-w-4xl xl:max-w-5xl min-[1440px]:max-w-[70rem]"
        >
          {staffs.map(({ img, name, ...data }, i) => (
            <div key={i} className="flex items-center flex-col">
              <img
                alt={name + "'s Photo"}
                src={img || unknown}
                className="bg-grey-1 object-cover object-top min-w-[11rem] w-44 h-60 lg:min-w-[13rem] lg:w-52 lg:h-72"
              />

              <div className="text-center mt-4 lg:text-lg">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={data.linkedin}
                >
                  <h1>{name}</h1>
                </Link>
                <p className="font-extralight mt-1">
                  {data.pos} Staff of {div.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-grey-1 mt-20" />
    </section>
  )
}

export default StaffSection
