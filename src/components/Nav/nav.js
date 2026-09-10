import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';



const Nav = () => {







  return (
    
  <div>
    <div className="container">
    <div className='nav-container'>
      <Link to="/"><div className='nav-business-name'><img className='nav-logo' src={require('../../images/angelos-company-logo.png')} alt='logo'/></div></Link>
        
        <div className='nav-number'>
          <Link to="/"><div className='nav-links'>HOME</div></Link> 
            <Link to="/free-estimate"><div className='nav-links'>FREE ESTIMATE</div></Link>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Nav