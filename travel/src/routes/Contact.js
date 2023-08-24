import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactSec from '../components/ContactSec'
const Contact = () => {
  return (
    <>
    <Navbar/>   
     <Hero
      cName="hero-mid"
      heroImg = "/image/img_4.jpg"
      title = "Contact"
      ur = "/"
     
     />
     <ContactSec/>
     <Footer/>
    </>
  )
}

export default Contact
