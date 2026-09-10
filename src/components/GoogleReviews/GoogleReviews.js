import React from 'react'
import './GoogleReviews.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';










const GoogleReviews = ({close}) => {


  const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1224, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };




  return (
    <div className='google-reviews-container'>
      <div className='carousel-container'>
        <img className='google-reviews-icon' src={require('../../images/Google-Reviews-benny.jpg')} alt='reviews' />
        <h2>Check Out What Our Costumers Are Saying!</h2>
        <div className='carousel-text'>
        </div>
        <Carousel responsive={responsive}>
            <div className='carousel-card'>
              <div className='carousel-image-container'>
                <div className="video-wrapper">
                  <h3 >Costumer Testimonial</h3><br />
                  <video controls muted poster={require("../../images/angelos-screen-shot.png")}>
                  <source className="video" src={require("../../images/angelos-videos.mp4")} type="video/mp4" />
                  </video>
                </div>
              </div>  
            </div>
            <div className='carousel-card'>
              <div className='carousel-image-container'>
                <div className='google-reviews-text'>
                  <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-1.png')} alt='costumers 1' />
                  <h4>London Williams</h4>
                  <img style={{width: '130px'}} src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
                  <p>I was referred by a friend to adjustable auto body repair. 
                    The insurance company was giving me a hard time. All honesty, they were fast and efficient even helped me with having my vehicle towed into the shop after hours. 
                    Great customer service, a true reliable body shop that you can depend on, always kept me updated and informed with every single process highly recommend to all friends and family if you’re looking to get your vehicle fixed, this is definitely the body shop. 
                    They went over and beyond making sure my vehicle doesn’t get totaled as well. 
                    Thanks to Angelo and his team adjustable auto body repair. Did a fantastic job.</p>
                </div>
              </div>
            </div>
          
            <div className='carousel-card'>
              <div className='carousel-image-container'>
                <div className='google-reviews-text'>
                  <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-2.png')} alt='costumers 2' />
                  <h4>Victoria Slosted</h4>
                  <img style={{width: '130px'}} src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
                  <p>Angelo and his team went above and beyond to help me get my car fixed! 
                    I had been burned in the past with untrustworthy auto shops, especially as a female, but he made sure to fix it quick, waived my deductible, and sent an Uber to pick me up!! 
                    He was quick on communication and I am so glad I found this place!! 
                    Worked with my insurance too!! So pleased with the finished product; looks as good as new!!!</p>
                </div>
              </div>
            </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <div className='google-reviews-text'>
                <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-3.png')} alt='costumers 3' />
                <h4>Todd Fouse</h4>
                <img style={{width: '130px'}} src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
                <p>We've been working with this body shop for quite some time. My wife got her vehicle fixed last year. 
                  They did such a great job that we brought our other vehicle in to get repaired as well.
                  Highly recommended great service fast and efficient!</p>
              </div>
            </div> 
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <div className='google-reviews-text'>
                <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-4.png')} alt='costumers 3' />
                <h4>Lawrence Joseph</h4>
                <img style={{width: '130px'}} src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />
<p>I came to this body shop to get my vehicle repaired and I have to say they did a Fantastic job. 
I went to two other Auto Shops and after getting an estimate from Adjustable Auto Body Repair, they gave me a great deal , Highly recommended if you’re looking to get your vehicle fixed in the area or if you’re trying to find a reliable and good auto body repair shop . 
You can definitely count on them. I know I did and they did not Disappoint, They’re not just reliable. They’re dependable great honest work and pricing. 
They truly deserve this review 5 Stars complete class all the way Thank you.
                </p>
              </div>
            </div> 
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <div className='google-reviews-text'>
                <img style={{width: '60px'}} src={require('../../images/google-reviews-costumers-img-5.png')} alt='costumers 3' />
                <h4>Addis Ababa</h4>
                <img style={{width: '130px'}} src={require('../../images/5-star-new-2.png')} alt='star' /><br /><br />

                <p>Came across adjustable auto body repair. They were super sensitive to my needs on getting my vehicle back up and running. 
                  The reviews speak for themselves. They did a fantastic job on repairing my Honda. They have definitely gained a customer for life. 
                  Highly recommended.
5 five stars!</p>
              </div>
            </div> 
          </div>
          
              
            
        </Carousel>
      </div>







      
      <br /><br />
      <a href='https://share.google/Zkp4U8Tt9hkqTCjQm'><button className='google-click-for-more-btn'>Click Here To See More Reviews!</button></a>
    </div>
  )


}

export default GoogleReviews