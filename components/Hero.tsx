"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.getElementById('background-image');
      if (bg) {
        const scrollValue = window.scrollY / 2;
        bg.style.transform = `translateY(${scrollValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        id="background-image"
        className="absolute inset-0 w-full h-full z-0"
        style={{ transition: 'transform 0.3s ease' }}
      >
        <Image
          src="/final.webp" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.h1
          className="text-6xl font-bold text-center sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Hey, I&apos;m Bijay Devkota
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-center sm:text-xl lg:text-2xl max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          className="flex mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
        >
          <a
            href="#projects"
            className="px-6 py-3 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Images */}
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/bj1.jpg" 
            alt="Floating Decor"
            layout="responsive"
            width={128}
            height={128}
             className='rounded-full'
          />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        >
          <Image
            src="/bj.jpg" 
            alt="Floating Decor"
            layout="responsive"
            width={128}
            height={128}
            className='rounded-full'
          />
        </motion.div>
      </div>
    </section>
  );
}
