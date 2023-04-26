import React from "react"
import { Link } from "react-router-dom"

import CarouselExercise from "./CarouselExercise"
import CarouselProjects from "./CarouselProjects"
import WhatsInOurHands from "./WhatsInOurHands"
import FeaturesCards from "./FeaturesCards"

import img from "../../assets/images/landing/carousel/be-our-client.png"
import Testimoni from "./Testimoni"

function LandingPages() {
  return (
    <div id="landing-pages" className="pt-16">
      <CarouselExercise />

      <WhatsInOurHands />

      <CarouselProjects />

      <FeaturesCards />

      <section id="landing-exticle" className="text-center flex flex-col items-center gap-4 py-32">
        <h1 className="bg-gradient-to-r from-dark to-grey inline-block px-2 font-extrabold text-lg md:text-xl">ExTicle</h1>

        <h1 className="font-extrabold text-dark-2 text-4xl md:text-6xl">Article Title</h1>

        <p className="font-light text-dark-2 text-justify w-[90%] max-w-[924px] md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique et sit amet mauris. Duis vitae posuere nisl.<span className="text-justify hidden md:inline-block">Vivamus in est volutpat, facilisis nulla et, elementum nulla. Aliquam sed enim non leo ultricies scelerisque. Mauris et laoreet augue. Vestibulum in nisi a enim rutrum efficitur eget ut libero. Nam enim mi, aliquet ut sodales vestibulum, sagittis ac nulla. Vivamus ut dolor eget diam posuere consequat gravida ut velit. In consectetur, leo ac aliquet laoreet, velit mauris dignissim metus, a varius elit lorem eu sem. Donec at odio nec nisi elementum tristique.</span></p>

        <Link to="/exticle/article-title" className="btn md:text-2xl">More</Link>
      </section>

      <section id="landing-be-our-client" className="bg-dark bg-opacity-90 relative flex flex-col items-center justify-center gap-8 px-4 py-16 max-[320px]:py-12 md:py-32">
        <h1 className="text-5xl max-[320px]:text-4xl md:text-7xl">Be our client</h1>

        <p className="font-light text-justify text-base max-[320px]:text-sm sm:max-w-2xl md:text-2xl md:text-center">We pride ourselves on our ability to deliver results that exceed your expectations, and we're passionate about helping businesses like yours thrive in today's competitive market. So why wait?</p>

        <div className="w-full mt-4 flex justify-between sm:max-w-2xl md:w-auto md:justify-center md:gap-24">
            <Link to="/portfolios" className="btn text-base max-[320px]:text-sm max-[320px]:px-2 md:text-2xl md:py-3">Our portfolio</Link>
            <Link to="/social-media" className="btn text-base max-[320px]:text-sm max-[320px]:px-2 md:text-2xl md:py-3">Connect with us</Link>
        </div>

        <img src={img} alt="Be our Client Image" className="object-cover absolute top-0 left-0 w-full h-full -z-10" />
      </section>

      <Testimoni />
    </div>
  )
}

export default LandingPages
