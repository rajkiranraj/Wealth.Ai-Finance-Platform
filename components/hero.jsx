"use client"
import Link from 'next/link';
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
  return (
    <div className='pb-20 px-4 pt-40'>
     <div className='mx-auto container text-center'>
      <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'> Manage Your Finances<br />With the Power of AI</h1>
      <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
      </p>
      <div className='flex justify-center space-x-4'>
        <Link href='/dashboard'>
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
        <Button size="lg" variant='outline' className="px-8">
          Watch Demo
        </Button>
      </div>
      <div className='hero-image-wrapper'>
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