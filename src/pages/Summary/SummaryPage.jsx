import React from 'react'
import bg from '../../assets/summary/bg1.png'
import qr from '../../assets/summary/qr.png'
import pointer from '../../assets/summary/pointer.png'
import { useState } from 'react'

const SummaryPage = () => {

    const [open, setOpen] = useState(true);

    return (
    <div className=''>
        <div 
            className={`${open ? "w-72" : "w-0"} fixed duration-300 h-screen bg-grey z-10 mt-20`}
        >
        </div>
        <button>
            <img 
                src={pointer}  
                className={`${open ? "left-72" : 'left-0'} fixed duration-300 cursor-pointer top-20 md:top-36 w-7 md:w-10`}
                onClick={() => setOpen(!open)}
            />
        </button>
            
        

        <div 
        className='bg-light py-5 pt-24 px-3 md:px-8 space-y-6'>
            <div className='bg-neutral-200 h-1'></div>
            <div 
            className='drop-link pt-8 md:pt-14 rounded-md shadow-md h-96 bg-cover'
            style={{
                backgroundImage: `url(${bg})`
            }}
            >
                <p className='text-3xl md:text-3xl lg:text-4xl font-semibold w-3/4 mx-7 md:mx-16 drop-shadow-lg md:drop-shadow-md'>Since the very beginning...</p>
                
                <div className='mx-5 mt-10 flex md:justify-center'>
                    <label className='w-full md:w-3/5'>
                        <input className='w-full h-9 rounded-sm placeholder:text-grey-1 placeholder:tracking-widest placeholder:text-xs md:placeholder:text-sm' placeholder='   Drop your link here!'/>
                    </label>
                    <button className='bg-dark-2 w-24 text-xs md:text-sm rounded-sm tracking-widest'><small>Get URL</small></button>
                </div>
                <div className='flex md:justify-center'>
                    <p className='w-2/3 mx-5 pt-7 md:pt-3 text-dark-1 text-xs md:text-sm tracking-wider'>Create new custom shorten link</p> 
                </div>             
            </div>
            <div className='try-qr bg-light rounded-md shadow-md pt-8 px-5 h-72 md:flex md:px-10'>
                <div className='border border-dark md:w-full'>
                    <p className='text-dark-2 text-2xl font-semibold md:text-3xl lg:text-4xl'>Try Our QR Code</p>
                    <div className='flex pt-5 space-x-2'>
                        <div className='space-y-12'>
                            <p className='text-dark-1 text-xs tracking-wider w-11/12 md:w-full md:text-base'>Create new custom shorten link</p>
                            <button className='w-28 h-8 bg-dark-2 text-xs font-semibold rounded-md tracking-widest'><small>Get Here</small></button>
                        </div>
                        <img src={qr} className='h-28 md:h-36 md:hidden'/>
                    </div>
                </div>
                
                <img src={qr} className='max-md:hidden h-40 mr-5'/>
            </div>
        </div>
        
    </div>
    
  )
}

export default SummaryPage