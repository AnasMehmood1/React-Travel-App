import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
     <Navbar/>   
     <Hero
      cName="hero"
      heroImg = "/image/img_2.jpg"
      title = "Your Journey Your Story"
      text = "Choose Your Favourite Destination"
      buttontext = "Travel Plan"
      ur = "/"
      btn = "show"
     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
  )
}

export default Home
