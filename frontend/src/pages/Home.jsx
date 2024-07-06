import React from 'react'
import Slider from '../components/Slider'
import Featured from '../components/Featured'
import Poster from '../components/Poster'
import '../index.css'
const Home = () => {
 
  return (
    <div className='full1'>
    <div className='bg'>
      <Slider className="slide"/>
      <div className='f1'>
      
      <Featured type="Featured" />
      </div>
      <Poster/>
      <div className='f1'>
      <Featured type="Trending" />
      </div>
    </div>
    </div>
  
    
  )

}

export default Home
