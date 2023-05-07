import React from 'react'

const OurProject = () => {
  return (
    <>
        <div className='exercise-ftui text-light min-h-screen md:pb-20 grid justify-items-center place-content-center w-full bg-dark'>
            <div className="w-5/6 space-y-8 px-5 mt-10">
                <div className='space-y-6'>
                    <h1 className="text-3xl md:text-5xl font-extrabold">EXERCISE FTUI</h1>
                    <p className="my-5 text-lg md:text-xl text-justify md:w-3/5 md:mt-3 space-y-6">We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us! </p>
                    </div>
                <button className='bg-dark-2 rounded-sm py-1 text-lg'>Get to Know</button>
            </div>
        </div>

        <div className='intermezzo text-dark-2 bg-light min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-light'>Past Project</h1>
            <div className='text-lg font-light md:text-xl text-center md:w-3/5 md:mt-12 space-y-3 '>
                <p className='leading-6'>Exercise has a proven track record of delivering successful projects in collaboration with various external parties, including reputable companies, lecturers, and other industry experts.</p>
                <p className='leading-6' >Our commitment to fostering strong partnerships has enabled us to consistently achieve exceptional results and deliver outstanding value to our clients. </p>
            </div>
        </div>
    </>
    
  )
}

export default OurProject