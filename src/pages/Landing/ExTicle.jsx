import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

import exticle from "../../assets/exticle"

//Swiper.js
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination, Scrollbar } from "swiper/modules"

function ExTicle() {
  return (
    <div id="exticle-section" className="bg-light py-20">
      <div className="w-container site-wrapper flex-center flex-col">
        <h1 className="bg-gradient-to-r from-dark rounded-md to-grey-1 text-4xl px-4 py-1 my-7 w-fit">
          ExTicle
        </h1>
        <p className="text-dark-2 text-3xl font-bold mb-5">Latest Articles</p>
      </div>
      <div className="w-full px-10 rounded-xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            dynamicBullets: true,
            dynamicMainBullets: 3,
            type: "bullets",
          }}
          modules={[Pagination]}
          rewind={true}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          className="mySwiper rounded-xl"
        >
          {exticle.map((ex, i) => (
            <SwiperSlide>
              <div className="flex flex-col h-full justify-center bg-light text-dark-2 space-y-3">
                <img
                  src={ex.thumbnail}
                  alt={"thumbnail " + (i + 1)}
                  className="object-cover rounded-xl"
                />
                <div className="mx-5">
                  <Link
                    to={`/exticle/#${ex.title
                      .toLowerCase()
                      .replace(/ +/g, "-")}`}
                  >
                    <p className="text-lg font-bold hover:underline duration-200">
                      {ex.title}
                    </p>
                  </Link>

                  <p className=" text-sm">{ex.upload}</p>
                  <p className="">By {ex.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ExTicle
