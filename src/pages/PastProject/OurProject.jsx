import React from 'react'
import tokopedia from '../../assets/past-project/tokopedia.png'
import petik from '../../assets/past-project/petik-dua.png'
import polygon from '../../assets/past-project/polygon.png'
import { Link } from 'react-router-dom'

const OurProject = () => {
  return (
    <>
        {/* <div className='exercise-ftui text-light min-h-screen md:pb-20 grid justify-items-center place-content-center w-full bg-dark'>
            <div className="w-5/6 space-y-8 px-5 mt-10">
                <div className='space-y-6'>
                    <h1 className="text-3xl md:text-5xl font-extrabold">EXERCISE FTUI</h1>
                    <p className="my-5 text-lg md:text-xl text-justify md:w-3/5 md:mt-3 space-y-6">We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us! </p>
                    </div>
                <button className='bg-dark-2 rounded-sm py-1 text-lg'>Get to Know</button>
            </div>
        </div> */}

        <div className='intermezzo text-dark-2 bg-light min-h-screen flex flex-col items-center justify-center space-y-16'>
            <h1 className='text-center text-5xl sm:text-6xl font-bold lg:font-light uppercase lg:capitalize'>past project</h1>
            <div className='text-xl font-light text-justify lg:text-center w-2/3 md:mt-12 space-y-3 '>
                <p className='leading-6'>Exercise has a proven track record of delivering successful projects in collaboration with various external parties, including reputable companies, lecturers, and other industry experts.</p>
                <p className='leading-6' >Our commitment to fostering strong partnerships has enabled us to consistently achieve exceptional results and deliver outstanding value to our clients. </p>
            </div>
        </div>

        <div className='projects h-screen bg-light flex relative flex-col'>
            <div className='bg-dark h-[58%] '>
                <img src={tokopedia} className='ml-2 mt-5 flex-none' />
                <div className='flex justify-center'>
                    <p className='text-5xl font-extrabold text-light text-center hyphens-manuals mt-10 w-3/5'>E-Commerce Product Web Scraping<br/>x<br/>Tokopedia</p>
                </div>
            </div>
            <div className='absolute bottom-[40%] left-[38%]'>
                <Link to=''>
                    <button className='bg-grey-2 px-3 py-1 text-lg'>Get to Know</button>
                </Link>
            </div>
            <div className='bg-light w-4/5 mx-auto my-auto'>
                <img src={petik} className='h-14' />
                <p className='text-lg font-light text-dark my-2 text-justify'>Build a desktop GUI Application with Python programming language to create a web scraping system based on Selenium. The goal of this project is to gather data for Data Analytics purposes to predict future behavior.</p>
                <div className='flex mt-5 space-x-4'>
                    <img src={polygon} className='h-14' />
                    <div className='pt-1'>
                        <p className='text-dark text-xl'>Mbak Ryan</p>
                        <p className='text-grey text-sm'>anak tekkomz</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    
  )
}

export default OurProject