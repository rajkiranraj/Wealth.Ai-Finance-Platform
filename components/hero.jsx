"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GradientText from "@/components/ui/GradientText";
import Mutebutton from "@/components/ui/Mutebutton";

const HeroSection = () => {
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const videoSrc = useMemo(() => "/herovideo.mp4", []);
  const posterSrc = useMemo(() => "/banner.png", []);

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
    text-[clamp(2.25rem,6vw,5rem)]
    leading-[1.1]
    px-4 sm:px-6
    max-w-[22ch] sm:max-w-[26ch] md:max-w-[32ch]
    mx-auto
    break-words
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
            className="relative mx-auto overflow-hidden border shadow-2xl rounded-3xl hero-image"
          >
            <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
              <video
                ref={videoRef}
                className="w-full h-full rounded-3xl object-cover"
                autoPlay
                loop
                playsInline
                muted={muted}
                preload="metadata"
                poster={posterSrc}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>

            <div className="absolute top-6 right-8 z-10">
              <Mutebutton
                className="text-primary-foreground bg-primary/90 border border-primary/30 rounded-full h-10 w-10 shadow-lg ring-1 ring-primary-foreground/20 backdrop-blur"
                checked={!muted}
                aria-label={muted ? "Unmute video" : "Mute video"}
                onChange={(e) => {
                  const shouldBeUnmuted = e.target.checked;
                  const nextMuted = !shouldBeUnmuted;
                  setMuted(nextMuted);
                  if (videoRef.current) videoRef.current.muted = nextMuted;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
