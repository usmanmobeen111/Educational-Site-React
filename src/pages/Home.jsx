import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Courses from '../components/Courses'
import Instructors from '../components/Instructors'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


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
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
