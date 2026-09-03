import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-overlay" id="contact-us">
                <div className="contact-us">
                   <h3 className='theme-color'>PHONE</h3>
                     <a href="tel:972-799-6031">972-799-6031</a>
                   </div>
                <div className="contact-us">
                    <h3 className='theme-color'>HOURS</h3>
                    <p>Monday - Friday: 9AM - 5PM.<br />Saturday: 10AM - 3PM.<br />Sunday: Closed.</p>
                </div>
                <div className="contact-us">
                    <h3 className='theme-color'>ADDRESS</h3>
                    <p>418 Power House Dr, McKinney, TX 75071.</p>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer