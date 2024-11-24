'use client'; // Add this if using Next.js app directory to make it a client component

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type PhotoBubbleProps = {
  photos: {
    normal: string;
    up: string;
    'left-up': string;
    left: string;
    'left-down': string;
    down: string;
    'right-down': string;
    right: string;
    'right-up': string;
  };
};

export const PhotoBubble: React.FC<PhotoBubbleProps> = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(photos.normal);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    if (!isClient) return; // Prevent running on the server

    const handleMouseMove = (event: MouseEvent) => {
      const calculateDistance = (x: number, y: number) => {
        if (!bubbleRef.current) return Number.MAX_VALUE;
        const bubble = bubbleRef.current.getBoundingClientRect();
        const centerX = bubble.left + bubble.width / 2;
        const centerY = bubble.top + bubble.height / 2;
        return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      };

      const calculateAngle = (x: number, y: number) => {
        if (!bubbleRef.current) return 0;
        const bubble = bubbleRef.current.getBoundingClientRect();
        const centerX = bubble.left + bubble.width / 2;
        const centerY = bubble.top + bubble.height / 2;
        return (Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 450) % 360; // Normalize to 0-360
      };

      const distance = calculateDistance(event.clientX, event.clientY);
      if (distance >= 200 && distance <= 500) {
        const angle = calculateAngle(event.clientX, event.clientY);
        if (angle >= 337.5 || angle < 22.5) setCurrentPhoto(photos.up);
        else if (angle >= 22.5 && angle < 67.5) setCurrentPhoto(photos['left-up']);
        else if (angle >= 67.5 && angle < 112.5) setCurrentPhoto(photos.left);
        else if (angle >= 112.5 && angle < 157.5) setCurrentPhoto(photos['left-down']);
        else if (angle >= 157.5 && angle < 202.5) setCurrentPhoto(photos.down);
        else if (angle >= 202.5 && angle < 247.5) setCurrentPhoto(photos['right-down']);
        else if (angle >= 247.5 && angle < 292.5) setCurrentPhoto(photos.right);
        else setCurrentPhoto(photos['right-up']);
      } else {
        setCurrentPhoto(photos.normal); // Reset when out of range
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [photos, isClient]);

  return (
    <div
      ref={bubbleRef}
      className="relative flex justify-center items-center bg-purple
       transition-transform duration-1000 ease-in-out hover:scale-150 animate-bubble-pulse
       overflow-hidden w-64 h-64 md:w-72 md:h-72 rounded-lg"
    >
      <Image
        src={currentPhoto}
        alt="Photo"
        layout="fill"
        objectFit="cover"
        className="grayscale"
      />
    </div>
  );
};
