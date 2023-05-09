import React from "react"
import { Link } from "react-router-dom"

import eventList from "../../assets/event-list"

function EventPage() {
  return (
    <div id="event-page">
      {eventList.map((e, i) => (
        <div
          key={i}
          id={`${e.title.toLowerCase().replace(/ +/g, "-")}-section`}
          className="group py-12 flex-center even:bg-dark text-dark-2 even:text-light"
        >
          <div className="site-wrapper w-container flex-center flex-wrap gap-8">
            <img
              alt={`${e.title} Poster`}
              src={e.img}
              className="h-96 object-cover shadow-sm shadow-dark group-even:shadow-grey-2"
            />

            <div className="text-center max-w-lg flex-center flex-col gap-6 lg:text-start lg:items-start">
              <p className="opacity-90 text-xl">
                {e.status} - {e.date}
              </p>

              <h1 className="font-extrabold text-3xl">{e.title}</h1>

              <p className="text-justify">{e.desc}</p>

              <Link
                to={`event/${e.title.toLowerCase().replace(/ +/g, "-")}`}
                className="btn-dark group-even:btn-light"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventPage
