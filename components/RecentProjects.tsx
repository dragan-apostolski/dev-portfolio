"use client"

import React, { useState } from 'react'
import { projects } from "@/data/index"
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        A selection of my {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-16 mt-20 '>
        {projects.map(({id, title, des, img, iconLists, link, liveLink, badge}) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center w-[90vw] md:w-[32rem] border rounded-3xl border-white/[0.2] overflow-visible
                        transition-transform duration-500 transform hover:-translate-y-4 hover:translate-x-4'
          >
            <div className='relative w-full flex items-center justify-center mb-10 h-[240px] overflow-hidden rounded-t-3xl'>
              <div
                className="absolute inset-0 overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" className='w-full h-full object-cover' />
              </div>
              <div className='relative z-10 w-[90%] h-[90%] rounded-lg transform rotate-2 overflow-hidden'>
                <img src={img} alt={title} className='w-full h-full object-cover'/>
              </div>
              {badge && (
                <div className='absolute top-6 -right-8 z-20 bg-purple/95 backdrop-blur-sm px-12 py-2 border border-white/[0.2] transform rotate-45 shadow-lg'>
                  <p className='text-white text-xs font-bold tracking-widest uppercase'>{badge}</p>
                </div>
              )}
            </div>
            <div className='px-8'>
              <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 mb-1">
                {title}
              </h1>
              <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
            </div>
            <div className='flex flex-col w-full px-4 mt-7 mb-3 gap-3'>
              <div className='flex items-center relative'>
                {
                  iconLists.map((tech, index) => (
                    <div
                      key={tech.icon}
                      className='relative cursor-pointer border rounded-full border-white/[0.2] bg-black lg:w-10 lg:h-10 w-8 h-10 flex justify-center items-center hover:z-20 group'
                      style={{transform: `translateX(-${3 * index}px)`}}
                      onMouseEnter={() => setHoveredIcon(`${id}-${tech.icon}`)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <img src={tech.icon} alt={tech.name} width="24" height="24" className='transition-transform duration-500 hover:scale-[1.2]'/>
                      {hoveredIcon === `${id}-${tech.icon}` && (
                        <div className='absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/[0.2] whitespace-nowrap z-50'>
                          <p className='text-white text-xs font-medium'>{tech.name}</p>
                          <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/[0.2] transform rotate-45'></div>
                        </div>
                      )}
                    </div>
                  ))
                }
              </div>
              <div className='flex flex-col gap-2'>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex justify-between items-center hover:opacity-80 transition-opacity'
                >
                  <p className='text-base lg:text-lg text-purple'>Check GitHub repo</p>
                  <FaLocationArrow className='ms-3' color='#CBACF9'/>
                </a>
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex justify-between items-center hover:opacity-80 transition-opacity'
                  >
                    <p className='text-base lg:text-lg text-purple'>View live site</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
