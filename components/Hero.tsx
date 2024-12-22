import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { GridBackground } from './ui/GridDotBackground'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { faces } from "@/data";
import dynamic from 'next/dynamic';

const PhotoBubble = dynamic(() => import('./ui/PhotoBubble').then((mod) => mod.PhotoBubble), { ssr: false });

const Hero = () => {
  return (
    <div className='pb-20 pt-10 lg:pt-24'>
      <div className='w-full'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <GridBackground className='h-screen'>
          <div className='flex justify-center z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60-wv] flex flex-col items-center justify-around'>
              <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl mb-10' 
                words='Crafting scalable web apps, from server logic to user interfaces'
              />
              <PhotoBubble
                className="my-5"
                photos={faces} 
              />
              <p className='my-5 text-center md:tracking-wider text-base font-light lg:text-lg'>
                Hi, I&apos;m Dragan. A full-stack web developer based in Slovenia.
              </p>
              <a href='#about'>
                <MagicButton
                  title="About me"
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
