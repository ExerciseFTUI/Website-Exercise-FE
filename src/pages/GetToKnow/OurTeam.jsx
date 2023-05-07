import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './OurTeam.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';



const OurTeam = () => {

  return (

    <div className='bg-light space-y-8 min-h-screen'>
        <div className="py-20 text-dark w-full grid place-content-center justify-items-center">
            <div className='mt-10 grid justify-items-center w-5/6 gap-4'>
                <h1 className="text-5xl lg:text-6xl font-light">Our Team</h1>
                <div className="w-4/5 lg:w-1/2 ">
                    <p className="text-lg lg:text-xl text-center font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu</p>
                </div>
            </div>
        </div>

        <section id='the-executive'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex flex-col justify-center items-center w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
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
                        <div className='flex relative w-1/2 mt-60'>
                            <div className=' pl-14'>
                                <div className='absolute text-center bottom-0'>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-6xl leading-10'>THE <span className='text-5xl'>EXECUTIVE</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div> 
        </section>

        <section id='design-specialist'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-6xl leading-10'>DESIGN <span className='text-5xl'>SPECIALIST</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>

        <section id='digital-marketing'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-5xl leading-8'>MARKETING <span className='text-4xl'>AND BRANDING</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>

        <section id='bussiness-dev'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-5xl leading-8'>BUSSINESS <span className='text-4xl'>DEVELOPMENT</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>
        
        <section id='training-dev'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-5xl leading-7'>TRAINING <span className='text-4xl'>DEVELOPMENT</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>

        <section id='project-management'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-6xl leading-9'>PROJECT <span className='text-5xl'>MANAGEMENT</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>
        
        <section id='software'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>PROJECT</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-5xl leading-10'>SOFTWARE</p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>

        <section id='hardware'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>PROJECT</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-5xl leading-10'>HARDWARE</p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>

        <section id='finance'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-6xl leading-10'>FINANCE <span className='text-5xl'></span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>

        <section id='human-resource'>
            <div className='min-h-screen text-dark w-full'>
                <div className='flex justify-center my-10 pt-20'>
                    <div className='flex w-4/5 px-4 '>
                        <div className='flex relative w-1/2 h-96'>
                            <div className='flex absolute top-0 left-0'>
                                <div className='w-56 h-72 bg-grey '></div>
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
                                    <div className='w-56 h-72 bg-grey'></div>
                                {/* </div>                            */}
                            </div>
                        </div>
                        
                        {/* <div className='flex-initial w-2/5 absolute bottom-0 right-5'> */}
                        <div className='flex relative w-1/2'>
                            <div className=' pl-14'>
                                <div className='absolute bottom-0'>
                                    <div className='w-1/3 py-0 bg-gradient-to-r from-dark-2 to-grey'>
                                        <p className='text-light font-bold text-xl text-center'>EXTERNAL</p>
                                    </div>
                                    <div className='font-extrabold w-4/5 text-dark-2 space-y-0 my-3'>
                                        <p className='text-6xl leading-10'>HUMAN <span className='text-5xl'>RESOURCE</span></p>
                                    </div>
                                    <p className='font-light text-dark text-xl text-justify leading-4 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt consectetur exercitationem itaque molestiae incidunt, nulla neque suscipit quas ex maxime dolore similique nostrum dolores veritatis expedita aperiam culpa delectus.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        

                <div className='mx-20 space-y-6'>
                    <p className='text-dark-2 font-light text-3xl px-16'>Staffs</p>
                    <div className='grid grid-cols-4 mx-5 justify-items-center'>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                        <div className='w-44 flex flex-col'>
                            <div className='h-52 bg-grey '></div>
                            <p className='text-sm text-center font-bold'>Muhammad Fahish Haritsah</p>
                            <p className='text-xs text-center font-light'>Software Technical</p>
                        </div>
                    </div>
                    </div>
            </div> 
        </section>
        
    </div>
    
    
  )
}

export default OurTeam