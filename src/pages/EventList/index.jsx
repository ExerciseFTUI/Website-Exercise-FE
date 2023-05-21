import React from "react"
import { Link } from "react-router-dom"

import eventList from "../../assets/event-list"
import headerImg from "../../assets/features/header.jpg"

function EventPage() {
  return (
    <div id="event-page">
      <div className="relative w-screen bg-dark bg-opacity-90 flex-center">
        <img
          alt="Header Image"
          src={headerImg}
          className="object-cover w-full h-full absolute top-0 left-0 -z-10"
        />

        <div className="site-wrapper w-container text-center py-36 md:py-48">
          <h1 className="mb-12 font-extrabold tracking-wider text-4xl md:text-5xl lg:text-7xl">
            Our Events
          </h1>
          <p className="max-w-3xl text-justify text-lg md:text-xl lg:text-2xl">
            The hub of captivating experiences that will leave you spellbound!
            Relive the enchantment of our remarkable past events, each one a
            testament to our commitment to curating unforgettable experiences.
            Be the first to discover our upcoming events, meticulously crafted
            to captivate your imagination and create extraordinary moments. Join
            our vibrant community and stay connected with the latest updates,
            behind-the-scenes insights, and exclusive sneak peeks. Step into a
            world where dreams come to life and let us transport you to a realm
            of awe-inspiring events.
          </p>
        </div>
      </div>
      <div>
        {eventList.map((e, i) => (
          <div
            key={i}
            id={`${e.title.toLowerCase().replace(/ +/g, "-")}-section`}
            className="group py-12 flex-center bg-light even:bg-dark text-light odd:text-dark-2"
          >
            <div className="site-wrapper w-container flex-center flex-wrap gap-8">
              <img
                alt={`${e.title} Poster`}
                src={e.img}
                className="h-96 object-cover shadow-sm shadow-dark group-odd:shadow-grey-2"
              />

              <div className="text-center max-w-lg flex-center flex-col gap-6 lg:text-start lg:items-start">
                <p className="opacity-90 text-xl">
                  {e.status} - {e.date}
                </p>

                <h1 className="font-extrabold text-3xl">{e.title}</h1>

                <p className="text-justify">{e.desc}</p>

                <Link
                  to={`event/${e.title.toLowerCase().replace(/ +/g, "-")}`}
                  className="btn-light group-odd:btn-dark"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventPage
