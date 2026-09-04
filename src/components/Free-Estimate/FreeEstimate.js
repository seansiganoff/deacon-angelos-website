import React from 'react'
import './FreeEstimate.css'

const FreeEstimate = () => {
  return (
    <div>
        <div className='quick-quote-container'>
            <div className='quick-quote-banner'>SETUP A FREE ESTIMATE</div>
            
            <h4>To setup a free estimate, please call or text. It only takes a few minutes!</h4><br /><br />
            
            <a href="tel:972-799-6031"><img className="my-icons" src={require("../../images/phone-icon.png")} alt='Phone icon'/></a>

            <a href="sms:972-799-6031"><img className="my-icons" src={require("../../images/text-icon.png")} alt='SMS message icon'/></a>
            
            
              
              
            {/* <h4>Remember, our work comes with a 100% satisfaction guarantee and a Lifetime Warranty.</h4><Link to={'/lifetime-warranty'}><button className="guaranteeBtn">CLICK HERE TO LEARN MORE!</button></Link> */}
  
        </div>
    </div>
  )
}

export default FreeEstimate