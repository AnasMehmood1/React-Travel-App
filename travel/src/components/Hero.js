import React from 'react'
import "./Herostyle.css"
const Hero = (props) => {
  return (
    <>
  <div className={props.cName}>
    <img src={props.heroImg} alt="HeroImg" />
    <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btn}>
         {props.buttontext}
        </a>
    </div>
  </div>
    </>
  )
}

export default Hero
