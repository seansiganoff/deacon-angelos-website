import React from 'react'
import './GoogleReviews.css';

const GoogleReviews = ({close}) => {
  return (
    <div className='google-reviews-container'>
      <img style={{width: '300px'}} src={require('../../images/Google-Reviews-benny.jpg')} alt='reviews' />
      <h2>Check Out What Our Costumers Are Saying!</h2>
      <div className='google-reviews'>
        <div className='google-reviews-text'>
          <h4>John Rundall</h4>
          <img src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
          <p>Awesome work and service with a quick turnaround!</p>
        </div>
        <div className='google-reviews-text'>
          <h4>Vishal Kumar</h4>
          <img src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
          <p>I am extremely impressed with the quality of the collision repair on my Honda Pilot. 
            From start to finish, the team handled everything with care and professionalism. 
            The paint matches perfectly, all panels are aligned, and the car is recalibrated properly. 
            My Pilot looks brand-new again and drives smoothly. 
            Excellent workmanship and customer service — I highly recommend this shop!</p>
        </div>
        <div className='google-reviews-text'>
          <h4>Keegan Edwards</h4>
          <img src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
          <p>This place is awesome! 
            The people are very nice and prices are as well! 
            My car looks brand new again! I am completely satisfied with the service and the experience was outstanding! 
            I would 100% recommend!</p>
        </div>
      </div>
      <a href='https://share.google/Zkp4U8Tt9hkqTCjQm'><button className='google-click-for-more-btn'>Click Here To See More Reviews!</button></a>
    </div>
  )


}

export default GoogleReviews