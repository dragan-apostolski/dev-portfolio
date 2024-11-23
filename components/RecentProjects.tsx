import React from 'react'
import { projects } from "@/data/index"
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        A selection of my {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-16 mt-20 '>
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <a
            key={id}
            href={link}
            target="_blank"
          >
            <div
              className='flex flex-col items-center justify-center w-[90vw] md:w-[32rem] border rounded-3xl border-white/[0.2] overflow-hidden 
                          transition-transform duration-500 transform hover:-translate-y-4 hover:translate-x-4'
            >
              <div className='relative flex items-center justify-center mb-10'>
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={img} alt={title} className='z-10 absolute object-cover w-[90%] h-full rounded-lg transform rotate-2'/>
              </div>
              <div className='px-8'>
                <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 mb-1">
                  {title}
                </h1>
                <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-2'>
                  {des}
                </p>
              </div>
              <div className='flex justify-between items-center w-full px-4 mt-7 mb-3'>
                <div className='flex items-center'>
                  {
                    iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className='border rounded-full border-white/[0.2] bg-black lg:w-10 lg:h-10 w-8 h-10 flex justify-center items-center hover:z-10'
                        style={{transform: `translateX(-${3 * index}px)`}}
                      >
                        <img src={icon} alt={icon} className='w-6 h-6 transition-transform transformduration-500 hover:scale-[1.2]'/>
                      </div>
                    ))
                  }
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-lg text-purple text-right'>Check github repo</p>
                  <FaLocationArrow className='ms-3' color='#CBACF9'/>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
