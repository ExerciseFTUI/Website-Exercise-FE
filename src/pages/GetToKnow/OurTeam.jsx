import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const OurTeam = () => {

  return (

    <div className='bg-light space-y-8 min-h-screen'>
        <div className="py-20 text-dark w-full grid place-content-center justify-items-center">
            <div className='mt-20 w-2/3 h-px bg-dark-2 '/>
            <div className='mt-10 flex flex-col justify-center items-center w-2/3 gap-4 text-dark-2 space-y-6'>
                <h1 className="w-full lg:grid lg:justify-items-center text-5xl lg:text-6xl font-bold lg:font-light">Our Team</h1>
                <div className="w-full lg:w-4/5">
                    <p className="text-lg lg:text-xl text-justify lg:text-center font-extralight">At the core of our organization is a team of dedicated individuals who share a common vision.  Meet the faces behind EXERCISE 2023 and learn more about their passions and expertise.</p>
                </div>
            </div>
        </div>

        <section id='the-executive'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex flex-col justify-center items-center w-full md:w-5/6 px-4'>
                        <div className='flex relative w-11/12 sm:w-5/6 md:w-4/5 lg:w-7/12 xl:w-1/2 2xl:w-2/5 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Rafie Amandio</p>
                                    <p className='italic text-grey-1'>Chairman</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Luthfi Misbachul M.</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex flex-col justify-center items-center w-3/4 h-72'>                              
                            <div className='text-dark-2 w-3/4 sm:w-3/5 md:w-3/5 lg:w-5/12 xl:w-5/12 text-center'>
                                    <p className='font-extrabold text-4xl leading-10'>THE <span className='text-5xl'>EXECUTIVE</span></p>
                            </div>
                            <p className='text-justify font-light text-dark text-xl leading-4 mt-5 tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                
                            
                        </div> 
                    </div>
                </div>
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>
        
        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Aldrian Rafi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Zaki Hanan</p>
                                        <p className='italic text-grey-1'>Vice Head</p>
                                    </div>
                                    <div className="w-12 h-px bg-dark mt-62"></div>
                                    <div className='w-52 sm:w-56 h-72 bg-grey'></div>
                            </div>
                        </div>
                        
                        <div className='flex relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-3/5 lg:pl-10 xl:pl-14 mx-auto'>
                            <div className='lg:absolute lg:bottom-0'>
                                <div className='w-5/12 lg:w-1/2 xl:w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                    <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>DESIGN <span className='text-4xl lg:text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
                            </div>  
                        </div>   
                    </div>
                </div>
        
                <div className='w-full flex justify-center'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={3}
                                spaceBetween={200}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 150,
                                    },
                                    840: {
                                        slidesPerView: 3,
                                        spaceBetween: 80,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 150,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 80,
                                    },
                                    1536: {
                                        slidesPerView: 4,
                                        spaceBetween: 120,
                                    },
                                }}
                                modules={[]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col'>
                                        <div className='h-52 bg-grey '></div>
                                        <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-xs text-center font-light'>Software Technical</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>
        
    </div>
    
    
  )
}

export default OurTeam