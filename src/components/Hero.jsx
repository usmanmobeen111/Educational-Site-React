import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex justify-center items-center pt-16'>
      <div>
        <h1>Learn Programming, Design, and Tech Skills that Shape the Future.</h1>
        <p>Interactive lessons, real projects, and mentors to guide your journey.</p>
        <div>
            <button>Start Learning</button>
            <button>Browse Courses</button>
        </div>
        <div className='bg-primary rounded-full w-1/3'>
            <img src="/images/hero.png" className='w-full bg-primary rounded-full' alt="Hero Image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
