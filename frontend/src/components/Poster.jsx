import React from 'react'
import './css/Poster.css'
import banner from "../assets/banner.jpg"

const Poster = () => {
  return (
    <div className='Poster'>
      <img className="banner" src={banner}/>
    </div>
  )
}

export default Poster
