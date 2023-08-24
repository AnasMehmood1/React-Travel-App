import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
const About = () => {
  return (
    <>
   <Navbar/>   
     <Hero
      cName="hero-mid"
      heroImg = "/image/img_2.jpg"
      title = "About"
      ur = "/"
     
     />
        <Trip/>
     <Footer/>
    </>
  )
}

export default About
