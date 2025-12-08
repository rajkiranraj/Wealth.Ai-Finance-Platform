import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='pb-20 px-4 pt-40'>
     <div className='mx-auto container text-center'>
      <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Manage Your Finances <br />With Intelligence</h1>
      <p>An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
      </p>
      <div>
        <Link href='/dashboard'>
        <Button size="lg" className="px-8">
          Get Started
        </Button>
        <Button size="lg" variant='outline'className="px-8">
          Watch Demo
        </Button>
        </Link>
      </div>
      <div>
        <div>
       <Image priority src="/banner.png" alt="Banner" width={1600} height={1066} className="rounded-3xl w-full h-auto mx-auto" sizes="(max-width: 768px) 100vw,(max-width: 1200px) 100vw,100vw"/>
        </div>
      </div>
     </div>
    </div>
  );
};

export default HeroSection;