import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Courses from '../components/Courses'
import Instructors from '../components/Instructors'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Courses/>
      <Instructors/>
      <Testimonials/>
      <FAQ/>
    </div>
  )
}

export default Home
