import { workExperience } from '@/data'
import React from 'react'
import { MovingBorderContainer } from './ui/MovingBorders'
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> work </span>
        experience
      </h1>

      <div className="w-full mt-12 flex flex-col justify-center items-center gap-16">
        {workExperience.map(({id, title, company, tenure, desc, thumbnail, icons}) => (
          <MovingBorderContainer
            key={id} 
            borderRadius='1.75rem'
            containerClassName='self-stretch'
            className='text-white border-neutral-200 border-x-slate-800'
          >
            <div className='grid w-full grid-cols-2 p-10 py-6 md:p-5 lg:p-10 gap-2'>
              <div
                className='col-span-2 sm:col-span-1 justify-self-start'
              >
                <h1 className='text-start text-xl md:text-2xl font-bold'>{title}</h1>
                <h3 className='text-start text-lg md:text-xl'>{company}</h3>
                <p className='text-start text-sm md:text-base font-light'>{tenure}</p>
              </div>
              <Image
                src={thumbnail}
                alt={thumbnail}
                width={128}
                height={128}
                className='pt-4 justify-self-start sm:justify-self-end'
              />
              <p className='col-span-2 text-start text-sm lg:text-base text-white-200 mt-3 pt-4'>{desc}</p>
              <div className='flex items-center pt-4 col-span-2'>
                {
                  icons.map((icon) => (
                    <div
                      key={icon}
                      className='hover:cursor-pointer border rounded-full border-white/[0.2] bg-black lg:w-10 lg:h-10 w-12 h-10 flex justify-center items-center hover:z-10'
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={24}
                        height={24}
                        className=' transition-transform transformduration-500 hover:scale-[1.2]'
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </MovingBorderContainer>
        ))}
      </div>
    </section>
  )
}

export default Experience
