import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactSec from '../components/ContactSec'
const Service = () => {
  return (
    <>
    <Navbar/>   
     <Hero
      cName="hero-mid"
      heroImg = "/image/img_3.jpg"
      title = "Service"
      ur = "/"
     
     />
     <ContactSec/>
     <Footer/>
     </>
  )
}

export default Service
