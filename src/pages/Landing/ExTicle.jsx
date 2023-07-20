import React from "react"
import { Link } from "react-router-dom"

import exticle from "../../assets/exticle"

function ExTicle() {
  return (
    <div id="exticle-section" className="bg-light py-20">
      <div className="w-container site-wrapper flex-center flex-col">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-16">
          <h1 className="bg-gradient-to-r from-dark rounded-md to-grey-1 text-4xl px-4 py-1 w-fit">
            ExTicle
          </h1>

          <h1 className="text-dark-2">-</h1>

          <p className="bg-dark-2 font-extrabold text-light text-lg tracking-wide px-2 py-1 rounded-md">
            COMING SOON
          </p>
        </div>

        <div className="flex-center flex-wrap gap-4">
          {exticle.map((ar, i) => (
            <div key={i} className="flex-center  flex-col gap-4 lg:flex-row">
              {ar.map((ex, j) => (
                <div key={j} className="text-dark-2">
                  <img
                    src={ex.thumbnail}
                    alt={"thumbnail " + (j + 1)}
                    className="object-cover rounded-md object-center mb-2 w-72 h-44"
                  />

                  <Link
                    to={`/exticle/${ex.title
                      .toLowerCase()
                      .replace(/ +/g, "-")}`}
                  >
                    <h1 className="text-lg">{ex.title}</h1>
                  </Link>

                  <p className="text-sm">{ex.upload}</p>

                  <p className="text-sm">By {ex.author}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExTicle
