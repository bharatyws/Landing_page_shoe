import React from 'react'

const Hero = () => {
  return (
    <main className='container hero'>
        <div className="hero__content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero__btn">
            <button>Shop Now</button>
            <button className='btn-variant'>Category</button>
        </div>
        <div className="partner">
            <p>Also available on</p>
            <div className="partner__icons">
                <img src="./images/amazon.png" alt="amazon_img" />
                <img src="./images/flipkart.png" alt="flipkart_img" />
            </div>
        </div>
        </div>
        
        <div className="hero__image">
            <img src="./images/shoe_image.png" alt="" />
        </div>
    </main>
  )
}

export default Hero