import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
      <Trending/>
      <Navbar/>
      <Slider/>
      </div>
  )
}

export default Home