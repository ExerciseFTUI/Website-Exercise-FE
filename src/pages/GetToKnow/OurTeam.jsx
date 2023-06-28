import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Scrollbar, Pagination, Navigation } from "swiper";

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
        
                <div className='w-full flex justify-center mt-14'>
                    <div className='space-y-6 w-4/5 px-2 sm:px-3 md:w-2/3 lg:w-5/6 lg:px-8'>
                        <p className='text-dark-2 font-light text-3xl'>Staffs</p>
                        <div className=''>
                        <Swiper
                                slidesPerView={2}
                                spaceBetween={80}                
                                loop={true}   
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                    550: {
                                        slidePerView: 2,
                                        spaceBetween:120
                                    },
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
                                modules={[Scrollbar, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Zalfy Putra Rezky</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Design Specialist</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Lauren Christy</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Design Specialist</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Bintang Marsyuma</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Design Specialist</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Rizqi Zaidan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Design Specialist</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>
        
        <section id='business-development'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10 leading-5'>Amrita Deviayu Tunjung</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Cecilia Inez Reva</p>
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
                                    <p className='sm:w-1/2 font-extrabold text-5xl xl:text-6xl leading-8 xl:leading-10'>BUSINESS <span className='text-4xl xl:text-5xl'>DEVELOPMENT</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Creates a cohesive look and feel that sets us apart and establishes EXERCISE's identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.</p>
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
                                centeredSlides={false}   
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
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Farhan Nuzul Noufendri</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Design Specialist</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Darren Nathanael B</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Business Development</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Satrio Jati Pamungkas</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Business Development</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Satrio Jati Pamungkas</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Business Development</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='training-&-development'>
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
                                    <p className='sm:w-1/2 font-extrabold text-5xl xl:text-6xl leading-8 xl:leading-10'>TRAINING <span className='text-4xl xl:text-5xl'>DEVELOPMENT</span></p>
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
                                centeredSlides={false}                             
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
                                modules={[Scrollbar, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Training Development</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Training Development</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Training Development</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Training Development</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>           
                        </div>
                    </div>
                </div>              
            </div> 
        </section>

        <section id='project-management'>
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
                                    <p className='text-light font-bold text-xl text-center'>PROJECT</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl xl:text-6xl leading-8 xl:leading-10 '>PROJECT <span className='text-4xl xl:text-5xl'>MNAGEMENT</span></p>
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
                                    centeredSlides={false}                             
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
                                    modules={[Scrollbar, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Management</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Management</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Management</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Management</p>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>
            
                        </div>
                    </div>
                </div>
                
            </div> 
        </section>

        <section id='finance'>
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
                                    <p className='text-light font-bold text-xl text-center'>INTERNAL</p>
                                </div>
                                <div className='w-4/5 text-dark-2 mt-3'>
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>FINANCE</p>
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
                                    centeredSlides={false}                             
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
                                    modules={[Scrollbar, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Finance</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Finance</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Finance</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Finance</p>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>            
                        </div>
                    </div>
                </div>
            </div> 
        </section>

        <section id='human-resource'>
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
                                    <p className='sm:w-1/2 font-extrabold text-5xl lg:text-6xl leading-8 lg:leading-10'>HUMAN <span className='text-4xl lg:text-5xl'>RESOURCE</span></p>
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
                                centeredSlides={false}                             
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
                                modules={[Scrollbar, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Human Resource</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Human Resource</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Human Resource</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Fulan bin Fulan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Human Resource</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>           
                        </div>
                    </div>
                </div>               
            </div> 
        </section>

        <section id='technical'>
            {/* Software */}
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Raditya Ihsan</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Ivan Indirsyah</p>
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
                                    <p className='sm:w-1/2 lg:72 font-extrabold text-5xl xl:text-6xl leading-8 xl:leading-10'>SOFTWARE </p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>The driving force behind our technological advancements, harnessing the power of coding and algorithms to bring our products to life. With a team of brilliant developers and software engineers, we're constantly pushing the boundaries of what's possible, seeking new ways to innovate and improve user experience.</p>
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
                                centeredSlides={false}                             
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
                                modules={[Scrollbar, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Dimas Dermawan</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Project Software</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Giovan C. Sihombing</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Project Software</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Muhammad Fahish Haritsah</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Project Software</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='w-44 flex flex-col space-y-1'>
                                        <div className='h-52 bg-grey'></div>
                                        <p className='text-md text-center font-bold'>Farrel Athaillah N.</p>
                                        <p className='text-md text-grey text-center font-light'>Staff of Project Software</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>            
                        </div>
                    </div>
                </div>               
            </div>
            
            {/* Hardware */}
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Muhammad Gavin</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Ricky Rahman</p>
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
                                    <p className='sm:w-1/2 lg:w-72 font-extrabold text-5xl xl:text-6xl leading-8 xl:leading-10'>HARDWARE </p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>The backbone of our technological endeavors, responsible for bringing the physical components of our products to life. From designing and testing complex circuits to fine-tuning and assembling intricate hardware, our team of skilled engineers and technicians are the unsung heroes of innovation.</p>
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
                                    centeredSlides={false}                             
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
                                    modules={[Scrollbar, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Alexander Maximilian
    </p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Hardware</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Stanislaus David Arelian W.</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Hardware</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Davin Nazhif Wilviadli</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Hardware</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Wilky Martin</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Project Hardware</p>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>            
                        </div>
                    </div>
                </div>               
            </div> 
        </section>

        <section id='marketing-&-branding'>
            <div className='min-h-screen text-dark w-full my-32'>
                <div className='flex justify-center'>
                    <div className='flex w-full lg:w-4/5 flex-col lg:flex-row px-4'>
                        <div className='flex relative order-last lg:order-first w-5/6 sm:w-4/5 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-1/2 h-96 mx-auto mt-12 lg:mt-0'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-52 sm:w-56 h-72 bg-grey '></div>
                                <div className="w-12 h-px bg-dark mt-16"></div>
                                <div className='leading-3 mx-2'>
                                    <p className='text-dark-2 font-bold text-lg mt-10'>Dyah Laksmi</p>
                                    <p className='italic text-grey-1'>Head</p>
                                </div>
                            </div>
                            <div className='flex absolute bottom-0 right-0'>
                                {/* <div className='flex relative'> */}
                                    <div className='leading-3 mx-2 mt-56 '>
                                        <p className='text-dark-2 font-bold text-lg'>Azzah Angeli</p>
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
                                    <p className='w-11/12 sm:w-3/4 md:4/5 lg:w-72 font-extrabold text-5xl lg:text-5xl leading-8 lg:leading-10'>MARKETING <span className='text-4xl lg:text-4xl'>AND BRANDING</span></p>
                                    </div>
                                    <p className='font-light text-dark text-lg lg:text-xl text-justify leading-5 lg:leading-5 mt-5 tracking-wider lg:tracking-normal'>Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise that resonates with audiences and leaves a lasting impact. From developing marketing strategies, to executing campaigns and analyzing results.</p>
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
                                    centeredSlides={false}                             
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
                                    modules={[Scrollbar, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Sihombing Giovano G</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Marketing and Branding</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Adrien Adra Ramadhan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Marketing and Branding</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Wendy Dharmawan</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Marketing and Branding</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='w-44 flex flex-col space-y-1'>
                                            <div className='h-52 bg-grey'></div>
                                            <p className='text-md text-center font-bold'>Nicholas Samosir</p>
                                            <p className='text-md text-grey text-center font-light'>Staff of Marketing and Branding</p>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>           
                        </div>
                    </div>
                </div>
            </div> 
            <div className='bg-light h-2'></div>
        </section>
        
    </div>
    
    
  )
}

export default OurTeam