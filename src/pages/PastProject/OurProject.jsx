import React from 'react'
import { Link } from 'react-router-dom'

import petik from '../../assets/past-project/petik-dua.png'
import polygon from '../../assets/past-project/polygon.png'

import projects from '../../assets/past-project'




const OurProject = () => {
  return (
    <>
        <div className='intermezzo text-dark-2 bg-light min-h-screen flex flex-col items-center justify-center space-y-12'>
            <h1 className='text-center text-4xl sm:text-6xl font-extrabold md:text-7xl md:font-light uppercase md:capitalize'>past project</h1>
            <div className='text-lg sm:text-xl lg:text-2xl font-light text-justify md:text-center w-2/3 md:mt-12 space-y-3 '>
                <p className='leading-6'>Exercise has a proven track record of delivering successful projects in collaboration with various external parties, including reputable companies, lecturers, and other industry experts.</p>
                <p className='leading-6' >Our commitment to fostering strong partnerships has enabled us to consistently achieve exceptional results and deliver outstanding value to our clients. </p>
            </div>
        </div>

        {
            projects.map((project, i) => {
                return (
                    <div className='projects h-screen md:h-full bg-light flex relative flex-col' key={i}>
                        {
                            project.logo != null && 
                            <img src={project.logo} className='ml-2 mt-5 absolute h-14 md:h-18' />
                        }
                        <div className='bg-dark h-3/5 py-32 lg:py-20'>
                            <div className='flex justify-center'>
                                <p className='text-4xl sm:text-5xl font-extrabold text-light text-center hyphens-manuals w-3/5 sm:w-4/5'>{project.name}<br/>{project.x}<br/>{project.comp}</p>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 top-40 md:top-30 lg:top-0 xl:top-0 grid place-items-center'>
                            <Link to=''>
                                <button className='bg-grey-2 px-3 py-1 text-xl md:text-2xl font-semibold'>Get to Know</button>
                            </Link>
                        </div>
                        <div className='bg-light w-4/5 lg:w-2/3 mx-auto py-8 lg:py-10'>
                            <img src={petik} className='md:h-14'/>
                            <p className='md:text-lg font-light text-dark my-2 text-justify'>{project.desc}</p>
                            <div className='flex mt-5 space-x-4 '>
                                <img src={polygon} className='h-10 md:h-14' />
                                <div className='md:pt-1'>
                                    <p className='text-dark md:text-xl'>{project.developer}</p>
                                    <p className='text-grey text-sm'>{project.devdesc}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }
        
    </>
    
  )
}

export default OurProject