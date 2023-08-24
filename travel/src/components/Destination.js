import React from 'react'
import "./Destinationstyle.css"
const Destination = () => {
  return (
  <div className="destination" >
    <h1>Popular Destination</h1>
    <p>Tour give you the opportunity to see a lot, within a time frame</p>
    <div className="first-des" >
        <div className="des-text">
            <h2>Taal volcano , Batangas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde, obcaecati exercitationem doloremque tenetur, cum soluta natus itaque, saepe ducimus aspernatur. Officia saepe a dolores molestiae expedita repellendus assumenda dolorum nemo, iure quam at totam quaerat itaque doloribus quibusdam beatae.</p>
        </div>
        <div className="image">
            <img src="image/1.jpg" alt="img" />
            <img src="image/2.jpg" alt="img" />
        </div>
    </div>
    <div className="first-des-reverse" >
        <div className="des-text">
            <h2>Swat Kalam , Pakistan</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde, obcaecati exercitationem doloremque tenetur, cum soluta natus itaque, saepe ducimus aspernatur. Officia saepe a dolores molestiae expedita repellendus assumenda dolorum nemo, iure quam at totam quaerat itaque doloribus quibusdam beatae.</p>
        </div>
        <div className="image">
            <img src="image/3.jpg" alt="img" />
            <img src="image/4.jpg" alt="img" />
        </div>
    </div>
 
  </div>
  )
}

export default Destination
