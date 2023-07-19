import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"

import { EffectCoverflow, Autoplay } from "swiper/modules"

function testimoni() {
  const alums = [
    {
      name: "Darvin",
      position: "Teknik Komputer",
      testimoni:
        "Exercise has always been an excellent opportunity to develop both hard and soft skills. I'm able to improve my teamwork abilities and experience solving industry-level problems together with amazing people. If you are from the electrical department, don't miss the chance to join this fantastic organization while you can!",
      img: "asd",
      ig: "https://www.instagram.com/darvinyap/",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "https://www.linkedin.com/in/darvinyap/",
    },
    {
      name: "Ziyan Muhammad Aqsha",
      position: "Teknik Biomedik",
      testimoni:
        "EXERCISE is a platform to enhance my knowledge and skills through workshops, seminars, and conferences. These programs also helped me to stay updated with the latest scientific developments and enabled me to learn from the experiences of experts in my field.",
      img: "asd",
      ig: "https://www.instagram.com/ziyanmuhammad/",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "https://www.linkedin.com/in/ziyanmuhammad/.com",
    },
    {
      name: "Jason",
      position: "Teknik Elektro",
      testimoni:
        "Exercise provided an opportunity for me to go beyond and develop both new technical & project management skills that were complementary to the knowledge I’ve gained through my Electrical Engineering studies. Assessing feasibility of engineering projects in terms of practicality and implementations is a skill you may not get anywhere else!",
      img: "asd",
      ig: "https://www.instagram.com/jasonantonio99/",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "https://www.linkedin.com/in/jasonantonio/",
    },
  ]

  return (
    <div id="landing-testimoni-section" className="bg-light  py-20">
      <div className="site-wrapper w-container text-center">
        <h1 className="font-bold text-dark-2 text-4xl mb-8">
          Our Alumni Testimonials
        </h1>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          loop={true}
          grabCursor={true}
          roundLengths={false}
          autoHeight={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            modifier: 1,
            depth: 100,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="py-8 mb-8"
        >
          {alums.map((a, i) => (
            <SwiperSlide
              key={i}
              className="bg-dark-1 rounded-lg shadow-lg shadow-grey-1 text-light px-6 py-12"
            >
              <div className="text-center mb-8">
                <h1 className="font-bold text-lg lg:text-xl">{a.name}</h1>
                <p className="font-extralight text-sm lg:text-lg">
                  {a.position}
                </p>
              </div>

              <p className="font-light text-justify text-sm lg:text-base">
                {a.testimoni}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default testimoni
