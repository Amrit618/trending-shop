import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
      <Trending/>
      <Navbar/>
      <Slider/>
      <Categories />
      </div>
  )
}

export default Home