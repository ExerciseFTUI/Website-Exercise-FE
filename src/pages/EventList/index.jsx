import React from "react"
import { Link } from "react-router-dom"

function EventPage() {
  const eventList = [
    {
      title: "DigSilent",
      date: "28 April 2023",
    },
    {
      title: "TechnoSkill",
      date: "28 April 2023",
    },
    {
      title: "Arduino",
      date: "28 April 2023",
    },
  ]

  return (
    <div id="event-page">
      <div className="site-wrapper w-container text-dark-2">
        {eventList.map((ev, i) => (
          <Link
            key={i}
            to={`event/${ev.title.toLowerCase().replace(" ", "-")}`}
            className="block h-screen border-solid border-dark-2 border-4"
          >
            {ev.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventPage
