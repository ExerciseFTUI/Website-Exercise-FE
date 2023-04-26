import React, { useState } from "react"
import { Link } from "react-router-dom"

function CarouselProjects() {
  const projects = [
    {
      title: "Project Title",
      desc: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us!",
      corp: "Corporation",
      year: 2016,
      img: "https://s3-alpha-sig.figma.com/img/bfaf/8871/6f6a0e93dae66aa4041aac2c39f4f3b3?Expires=1683504000&Signature=YftCXE4xHEl~fdCprOM4OZ0iOXx4~WX6ouwHQsC4YjwjOS4tEJRraCR6WJfpwwNPQuYI1uMMhD-S2oNW0O6pDYvQzoc5G5kXa-LKquczV9hmWwOitqcTSLwtWgQPJU-egf00DcEXWUnv4Zkl0UNpGhiK4D09JI1PhO7eZJBdu9Jk88pCEtQP2zE6fOpTwYVbXl9ft074cGZ3nbwZUaLNeCq3DdVWe1qCqjTL6gXAzUkYLnThKbHIpuNg27~vA53mYJQh0JVz~BXeGknZMMuddoP-q5VYZFT17dLKeiuZc30PgvvMjHeD6rj6BKZRyiluHCgMa42J6PSo~2WuuT5GBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      title: "Project Title",
      desc: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us!",
      corp: "Corporation",
      year: 2016,
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ]

  const [pos, setPos] = useState(0)

  return (
    <section
      id="landing-collaborated-projects"
      className="relative py-8 bg-grey overflow-hidden sm:p-0"
    >
      <p className="text-center text-4xl text-dark-2 flex items-center justify-center px-4 md:hidden">
        Our Collaborated Projects
      </p>

      <div
        className="flex items-center mt-8 h-[calc(100vh-4rem)] max-h-[600px] w-screen ease-in-out duration-200 md:max-h-max md:m-0"
        style={{ transform: `translate3d(-${pos * 100}%, 0, 0)` }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="text-light flex flex-col h-full min-w-[95%] mx-[2.5%] shadow-md shadow-grey-2 md:text-dark-2 md:min-w-full md:h-[calc(100vh-4rem)] md:mx-0 md:shadow-none md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-8 xl:gap-14"
          >
            <img
              alt={"project" + (i + 1)}
              src={p.img}
              className="w-full h-[40%] object-cover md:min-w-0 md:w-[40%] md:max-w-[374px] md:h-[85%]"
            />

            <div className="bg-dark flex flex-col justify-evenly h-[60%] px-6 py-4 md:bg-grey md:w-[50%] md:h-full md:p-0 md:justify-center md:gap-4">
              <p className="hidden text-dark-1 text-lg mb-4 md:block md:text-3xl md:mb-8">
                Our Collaborated Projects
              </p>

              <h1 className="font-bold text-3xl md:font-extrabold md:text-6xl md:mb-7">
                {p.title}
              </h1>

              <p className="font-light text-justify md:font-normal md:text-2xl">
                {p.desc}
              </p>
              <p className="text-grey-1 font-light md:text-grey-2 md:text-2xl">
                {p.corp}, {p.year}
              </p>

              <Link
                to={`/project/${p.title.toLowerCase().replace(" ", "-")}`}
                className="text-light bg-dark-2 font-semibold text-base w-fit px-3 py-1 mt-4 md:text-2xl"
              >
                Get To Know
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 p-0.5 w-full h-full flex items-center justify-between pointer-events-none">
        <div
          onClick={() => setPos(pos == 0 ? projects.length - 1 : pos - 1)}
          className="text-4xl text-grey font-bold px-1 pb-1 bg-dark-2 bg-opacity-90 rounded-md cursor-pointer pointer-events-auto md:text-5xl"
        >
          ‹
        </div>

        <div
          onClick={() => setPos(pos != projects.length - 1 ? pos + 1 : 0)}
          className="text-4xl text-grey font-bold px-1 pb-1 bg-dark-2 bg-opacity-90 rounded-md cursor-pointer pointer-events-auto md:text-5xl"
        >
          ›
        </div>
      </div>
    </section>
  )
}

export default CarouselProjects
