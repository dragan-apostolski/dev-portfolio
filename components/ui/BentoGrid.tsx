'use client'
import { cn } from "@/lib/utils";
import React, { useState } from 'react'
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json"
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import { MovingCards } from "./MovingCards";
import { faces, techStack } from "@/data";
import Image from 'next/image';
import { email } from '@/data'
import dynamic from 'next/dynamic';

const PhotoBubble = dynamic(() => import('./PhotoBubble').then((mod) => mod.PhotoBubble), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string; 
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid  grid-cols-1 gap-4 md:grid-rows-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: Array<string>;
  id?: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input" + 
        "flex flex-col justify-between space-y-4 border border-white/[0.3]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
      }}
    >
      <div className={`${id === 7 && "flex justify-center text-center"} h-full`}> 
        <div className="w-full h-full absolute">
          { /* Image container */ }
          {img && (
            <Image
              src={img}
              alt={img}
              width={30}
              height={30}
              className={cn(imgClassName, "")}
            />
          )}
        </div>
        { id === 7 && (
          <BackgroundGradientAnimation/>
        )} 
        <div className={cn(
          titleClassName, 
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10' 
          + ` ${id === 2 && "min-h-72 lg:min-h-96 justify-center items-center "}`
          + ` ${id === 7 && "justify-around"}`,
        )}>
          {/* Render Title and description */}
          <div className="text-xl md:text-2xl lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>
          <div className="mt-4 font-extralight text-[#c1c2d3] text-sm lg:text-base z-100">
            {
              description?.map((desc, index) => (
                <p key={index}>{desc}<br/><br/></p>
              ))
            }
          </div>
          {/* Render custom components */}
          { id === 2 && <PhotoBubble photos={faces}/> }
          { id === 3  && (
            <MovingCards
              speed="normal"
              items={techStack}
            />
          )}
          { id ===  7 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline/>}
                otherClasses="`!bg-[#161a31]`"
                iconPosition="center"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
