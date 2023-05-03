import React from "react"

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
          <div key={i} className="h-screen border-solid border-dark-2 border-4">
            {ev.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventPage
