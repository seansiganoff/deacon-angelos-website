import React from 'react'
import './home.css';
import About from '../About/About';
import GoogleReviews from '../GoogleReviews/GoogleReviews';
import Insurance from '../Insurance/Insurance';



// import { motion } from 'framer-motion';

const Home = () => {

  //Animates the vehicle icons when the page loads.
  // const visible = { opacity: 1, x: 0, transition: { duration: 0.4 } };
  //   const itemVariants = {
  //     hidden: { opacity: 0, x: -710 },
  //     visible
  //   };


  

  return (
    
    <div className='header'>
      
        <div className='home-container'>
          <img className='home-background-bmw' src={require('../../images/home-page-background-bmw-zoomed-out.png')}  alt='Audi background' />
          <div className='home-text-top-left'>
              <img className='company-logo' src={require('../../images/angelos-company-logo-transparant.png')} alt='company logo'/><br /><br />
            <p className="home-locations-bottom"><b style={{color: 'white'}}>Address: Service Road, 201 N Central Expy, <br />Richardson, TX 75080.</b></p>

          </div>
          
        </div>

        {<About />}
        {<Insurance />}
        {<GoogleReviews />}
        <iframe title='map' className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134942.44962850615!2d-96.81065258005339!3d32.977470360024164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f2d61b9b6ed%3A0xf2dd319c34c87a26!2sAdjustable%20Auto%20Body%20Repair!5e0!3m2!1sen!2sus!4v1787600018184!5m2!1sen!2sus"></iframe>
    </div>
    
  )
}

export default Home