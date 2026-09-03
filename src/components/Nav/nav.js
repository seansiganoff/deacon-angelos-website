import React from 'react';
import './nav.css';



const Nav = () => {







  return (
    
  <div>
    <div className="container">
    <div className='nav-container'>
      <div className='nav-business-name'><img className='nav-logo' src={require('../../images/angelos-company-logo.png')} alt='logo'/></div>
        <div className='nav-number'>
            <a href="tel:972-799-6031">CALL NOW <br />972-799-6031</a>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Nav