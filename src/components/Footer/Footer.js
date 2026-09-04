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
                    <p>Service Road, 201 N Central Expy, Richardson, TX 75080.</p>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer