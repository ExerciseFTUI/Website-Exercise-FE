import React from "react"
import { Link } from "react-router-dom"

import Logo from "./logo/Logo"
import Lists from "./lists/Lists"

import socMeds from "../assets/footer/social-media"
import loc from "../assets/footer/icons/loc.svg"
import phone from "../assets/footer/icons/phone.svg"

function Footer() {
  return (
    <footer id="footer" className="bg-dark">
      <div className="w-screen flex justify-evenly lg:py-12 lg:h-96">
        <div id="exercise" className="hidden w-[30%] lg:flex flex-col gap-8">
          <Logo style="w-40" />

          <p className="font-light text-justify">
            Creating EXERCISE 2023 to be a career catalyst and a platform to
            inspire and help members apply knowledge and develop relevant skills
            in an adaptive and progressive environment.
          </p>

          <div className="font-bold">
            <p>#JourneyOfGrowth</p>
            <p>#AdaptiveRelevantProfessional</p>
          </div>
        </div>

        <div id="links" className="lg:w-[17%] flex flex-col justify-between">
          <div className="hidden lg:flex flex-col gap-4">
            <h1 className="font-extrabold text-xl">LINKS</h1>

            <div className="flex justify-between">
              <div>
                <Lists
                  lists={["Home", "Projects", "Events"]}
                  style="font-light mb-1.5"
                />
              </div>

              <div>
                <Lists
                  lists={["Features", "Exticle"]}
                  style="font-light mb-1.5"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 h-12">
            {socMeds.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="socmed icon" src={s.img} className="w-9 lg:w-8" />
              </Link>
            ))}
          </div>
        </div>

        <div id="subscribe" className="hidden w-[30%] lg:flex flex-col gap-4">
          <div className="">
            <h1 className="font-extrabold text-xl mb-2">SUBSCRIBE</h1>
            <p className="font-light text-justify text-sm">
              Enter your email to get notified about our new notifications.
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <textarea
              placeholder="Enter your email address..."
              className="resize-none h-10 text-dark-2 text-sm leading-10 pl-2"
            />
            <Link to="/newsletter" className="btn-dark bg-dark-2">
              SUBMIT
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-justify">
              <img
                alt="location icon"
                src={loc}
                className="w-6 object-contain"
              />

              <div>
                <p className="font-bold xl:text-sm mb-1 lg:text-xs">
                  Faculty of Engineering, University of Indonesia
                </p>
                <p className="font-light xl:text-xs lg:text-[10px]">
                  University of Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan,
                  Beji, Depok City, West Java 16425
                </p>
              </div>
            </div>

            <div className="flex gap-3 text-justify">
              <img
                alt="contact person icon"
                src={phone}
                className="w-6 object-contain"
              />

              <div>
                <p className="font-bold xl:text-sm mb-1 lg:text-xs">
                  Contact Us
                </p>
                <p className="font-light xl:text-xs lg:text-[10px]">
                  Denise (081234567890 / handaneswari13)
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-full h-8 bg-dark lg:bg-dark-1 font-light text-sm flex items-center justify-center">
        Copyright © 2023. Exercise FTUI
      </div>
    </footer>
  )
}

export default Footer
