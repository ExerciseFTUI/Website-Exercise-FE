import React from "react"
import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import { Autoplay, EffectCoverflow, Navigation } from "swiper"

function CarouselProjects() {
  const projects = [
    {
      title: "E-Commerce Product Web Scraping  ",
      desc: "Build a desktop GUI Application with Python programming language to create a web scraping system based on Selenium. The goal of this project is to gather data for Data Analytics purposes to predict future behavior.",
      corp: "Tokopedia",
      year: 2021,
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Project Title",
      desc: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us!",
      corp: "Corporation",
      year: 2016,
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ]

  return (
    <div
      id="collaborated-projects-section"
      className="bg-light py-20 lg:py-20"
    >
      <div className="site-wrapper w-container relative">
        <h1 className="section-head text-dark-2 text-4xl lg:hidden">
          Our Collaborated Projects
        </h1>

        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          effect="coverflow"
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 90,
            scale: 0,
            slideShadows: false,
          }}
          //   autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".landing-next-project",
            prevEl: ".landing-prev-project",
          }}
          className="lg:text-dark-1 overflow-visible"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="lg:flex-center xl:gap-12">
                <div className="relative h-56 w-full md:h-72 lg:w-fit lg:h-[524px]">
                  <img
                    alt={"project" + (i + 1)}
                    src={p.img}
                    className="object-cover object-center w-full h-full lg:max-w-sm"
                  />
                </div>

                <div className="bg-dark p-8 flex flex-col gap-4 lg:bg-light lg:gap-8 lg:w-[60%] lg:max-w-xl">
                  <p className="hidden lg:block text-2xl">
                    Our Collaborated Projects
                  </p>

                  <h1 className="-m-0.5 font-bold text-4xl lg:text-5xl">
                    {p.title}
                  </h1>

                  <p className="text-justify lg:text-lg">{p.desc}</p>
                  <p className="text-grey-1 lg:text-dark-2 lg:text-lg">
                    {p.corp}, {p.year}
                  </p>

                  <Link
                    to={`/project/${p.title.toLowerCase().replace(" ", "-")}`}
                    className="btn-light lg:btn-dark lg:bg-dark-2 rounded-md"
                  >
                    Get To Know
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none text-light text-2xl hidden absolute top-0 z-[1] w-full max-w-sm h-full lg:flex items-center justify-between lg:left-7 xl:left-[8.3rem]">
          <div className="landing-prev-project bg-dark-2 px-1 rounded-lg cursor-pointer pointer-events-auto selection:bg-none">
            ◀
          </div>

          <div className="landing-next-project bg-dark-2 px-1 rounded-lg cursor-pointer pointer-events-auto selection:bg-none">
            ▶
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselProjects
