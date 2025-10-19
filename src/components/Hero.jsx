import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Learn{' '}
              <span className="text-tertiary">
                Programming
              </span>
              ,{' '}
              <span className="text-tertiary">
                Design
              </span>
              , and{' '}
              <span className="text-tertiary">
                Tech Skills
              </span>{' '}
              that Shape the Future.
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Interactive lessons, real projects, and mentors to guide your journey.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button
                type="button"
                className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Learning
              </button>
              <button
                type="button"
                className="border-2 border-slate-300 text-slate-700 font-semibold py-3 px-8 rounded-full hover:bg-slate-50 transition-all duration-300 transform hover:scale-105"
              >
                Browse Courses
              </button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-radial from-tertiary to-primary rounded-full"></div>
              <img
                src="/images/hero.png"
                className="relative w-full h-auto rounded-full "
                alt="Hero Image - Learning Platform"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
