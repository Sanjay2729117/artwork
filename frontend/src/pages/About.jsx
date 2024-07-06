import React from 'react'
import '../components/css/About.css'
import img from '../assets/logo.webp'
const About = () => {
  return (
    <div className='About'>

      <div className='font2 cen'>ABOUT US</div>
      <div className='bgimg'>ABOUT</div>
      <div className='full'>
        <div className='left'>
          <img src={img}/>
        </div>
        <div className='right'>
        At Heart to Art, we specialize in offering a curated selection of unique and thoughtful gifts.our mission is to provide high-quality, distinctive products that bring joy to both the giver and the receiver, always maintaining our commitment to exceptional customer service and exclusive items. We hope you find the perfect gift with us!
        </div>
      </div>
    </div>
  )
}

export default About
