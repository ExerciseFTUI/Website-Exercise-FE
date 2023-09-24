import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

function CarouselProjects() {
  return (
    <div id="collaborated-projects-section" className="bg-light py-20 lg:py-20">
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
                    className="object-cover rounded-t-lg lg:rounded-lg object-center w-full h-full lg:max-w-sm"
                  />
                </div>

                <div className="bg-dark p-8 rounded-b-lg flex flex-col gap-4 lg:bg-light lg:gap-8 lg:w-[60%] lg:max-w-xl">
                  <p className="hidden lg:block text-2xl">
                    Our Collaborated Projects
                  </p>

                  <h1 className="-m-0.5 font-bold text-4xl lg:text-5xl">
                    {p.title}
                  </h1>

                  <p className="text-justify lg:text-lg">{p.desc}</p>
                  <p className="text-grey-1  lg:text-dark-2 lg:text-lg">
                    {p.corp}, {p.year}
                  </p>

                  <Link
                    to={`/project/${p.title.toLowerCase().replace(" ", "-")}`}
                    className="btn-light  lg:btn-dark lg:bg-dark-2 rounded-md"
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

import ecommerce from "../../assets/landing/projects/E-Commerce Product Web Scraping.png"
import fintech from "../../assets/landing/projects/Fintech Automation System.jpeg"
import temperature from "../../assets/landing/projects/Temperature Detection  with facial detection and IoT_.png"
import documentSigning from "../../assets/landing/projects/Document Conversion and P12 Signing.png"
import pothole from "../../assets/landing/projects/pothole.png"

const projects = [
  {
    title: "E-Commerce Product Web Scraping  ",
    desc: "Build a desktop GUI Application with Python programming language to create a web scraping system based on Selenium. The goal of this project is to gather data for Data Analytics purposes to predict future behavior.",
    corp: "Tokopedia",
    year: 2021,
    img: ecommerce,
  },
  {
    title: "Fintech Automation System",
    desc: "Create devices to automate the process of inputting data from internet banking into this fintech application system so that the process of inputting internet banking data becomes automatic.",
    corp: "Flip",
    year: 2021,
    img: fintech,
  },
  {
    title: "Temperature Detection with Facial Detection and IoT",
    desc: "Developed an IoT projects to help the Electrical Department on creating a device to measure each person temperature when the device detected a valid face from the camera. The data will also be sent into an endpoint to be collected and analyzed.",
    corp: "Exercise",
    year: 2021,
    img: temperature,
  },
  {
    title: "Document Conversion and P12 Signing",
    desc: "Develop a document conversion program to convert docx file format to pdf. The P12 signing will make a timestamp as a mark on the pdf signing. This program created with Python, Java, Django, and Spring REST API methods.",
    corp: "Exercise",
    year: 2021,
    img: documentSigning,
  },
  {
    title: "Pothole Detector",
    desc: "Develop an Embedded System developed to detect several potholes in a certain area by integrating it into an autonomous vehicle.",
    corp: "Exercise",
    year: 2021,
    img: pothole,
  },
  {
    title: "E-Commerce Product Web Scraping  ",
    desc: "Build a desktop GUI Application with Python programming language to create a web scraping system based on Selenium. The goal of this project is to gather data for Data Analytics purposes to predict future behavior.",
    corp: "Tokopedia",
    year: 2021,
    img: ecommerce,
  },
  {
    title: "Fintech Automation System",
    desc: "Create devices to automate the process of inputting data from internet banking into this fintech application system so that the process of inputting internet banking data becomes automatic.",
    corp: "Flip",
    year: 2021,
    img: fintech,
  },
  {
    title: "Temperature Detection with Facial Detection and IoT",
    desc: "Developed an IoT projects to help the Electrical Department on creating a device to measure each person temperature when the device detected a valid face from the camera. The data will also be sent into an endpoint to be collected and analyzed.",
    corp: "Exercise",
    year: 2021,
    img: temperature,
  },
  {
    title: "Document Conversion and P12 Signing",
    desc: "Develop a document conversion program to convert docx file format to pdf. The P12 signing will make a timestamp as a mark on the pdf signing. This program created with Python, Java, Django, and Spring REST API methods.",
    corp: "Exercise",
    year: 2021,
    img: documentSigning,
  },
  {
    title: "Pothole Detector",
    desc: "Develop an Embedded System developed to detect several potholes in a certain area by integrating it into an autonomous vehicle.",
    corp: "Exercise",
    year: 2021,
    img: pothole,
  },
]