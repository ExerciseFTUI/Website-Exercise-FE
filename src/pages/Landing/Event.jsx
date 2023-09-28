import React from "react"
import { Link } from "react-router-dom"

import eventList from "../../assets/event-list"
import upcoming from "../../assets/landing/upcoming-event/upcoming-events.png"

function Event() {
  const ev = eventList[0]

  return (
    <div
      id="event-section"
      className="bg-dark bg-opacity-95 text-light py-16 relative md:py-32 xl:py-44"
    >
      <div className="w-container site-wrapper flex-center flex-col text-center gap-6 md:flex-row md:text-start md:gap-12">
        <img
          alt="Upcome Photo"
          src={upcoming}
          className="object-cover  object-center w-full h-full absolute left-0 top-0 -z-10"
        />
        <img
          alt={ev.title}
          src={ev.img}
          className="object-contain rounded-md h-72 md:h-96 xl:h-[32rem]"
        />

        <div className="flex-center flex-col gap-4 md:items-start md:max-w-2xl md:gap-6">
          <h1 className="text-4xl md:text-5xl">{ev.title}</h1>

          <p className="text-grey md:text-lg">
            {ev.status} - {ev.date}
          </p>

          <p className="md:text-justify md:text-lg">{ev.desc}</p>

          <Link
            to="/events/matlab-training"
            className="btn-light md:text-lg rounded-md"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Event
