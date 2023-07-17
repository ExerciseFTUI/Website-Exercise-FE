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
                    <div className='projects h-screen bg-light flex relative flex-col' >
                    
                        <div className='h-3/5 grid justify-items-center relative'
                            style={{
                                backgroundImage: `url(${project.bg})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                            }}
                            key={i}
                        >
                            {
                            project.logo != null && 
                            <img src={project.logo} className='absolute top-6 left-6 h-14 md:h-18 lg:h-24' />
                            }
                            <div className='flex justify-center my-auto'>
                                <p className='text-4xl sm:text-5xl font-extrabold text-light text-center hyphens-manuals w-3/5 sm:w-4/5'>{project.name}<br/>{project.x}<br/>{project.comp}</p>
                            </div>
                            {/* absolute bottom-0 left-0 right-0 top-40 md:top-30 lg:top-50 */}
                            <div className='absolute -bottom-4'>
                                <Link to=''>
                                    <button className='bg-grey-2 px-3 py-1 text-xl md:text-2xl font-semibold '>Get to Know</button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className='bg-light w-4/5 lg:w-2/3 mx-auto py-8 lg:py-10'>
                            <img src={petik} className='md:h-14'/>
                            <p className='md:text-lg font-light text-dark my-2 text-justify'>{project.desc}</p>
                        </div>
                        
                    </div>
                )
            })
        }
        
    </>
    
  )
}

export default OurProject