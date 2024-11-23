import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { GridBackground } from './ui/GridDotBackground'
import Image from 'next/image';
import { email } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full' id='contact'>
      <GridBackground>
        <div className='flex flex-col items-center justify-center'>

          <div 
            className='flex flex-col items-center'
          >
            <h1 className='heading lg:max-w-[45vw]'>
              Ready to <span className='text-purple'>implement</span> your next idea?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
              Reach out to me today and let&apos;s discuss how I can help you
            </p>
            <a href={`mailto:${email}`}>
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                iconPosition='right' 
              />
            </a>
          </div>

          <div className='flex flex-col items-center justify-center mt-20 gap-y-4'>
            <p className='md:text-base md:font-normal text-sm font-light'>Copyright &copy; 2024 Dragan Apostolski</p>

            <div className='flex items-center md:gap-3 gap-6'>
              {socialMedia.map((profile) => (
                <a key={profile.id} href={profile.link} target="_blank">
                  <div 
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg satura-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                  >
                    <Image
                      src={profile.img}
                      alt="social"
                      width={20}
                      height={20}
                      style={{fill: 'black'}}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </GridBackground>
    </footer>
  )
}

export default Footer
