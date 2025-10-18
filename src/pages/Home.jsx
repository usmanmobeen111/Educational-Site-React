import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Courses from '../components/Courses'
import Instructors from '../components/Instructors'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Courses/>
      <Instructors/>
    </div>
  )
}

export default Home
