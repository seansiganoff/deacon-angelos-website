import React from 'react'
import './GoogleReviews.css';

const GoogleReviews = ({close}) => {
  return (
    <div className='google-reviews-container'>
      <img style={{width: '300px'}} src={require('../../images/Google-Reviews-benny.jpg')} alt='reviews' />
      <h2>Check Out What Our Costumers Are Saying!</h2>
      <div className='google-reviews'>
        <div className='google-reviews-text'>
          <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-1.png')} alt='costumers 1' />
          <h4>London Williams</h4>
          <img src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
          <p>I was referred by a friend to adjustable auto body repair. 
            The insurance company was giving me a hard time. All honesty, they were fast and efficient even helped me with having my vehicle towed into the shop after hours. 
            Great customer service, a true reliable body shop that you can depend on, always kept me updated and informed with every single process highly recommend to all friends and family if you’re looking to get your vehicle fixed, this is definitely the body shop. 
            They went over and beyond making sure my vehicle doesn’t get totaled as well. 
            Thanks to Angelo and his team adjustable auto body repair. Did a fantastic job.</p>
        </div>
        <div className='google-reviews-text'>
          <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-2.png')} alt='costumers 2' />
          <h4>Victoria Slosted</h4>
          <img src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
          <p>Angelo and his team went above and beyond to help me get my car fixed! 
            I had been burned in the past with untrustworthy auto shops, especially as a female, but he made sure to fix it quick, waived my deductible, and sent an Uber to pick me up!! 
            He was quick on communication and I am so glad I found this place!! 
            Worked with my insurance too!! So pleased with the finished product; looks as good as new!!!</p>
        </div>
        <div className='google-reviews-text'>
          <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-3.png')} alt='costumers 3' />
          <h4>Todd Fouse</h4>
          <img src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
          <p>We've been working with this body shop for quite some time. My wife got her vehicle fixed last year. 
            They did such a great job that we brought our other vehicle in to get repaired as well.
            Highly recommended great service fast and efficient!</p>
        </div>
      </div>
      <a href='https://share.google/Zkp4U8Tt9hkqTCjQm'><button className='google-click-for-more-btn'>Click Here To See More Reviews!</button></a>
    </div>
  )


}

export default GoogleReviews