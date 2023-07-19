import React from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

// import SideBar from "./SideBar"

import Collapsable from "./Collapsable"
import CurriculumCard from "./CurriculumCards"

import price from "../../assets/event-details/price"
import benefits from "../../assets/event-details/benefits"
import applications from "../../assets/event-details/applications"

function EventDetails() {
  const lists = ["About", "Benefits", "Kurikulum", "Aplikasi", "FAQ", "Harga"]

  const { scrollY } = useScroll()

  const topOff = useTransform(scrollY, [0, 60], [-80, 0])
  const top = useSpring(topOff, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <div id="event-details-page" className="relative mt-20 bg-light">
      <div id="about-section" className="bg-dark text-light w-full py-12">
        <div className="site-wrapper w-container">
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="font-extrabold text-3xl lg:text-4xl">
              Power Factory DigSILENT Training
            </h1>

            <p className="bg-light tracking-widest rounded-md font-medium text-dark-2 text-xl w-fit pl-2 pr-1.5 py-0.5 lg:text-2xl">
              Rp 100.000
            </p>

            <p className="font-extralight lg:text-xl">
              Open Registration -{" "}
              <span className="font-semibold">29 April 2023</span>
            </p>
          </div>

          <p className="text-justify mb-5 font-extralight max-w-4xl lg:text-xl">
            Training Digsilent adalah pelatihan dengan aplikasi DigSilent yang
            dikhususkan untuk mahasiswa jurusan Teknik Elektro yang ingin
            mengambil peminatan Tenaga Listrik. Training Digsilent berkolaborasi
            dengan Laboratorium STL FTUI pada bulan Maret 2023.
          </p>

          <Link to="#header-section" className="btn-light rounded-md py-0.5 lg:text-xl">
            REGISTER
          </Link>
        </div>
      </div>

      <div className="flex">
        <aside
          id="event-sidebar"
          className="hidden xl:flex flex-col h-screen sticky top-20 px-2 bg-dark"
        >
          <div className="border-solid rounded-lg border-dark-2 border-2 pb-4 mb-8 shadow-xl bg-light">
            <h1 className="bg-dark-2 font-semibold text-light text-2xl text-center mb-4 py-2">
              Go To
            </h1>

            <ul className="list-outside list-['▸_'] px-12 ">
              {lists.map((l, i) => (
                <li
                  key={i}
                  className="list-item w-fit px-2 py-1.5 mb-1 hover:rounded-md text-dark-2 hover:bg-dark-2 hover:text-light ease-in-out duration-200"
                >
                  <Link
                    to={`#${l.toLowerCase()}-section`}
                    className="font-bold text-lg "
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-solid border-dark-2 rounded-lg border-2 text-center text-dark-2 w-full pt-8 flex-center flex-col shadow-xl bg-light">
            <p className="text-xl mb-4">Kuota Terbatas!</p>
            <h1 className="text-xl tracking-widest mb-4">Rp100.000</h1>

            <Link className="btn-dark w-full">Register</Link>
          </div>
        </aside>

        <main id="events-section" className="overflow-x-clip w-full">
          <div id="benefits-section" className="py-20 bg-grey">
            <div className="site-wrapper w-container flex-center flex-col">
              <h1 className="section-head text-dark-2 text-center text-3xl tracking-widest mb-20 lg:text-5xl">
                Benefits
              </h1>
              <div className="rounded-md overflow-clip">
                {benefits.map((l, i) => (
                  <div
                    key={i}
                    className={`${l.bg} ${l.text} flex-center justify-start w-full p-4`}
                  >
                    <img
                      alt={`${l.title} Icon`}
                      src={l.icon}
                      className="w-12 mr-4 lg:w-20"
                    />

                    <p className="font-semibold lg:text-xl">{l.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="kurikulum-section" className="py-16">
            <div className="site-wrapper w-container">
              <h1 className="section-head tracking-widest text-dark-2 text-3xl lg:text-5xl">
                Curriculum
              </h1>

              <div className="text-dark-2 flex-center flex-wrap gap-4 lg:text-xl">
                <CurriculumCard
                  title="DAY 1"
                  lessons={[
                    "Dasar STL",
                    "Pengenalan DigSILENT",
                    "Simulasi Pembuatan & Pembuatan Single Line Diagram",
                  ]}
                />

                <CurriculumCard
                  title="DAY 2"
                  lessons={[
                    "Load Flow",
                    "Short Circuit",
                    "Pembuatan Single Line Diagram",
                    "Error Handling, Summary, & Report",
                  ]}
                />
              </div>
            </div>
          </div>

          <div id="aplikasi-section" className="bg-dark py-24">
            <div className="site-wrapper w-container">
              <h1 className="section-head mb-20 text-3xl lg:text-5xl">
                Used{" "}
                <span className="bg-light rounded-md text-dark pt-0.5 pb-1.5 px-1">
                  Applications
                </span>
              </h1>

              <div className="flex-center flex-wrap gap-12">
                {applications.map(({ title, img }, i) => (
                  <div
                    key={i}
                    className="flex-center flex-col gap-4 w-24 lg:w-32"
                  >
                    <img
                      alt={`${title} Logo`}
                      src={img}
                      className="object-contain object-center w-24 h-24 lg:w-32 lg:h-32"
                    />

                    <p className="text-center font-bold lg:text-xl">{title}</p>
                  </div>
                ))}
              </div>  
            </div>
          </div>

          <div id="faq-section" className="py-28">
            <div className="site-wrapper w-container text-dark-2">
              <h1 className="section-head mb-28 text-3xl lg:text-5xl">
                Frequently Asked Questions
              </h1>

              <div className="flex flex-col text-lg lg:text-2xl">
                <Collapsable />
                <Collapsable title="baudbw" desc="aoiwjdoiwjq" />
                <Collapsable />
                <Collapsable />
                <Collapsable />
              </div>
            </div>
          </div>

          <div id="harga-section" className="py-20 bg-grey-2">
            <div className="site-wrapper w-container text-center">
              <h1 className="section-head tracking-widest text-3xl bg-light rounded-md text-dark-2 inline-block px-2 py-1 mb-20 lg:text-5xl">
                Price
              </h1>

              <div className="flex-center flex-wrap gap-12 lg:gap-16">
                {price.map((p, i) => (
                  <div
                    key={i}
                    className="bg-light rounded-lg text-dark-2 rounded-b-sm flex-center justify-between flex-col w-64 h-64 px-4 lg:w-72 lg:h-72"
                  >
                    <img
                      alt={p.img + " Icon"}
                      src={p.img}
                      className="w-24 -mt-8 lg:w-32 lg:-mt-16 "
                    />

                    <div className="text-center">
                      <h1 className="text-3xl mb-8 ">{p.title}</h1>
                      <p className="tracking-widest text-xl lg:text-2xl">
                        {p.price}
                      </p>
                    </div>

                    <Link className="btn-dark rounded-md bg-dark-2 px-2 -mb-2.5 lg:text-xl">
                      Register
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            id="closing-section"
            className="text-dark-2 text-center w-full h-screen flex-center flex-col"
          >
            <h1 className="font-extrabold text-4xl mb-12">We're excited to bring you these valuable training opportunities to help you enhance your skills and grow your career.</h1>

            <Link to="/#" className="btn-dark rounded-md">
              Register
            </Link>
          </div>
        </main>
      </div>

      <motion.div
        style={{
          bottom: top,
        }}
        className="w-full h-16 bg-dark p-2 flex justify-between items-center sticky bottom-0 xl:hidden"
      >
        <div>
          <p className="md:text-lg">Ikuti training hanya dengan</p>
          <p className="tracking-widest font-medium md:text-lg">Rp 100.000</p>
        </div>

        <Link to="#" className="btn-light">
          Register
        </Link>
      </motion.div>
    </div>
  )
}

export default EventDetails
