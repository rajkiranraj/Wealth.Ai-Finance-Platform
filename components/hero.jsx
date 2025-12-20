"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GradientText from "@/components/ui/GradientText";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-4 pt-40 pb-20">
      <div className="container mx-auto text-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="
            block text-center font-semibold tracking-tight
            text-6xl sm:text-7xl md:text-8xl lg:text-8xl
            leading-[1.08] will-change-transform overflow-visible
          "
        >
          Where Intelligent Accounting
          <br className="hidden sm:block" />
          Meets Financial Clarity
        </GradientText>
        <br />
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl lg:text-lg text-gray-600">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="#">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="mt-5 hero-image-wrapper md:mt-0">
          <div
            ref={imageRef}
            className="mx-auto overflow-hidden border shadow-2xl rounded-3xl hero-image"
          >
            <Image
              src="/banner.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              priority
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
