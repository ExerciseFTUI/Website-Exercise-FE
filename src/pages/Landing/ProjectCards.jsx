import React from "react"
import { Link } from "react-router-dom"

function ProjectCards() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Project Title",
      description: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us! ",
      corporation: "Corporation",
      year: 2023,
      link: "get-to-know",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Project Judul",
      description: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us! ",
      corporation: "Perusahaan",
      year: 2021,
      link: "get-to-know",
    },
  ]

  return projects.map(({ img, title, description, corporation, year }, i) => (
    <div key={i} id={"project-card " + (i + 1)} className="px-8 min-w-fit">
      <img
        alt={title}
        src={img}
        className="object-cover object-center w-full"
      />

      <div className="text-light bg-dark px-8 pt-4 pb-8">
        <p className="text-3xl font-bold mb-4">
          {title}
        </p>

        <p className="text-sm font-light text-justify">
          {description}
        </p>

        <p className="text-sm text-grey-2 font-light mt-2">{corporation}, {year}</p>

        <Link to="get-to-know" className="inline-block bg-dark-2 py-1 px-4 text-sm font-semibold mt-6">
          Get to Know
        </Link>
      </div>
    </div>
  ))
}

export default ProjectCards
