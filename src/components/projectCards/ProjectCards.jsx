import React from "react"

function ProjectCards() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Title",
      description:
        "Lorem ipsum aoiwjoijdqiwj oiqwjdoij qoiwjd oipouqwe oijsodjiq",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Title",
      description:
        "Lorem ipsum aoiwjoijdqiwj oiqwjdoij qoiwjd oipouqwe oijsodjiq",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Title",
      description:
        "Lorem ipsum aoiwjoijdqiwj oiqwjdoij qoiwjd oipouqwe oijsodjiq",
    },
  ]

  return projects.map(({ img, title, description }, i) => (
    <div key={i} id={"project-card " + (i + 1)} className="inline-block w-72">
      <img
        id="project-card-img"
        alt={title}
        src={img}
        className="object-cover object-center h-56"
      />

      <div
        id="project-card-texts"
        className="text-light bg-grey-2 px-8 pt-4 pb-8"
      >
        <p
          id="project-card-title"
          className="text-2xl font-bold text-center mb-2"
        >
          {title}
        </p>
        <p id="project-card-description" className="font-normal text-start">
          {description}
        </p>
      </div>
    </div>
  ))
}

export default ProjectCards
