import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"

import { EffectCoverflow, Autoplay } from "swiper"

function testimoni() {
  const alums = [
    {
      name: "Aldrian Raffi",
      position: "Head of Design Specialist",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Moses Samuel",
      position: "Head of Technical Project",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Giovan Sihombing",
      position: "Gagal nikah",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Nicholas Samosir",
      position: "Apa ya",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Wendy Dharmawan",
      position: "Gatau deh",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "M Jibril Adr",
      position: "Apa hayo",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
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
        modules={[EffectCoverflow, Autoplay]}
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
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
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

export default testimoni
