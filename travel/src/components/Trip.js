import React from 'react'
import "./Tripstyele.css"
import TripData from './TripData'
const Trip = () => {
  return (
    <div className="trip"  >
        <h1>Recent Trip</h1>
        <p>You can discover unique destination using Google Map

           
        </p>
        <div className="tripcard">
            <TripData
             image = "/image/10.jpg"
             heading = "Trip o Pakistan"
             text = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam excepturi veniam beatae aliquam quos nemo eius adipisci harum cumque sequi unde autem odio culpa qui dolore minima, cupiditate obcaecati tempore!"
            />
            <TripData
             image = "/image/5.jpg"
             heading = "Trip to France"
             text = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam excepturi veniam beatae aliquam quos nemo eius adipisci harum cumque sequi unde autem odio culpa qui dolore minima, cupiditate obcaecati tempore!"
            />
            <TripData
             image = "/image/6.jpg"
             heading = "Trip o Itly"
             text = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam excepturi veniam beatae aliquam quos nemo eius adipisci harum cumque sequi unde autem odio culpa qui dolore minima, cupiditate obcaecati tempore!"
            />
        </div>
    </div>
  )

}

export default Trip
