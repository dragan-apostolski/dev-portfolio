import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { GridBackground } from './ui/GridDotBackground'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <GridBackground>
          <div className='flex justify-center my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60-wv] flex flex-col items-center justify-center'>
              <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl' 
                words='Crafting scalable web apps, from server logic to user interfaces'
              />
              <p className='mt-10 mb-10 text-center md:tracking-wider text-base font-light lg:text-lg'>
                Hi, I&apos;m Dragan. A full-stack web developer based in Slovenia.
              </p>
              <a href='#projects'>
                <MagicButton
                  title="Show my work"
                  iconPosition='right'
                  icon={<FaLocationArrow/>}
                />
              </a>
            </div>
          </div>
        </GridBackground>
      </div>
    </div>  
  )
}

export default Hero
