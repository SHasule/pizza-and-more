import React from 'react'
import Navbar from '../component/Navbar'
import CategoryMenu from '../component/CategoryMenu'
import FoodItems from '../component/FoodItems'
import Card from '../component/Card'

const Home = () => {
  return (
   <>
    <Navbar/>
    <CategoryMenu />
    <FoodItems />
    <Card />
   </>
  )
}

export default Home