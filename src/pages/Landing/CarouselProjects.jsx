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
      title: "Project Title",
      desc: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us!",
      corp: "Corporation",
      year: 2016,
      img: "https://s3-alpha-sig.figma.com/img/bfaf/8871/6f6a0e93dae66aa4041aac2c39f4f3b3?Expires=1683504000&Signature=YftCXE4xHEl~fdCprOM4OZ0iOXx4~WX6ouwHQsC4YjwjOS4tEJRraCR6WJfpwwNPQuYI1uMMhD-S2oNW0O6pDYvQzoc5G5kXa-LKquczV9hmWwOitqcTSLwtWgQPJU-egf00DcEXWUnv4Zkl0UNpGhiK4D09JI1PhO7eZJBdu9Jk88pCEtQP2zE6fOpTwYVbXl9ft074cGZ3nbwZUaLNeCq3DdVWe1qCqjTL6gXAzUkYLnThKbHIpuNg27~vA53mYJQh0JVz~BXeGknZMMuddoP-q5VYZFT17dLKeiuZc30PgvvMjHeD6rj6BKZRyiluHCgMa42J6PSo~2WuuT5GBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
    <section
      id="landing-collaborated-projects"
      className="bg-grey relative pt-14 pb-16 sm:px-12 lg:p-0 lg:px-24 xl:px-40"
    >
      <p className="text-dark-2 text-center text-4xl mb-14 lg:hidden">
        Our Collaborated Projects
      </p>

      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation]}
        effect="coverflow"
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={{
          slideShadows: false,
        }}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".landing-next-project",
          prevEl: ".landing-prev-project",
        }}
        breakpoints={{
          1024: {
            spaceBetween: 0,
          },
        }}
        className="m-2 lg:m-0 lg:text-dark-2 xl:h-screen"
      >
        {projects.map((p, i) => (
          <SwiperSlide
            key={i}
            className="lg:flex lg:items-center lg:justify-center lg:py-12 lg:gap-16 xl:py-0"
          >
            <img
              alt={"project" + (i + 1)}
              src={p.img}
              className="object-cover relative block h-72 w-full lg:w-[482px] lg:h-[624px] xl:w-[474px] xl:h-[85%]"
            />

            <div className="bg-dark px-4 py-8 flex flex-col gap-4 sm:px-8 lg:bg-grey lg:pl-0 lg:gap-8">
              <p className="hidden lg:block text-2xl xl:text-3xl">
                Our Collaborated Projects
              </p>

              <h1 className="-m-0.5 text-4xl lg:text-5xl xl:text-7xl">
                {p.title}
              </h1>

              <p className="text-justify lg:text-lg xl:text-2xl">{p.desc}</p>
              <p className="text-grey-2 lg:text-lg xl:text-2xl">
                {p.corp}, {p.year}
              </p>

              <Link
                to={`/project/${p.title.toLowerCase().replace(" ", "-")}`}
                className="btn mb-4 lg:mb-0 lg:text-lg xl:text-2xl xl:py-2"
              >
                Get To Know
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none text-dark-2 text-2xl hidden absolute top-0 left-0 z-[1] w-full h-full px-12 lg:flex items-center justify-between xl:text-4xl">
        <div className="landing-prev-project cursor-pointer pointer-events-auto w-6 h-6 selection:bg-none">
          ◀
        </div>
        <div className="landing-next-project cursor-pointer pointer-events-auto w-6 h-6 selection:bg-none">
          ▶
        </div>
      </div>
    </section>
  )
}

export default CarouselProjects
