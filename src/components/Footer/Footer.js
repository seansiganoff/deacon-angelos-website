import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-overlay" id="contact-us">
                <div className="contact-us">
                   <h3 className='theme-color'>CONTACT US</h3>
                     <a href="tel:972-799-6031">CALL: 972-799-6031</a><br /><br />
                     <a href="sms:972-799-6031">TEXT: 972-799-6031</a><br /><br />
                     <a href="mailto:adjustableauto@gmail.com">EMAIL: adjustableauto@gmail.com</a>
                   </div>
                <div className="contact-us">
                    <h3 className='theme-color'>HOURS</h3>
                    <p>Monday - Friday: 9AM - 5PM.<br />Saturday: 10AM - 3PM.<br />Sunday: Closed.</p>
                </div>
                <div className="contact-us">
                    <h3 className='theme-color'>ADDRESS</h3>
                    <Link to="https://maps.app.goo.gl/6zc59e5Yn4oG5STLA">
                        <div className='footer-address'>
                            <img style={{width: '60px'}} src={require('../../images/map-icon.png')} alt='map icon'/>
                            <p>Service Road, 201 N Central Expy, Richardson, TX 75080.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer