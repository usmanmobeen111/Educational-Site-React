import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Courses from '../components/Courses'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Courses/>
    </div>
  )
}

export default Home
