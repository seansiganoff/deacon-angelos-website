import React from 'react';
import './About.css';

const About = () => {
    

   


  return (
    <div>
        <div className="about">
          
            <div  className="about-us-text-container">
              <h2 style={{color: 'red'}}>Our Commitment</h2><br /><br />
                <p>
                   At Adjustable Auto Body, we’re committed to providing high-quality collision repairs at competitive prices, without compromising on workmanship or customer service. 
                   We offer free towing to make the repair process as convenient as possible, and we stand behind our work with guaranteed results. 
                   Our experienced team follows the best practices and industry standards to ensure every vehicle is repaired safely, professionally, and with attention to detail. 
                   From minor damage to major collision repairs, you can count on Adjustable Auto Body to get you back on the road with confidence.

                </p>
            </div>

            <div className='about-why-us'>
              <h2>WHY US?</h2>
              <br /><br />
              
              <ul>
                <li className='about-list-items'><h3>Certified Technicians</h3></li>
                <li className='about-list-items'><h3>We accept all insurance companies</h3></li>
                <li className='about-list-items'><h3>24-7 Towing Service Available</h3></li>
                <li className='about-list-items'><h3>Free Pickup-and Drop off service</h3></li>
                <li className='about-list-items'><h3>Discounts on rental cars</h3></li>
                
              </ul>
              

              
              
            </div>

            
        </div>
    </div>
  )
}

export default About