"use client"
import GradientText from './ui/GradientText'
import Link from 'next/link';
import BlurText from "./ui/BlurText";
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
  const imageref = useRef();
  useEffect(()=>{
    const imageelement = imageref.current;
    const handleScroll = ()=>{
      const scrollposition = window.scrollY;
      const screenthreshold = 100;
      if(scrollposition>screenthreshold){
        imageelement.classList.add("scrolled");
      }
      else{
        imageelement.classList.remove("scrolled");
      }
    }; 
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[])
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div className='pb-20 px-4 pt-40'>
      <div className='mx-auto container text-center'>
        <h1 className='font-extrabold leading-tight pb-6'>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="block text-5xl md:text-8xl lg:text-[105px] mb-4 leading-[1.3] "
          >
            Manage Your Finances
          </GradientText>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="block text-5xl md:text-8xl lg:text-[105px] mt-2"
          >
            With the Power of AI
          </GradientText>
        </h1>
        <BlurText
          text="An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights."
          delay={80}
          animateBy="words"
          direction="top"
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          onAnimationComplete={handleAnimationComplete}
        />
        <div className='flex justify-center space-x-6 mt-4'>
          <Link href='/dashboard'>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href='/demo'>
            <Button size="lg" variant='outline' className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className='hero-image-wrapper mt-10'>
          <Image 
            ref={imageref}
            priority 
            src="/banner.png" 
            alt="Banner" 
            width={1600} 
            height={1066} 
            className="hero-image rounded-3xl w-full h-auto mx-auto" 
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 100vw,100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;