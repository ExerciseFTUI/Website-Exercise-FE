import React from 'react'
import sidebar from '../../assets/get-to-know'

const Sidebar = () => {

  return (
    <>
        
        <ul className="fixed z-10 bg-light left-4 top-36 drop-shadow-md menu rounded-sm md:left-8 ">
            {
                sidebar.map((ic, i) => {
                    return(
                            <li className='group w-10 md:w-12 flex justify-center hover:bg-dark-2 transition-all duration-300 ease-in-out' key={i} tabIndex={0}>
                                <a 
                                href={`#${ic.desc.toLowerCase().replace(/ +/g, "-")}`}
                                className='h-10 md:h-12'>
                                    <img className='h-4 md:h-6 my-3 group-hover:brightness-200' src={ic.img} />
                                </a>
                                {/* <ul className="bg-light font-light text-dark-2 h-10 md:h-12">
                                    <li>
                                        <a 
                                        href={`#${ic.desc.toLowerCase().replace(/ +/g, "-")}`}className='text-sm'>{ic.desc}</a>
                                    </li>
                                </ul> */}
                            </li>
                        )
                })
            }
        </ul>
 

        
    </>
  )
}

export default Sidebar