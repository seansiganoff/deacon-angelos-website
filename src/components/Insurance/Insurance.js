import React from 'react'
import './Insurance.css';

const Insurance = () => {

   



  return (
    <div className='insurance'>
        <div className="vehicle-icons">
          <div className="vehicle-icons-inner-div-top" >
                  <img  src={require('../../images/tesla.png')} alt='Tesla logo'/>
                  <img  src={require('../../images/mercedes-icon.png')} alt='Mercedes logo'/>
                  <img  src={require('../../images/audi-icon.gif')} alt='Audi logo'/>
                  <img  src={require('../../images/porsche-icon.png')} alt='Porsche logo'/>
                  <img  src={require('../../images/bmw-icon.png')} alt='BMW logo'/>
                  <img  src={require('../../images/caddilic-icon.jpg')} alt='Cadillac logo'/>
          </div>
        </div>
        <div className='insurance-container'>
            <div className='insurance-header'>
                <div className='span-div'>
                    <img style={{width: '12px', height:'14px', marginRight: '3px', marginBottom: '15px'}} src={require('../../images/checkmark.png')} alt='car'/><h6 style={{color:'rgb(26, 93, 180)'}}> WE MAKE IT EASY</h6>
                    
                </div>
                <p style={{fontSize: 'x-small', color: 'green', paddingLeft: '2px'}}>WE ACCEPT ALL INSURANCE COMPANIES</p><br />
                <h2 style={{color: 'black'}}>Insurance Claim</h2>
                <h2 style={{color:'rgb(26, 93, 180)'}}>Assistance</h2>
            </div>
            <br /><br />

            <p>At Adjustable Auto Body, we understand that the insurance claim process can be fustrating, so we focus on making it a stress-free process for our customers. 
                We work directly with insurance companies to help manage your claim and coordinate the repairs from start to finish, so you don't have to. 
                We offer deductible assistance: We will waive $1,000 of your deductible, without sacrificing quality so you can get your vehicle repaired with less out-of-pocket expense. 
                <br />Is your vehicle not undrivable? We offer 24-7 towing for all collision claims!</p>
              <br />
              <div style={{color: 'green'}}>FOR MORE INFORMATION REGARDING OUR $0 DEDUCTIBLE PROGRAM, CALL NOW AND ASK HOW!</div>
            {/* <div className='insurance-icon-div'>
                <img className='insurance-icons' src={require('../../images/allstate-logo.png')} alt='allstate logo' />
                <img className='insurance-icons' src={require('../../images/GEICO-logo.png')} alt='geico logo' />
                <img className='insurance-icons' src={require('../../images/Liberty-Mutual-Logo.png')} alt='liberty mutual logo' />
                <img className='insurance-icons' src={require('../../images/state-farm.png')} alt='state farm logo' />
                <img className='insurance-icons' src={require('../../images/progressive.jpg')} alt='progressive logo' />
                <img className='insurance-icons' src={require('../../images/usaa.png')} alt='usaa logo' />
                <img className='insurance-icons' src={require('../../images/Turo-Logo.png')} alt='usaa logo' />
            </div> */}
        </div>
        <div className="vehicle-icons">
          <div className="vehicle-icons-inner-div-bottom" >
                  <img src={require('../../images/toyota-icon.jpg')} alt='Toyota logo'/>
                  <img src={require('../../images/lexus-icon.png')} alt='Lexus logo'/>
                  <img src={require('../../images/jaguar-icon.jpg')} alt='Jaquar logo'/>
                  <img src={require('../../images/chevy-icon.jpg')} alt='Infiniti logo'/>
                  <img src={require('../../images/honda-icon.png')} alt='Honda logo'/>
                  <img src={require('../../images/ford-icon.png')} alt='Lamborghini logo'/>
          </div>
        
        <br />
      </div>
    </div>
  )
}

export default Insurance