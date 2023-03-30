import React from "react"
import { Link } from "react-router-dom"

import Carousel2 from "../components/carousel/Carousel2"
import ProjectCards from "../components/projectCards/ProjectCards"

import car1 from "../assets/images/landing-1/be-our-client.png"

import ico1 from "../assets/icons/landing/Database Administrator.svg"
import ico2 from "../assets/icons/landing/Laptop Settings.svg"
import ico3 from "../assets/icons/landing/Tools.svg"
import ico4 from "../assets/icons/landing/Website.svg"

function LandingPages() {
    const imgs = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        car1,
    ]

    const icons = [ico1, ico2, ico3, ico4]

    return (
        <div id="landing-pages" className="pt -16">
            <section id="landing-gtk" className="relative">
                <Carousel2 imgs={imgs} />

                <div className="absolute px-7 w-full h-full flex flex-col items-center justify-center top-0 bg-dark bg-opacity-90 md:items-start md:pl-32">
                    <h1 className="text-6xl font-extrabold text-center xl:text-8xl">
                        EXERCISE <span className="text-8xl">FTUI</span>
                    </h1>

                    <p className="w-[85%] max-w-md mt-12 font-light text-center md:text-justify xl:text-xl">
                        We started innovating since 1234 with a track record of
                        qualified work and has become one of the growing
                        technology organizations of the University of Indonesia.
                        Dig further to find out the best of us!
                    </p>

                    <Link
                        to="get-to-know"
                        className="bg-dark-2 py-1 px-4 font-bold mt-12"
                    >
                        Get to Know
                    </Link>
                </div>
            </section>

            <section
                id="landing-wioh"
                className="bg-light w-screen py-16 xl:p-24 text-center"
            >
                <p className="text-dark-2 font-light text-4xl mb-16">
                    What's in Our Hands?
                </p>

                <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-flow-row md:grid-cols-4">
                    {icons.map((icon, i) => (
                        <div key={i} className="bg-grey-2 p-4">
                            <img
                                alt="icon"
                                src={icon}
                                className="w-24 h-24 xl:w-32 xl:h-32"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section id="landing-project-cards" className="w-screen py-16">
                <p className="text-3xl text-dark-1 text-center mb-8">
                    Save your time, stay organized, get more done!
                </p>
                <div
                    id="project-cards-landing-lists"
                    className=" flex items-center justify-evenly "
                >
                    <ProjectCards />
                </div>
            </section>
        </div>
    )
}

export default LandingPages
