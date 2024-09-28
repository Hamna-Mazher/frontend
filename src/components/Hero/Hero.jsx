import React from 'react'
import './Hero.css'
import  bg1 from'../Assets/bg1.gif'
const Hero = () => {
  return (
    // <div className='hero'>
    //     <div className="hero-left"> 
    //         <h2>
    //             SALES OF ATVS AND ALL TERRAIN VEHICLES, ORDER NOW FOR PRE-BOOKING
    //         </h2>
    //     <div className="hero-latest-btn">
    //         <div>
    //             Pre-booking
    //         </div>
    //     </div>
    //     </div>
       
    //     <div className="hero-right">
    //         <img src={bg1} alt="" />
    //     </div>
    // </div>
    <div className="hero">
        <div className="hero-content">
        <h2>SALES OF ATVS AND ALL <br /> TERRAIN VEHICLES, ORDER NOW  <br />FOR PRE-BOOKING</h2>
        <div className="hero-latest-btn">
            <div>
             Pre-booking
            </div>
        </div>
       
       </div>
    </div>
  )
}

export default Hero