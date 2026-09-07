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
          <Link to="/">HOME</Link>
        </div>
        <div className='nav-number'>
            <Link to="/free-estimate">FREE ESTIMATE</Link>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Nav