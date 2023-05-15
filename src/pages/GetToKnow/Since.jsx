import React, { useState } from 'react'
import compass from '../../assets/get-to-know/compass.png'

const Since = () => {

    const [isShown, setIsShown] = useState(false);

    return (

    <div className='relative'>
        {/* <div className='fixed z-10 bg-light left-10 top-32 drop-shadow-lg'>
            <div className="menu rounded-sm">
                <li
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)} 
                    className='before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-dark before:origin-right before:scale-x-0 before:hover:origin-left before:hover:'
                >
                    <a href='#design-specialist' className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                    </a>
                    {
                        isShown && (
                            <div className='bg-transparent max-h-5'>
                                <p className='text-md font-light text-dark uppercase'>Design Specialist</p>
                            </div>
                        )
                    }
                </li>
                <li>
                    <a href='#digital-marketing'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    </a>
                </li>
                <li>
                    <a  href='#bussiness-dev'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>

                    </a>
                </li>
                <li>
                    <a href='#training-dev'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    </a>
                </li> 
                <li>
                    <a href='#project-management'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href='#project-technical'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href='#finance'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href='#human-resource'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>

                    </a>
                </li>
                <li>
                    <a href='#the-executive'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                    </a>
                </li>
            </div>
        </div> */}

        <div className='text-light min-h-screen md:pb-20 grid justify-items-center w-full bg-dark'>
            <div className="w-5/6 mt-28 lg:my-auto space-y-8 px-5">
                <div className='space-y-12 lg:space-y-6 w-4/5 lg:w-full'>
                    <h1 className="text-5xl text-justify md:text-start lg:text-4xl font-semibold lg:font-light">Since the very beginning...</h1>
                    <div className="my-5 text-lg md:text-xl text-justify md:w-full md:mt-3 space-y-6 tracking-wider">
                        <p className="">Exercise has always been a place well known for developing electrical engineering department students in terms of hard skill and soft skill by pushing themselves further and <b className='font-bold'>encourage</b> each other to become a better engineer.</p>
                        <p className="mt-1">Exercise also provides a place for students to <b className='font-bold'>learn</b> how professional companies work to achieve a target on a similar project category developed by this organization. Lastly, Exercise will keep the spirit by creating a space where UI electrical engineering students can properly <b className='font-bold'>implement</b> and <b className='font-bold'>hone</b> their core competence in this collaborative and educative
environment..</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className=" bg-grey-1 text-light w-full lg:min-h-screen flex items-center px-20">
            <div className='lg:hidden my-20 w-5/6'>
                <div className='flex space-x-6'>
                    <div className='flex justify-center space-x-1 flex-col mt-20'>
                        <p className='text-4xl font-light'>Our</p>
                        <p className='text-5xl font-bold'>Vision</p>
                    </div>    
                    <img src={compass} className="h-48" />
                </div>
                <div className='mt-0 w-full md:w-4/5 lg:w-1/2 text-center md:text-start'>              
                    <p className="py-4 text-lg lg:text-xl font-extralight text-justify leading-6 tracking-wider">
                    Creating EXERCISE 2023 to be a career catalyst and a platform to inspire and help members apply knowledge and develop relevant skills in an adaptive and progressive environment.
                    </p>
                </div>
            </div>
            <div className="max-lg:hidden hero-content flex-col py-20 lg:flex-row lg:space-x-14  lg:mx-5">
                <img src={compass} className="lg:ml-0 w-1/3 md:w-3/5 lg:w-1/2 rounded-md" />
                <div className='mt-0 w-full md:w-4/5 lg:w-1/2 text-center md:text-start'>
                    <div className='flex justify-center space-x-1 lg:space-x-0 lg:flex-col'>
                        <p className='text-5xl lg:text-4xl font-light'>Our</p>
                        <p className='text-5xl lg:text-6xl font-bold'>Vision</p>
                    </div>                  
                    <p className="py-4 text-lg lg:text-xl font-extralight text-justify leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. ac arcu ornare.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-light text-dark flex  justify-center my-20">
            <div className='grid grid-row-2 justify-items-center space-y-10 px-5 w-11/12'>
                <div className='w-3/4 flex justify-end lg:justify-center'>
                    <h1 className="font-bold lg:font-light text-5xl md:text-6xl lg:text-7xl text-dark-2">Our Goals</h1>
                </div>
                <div className="font-light lg:font-extralight text-dark-2 w-3/4 text-lg lg:text-2xl md:w-3/4 md:mt-3">
                    <ul className='list-disc text-justify tracking-wider'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu</li>
                    </ul>
                </div>
            </div> 
        </div>
    </div>    
  )
}

export default Since