import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import { Navigation, EffectCoverflow } from "swiper"

function Testimoni() {
  const alums = [
    {
      name: "Aldrian Raffi",
      position: "Head of Design Specialist",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Moses Samuel",
      pos: "Head of Technical Project",
      test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Giovan Sihombing",
      pos: "Leader of a Cult",
      test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Nicholas Samosir",
      pos: "Defender of A Site",
      test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Wendy Dharmawan",
      pos: "Solo Queue Pudge Main",
      test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "M Jibril Adr",
      pos: "Where are My Lovers",
      test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
  ]

  return (
    <section className="bg-grey py-8 text-center">
      <h1 className="font-light text-dark-2 text-3xl">Testimoni Alumni</h1>

      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="relative h-[calc(90vh-4rem)] py-16 px-8 max-h-[524px]"
      >
        {alums.map((a, i) => (
          <SwiperSlide
            key={i}
            className="relative bg-light shadow-lg shadow-grey-1 text-dark-2 flex flex-col justify-center gap-8 max-h-[524px]"
          >
            <div className="text-center">
              <h1 className="text-lg">{a.name}</h1>
              <p className="font-extralight text-sm">{a.position}</p>
            </div>

            <p className="text-justify text-sm font-light px-5">
              {a.testimoni}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to="/testimoni-alumni" className="btn">
        View All
      </Link>
    </section>
  )
}

export default Testimoni
