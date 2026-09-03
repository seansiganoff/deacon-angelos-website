import React from 'react'
import './Insurance.css';

const Insurance = () => {
  return (
    <div className='insurance'>
        <div className='insurance-container'>
            <div className='insurance-header'>
                <div className='span-div'>
                    <img style={{width: '12px', height:'14px', marginRight: '3px', marginBottom: '15px'}} src={require('../../images/checkmark.png')} /><h6 style={{color:'rgb(26, 93, 180)'}}> WE MAKE IT EASY</h6>
                </div>
                <h2 style={{color: 'black'}}>Insurance Claim</h2>
                <h2 style={{color:'rgb(26, 93, 180)'}}>Assistance</h2>
            </div>
            <br /><br />

            <p>At Adjustable Auto Body, we understand that the insurance claim process can be fustrating, so we focus on making it a stress-free process for our customers. 
                We work directly with insurance companies to help manage your claim and coordinate the repairs from start to finish, so you don't have to. 
                We also offer deductible assistance. We will waive $1,000 of your deductible, without sacrificing quality so you can get your vehicle repaired with less out-of-pocket expense. 
                Our experienced team is committed to quality workmanship, professional service, and getting you safely back on the road.</p>

            <div className='insurance-icon-div'>
                <img className='insurance-icons' src={require('../../images/allstate-logo.png')} alt='allstate logo' />
                <img className='insurance-icons' src={require('../../images/GEICO-logo.png')} alt='geico logo' />
                <img className='insurance-icons' src={require('../../images/Liberty-Mutual-Logo.png')} alt='liberty mutual logo' />
                <img className='insurance-icons' src={require('../../images/state-farm.png')} alt='state farm logo' />
                <img className='insurance-icons' src={require('../../images/progressive.jpg')} alt='progressive logo' />
                <img className='insurance-icons' src={require('../../images/usaa.png')} alt='usaa logo' />
                <img className='insurance-icons' src={require('../../images/Turo-Logo.png')} alt='usaa logo' />
            </div>
        </div>
    </div>
  )
}

export default Insurance