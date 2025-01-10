import React, { useState } from 'react'
import FoodData from "../Data/FoodData"
import { useDispatch } from 'react-redux';
import { SetCategory } from '../redux/slice/CategorySlice';
import { useSelector } from 'react-redux';

const CategoryMenu = () => {
   
  const[categories,setCategories]=useState([]);
   
  const listUniqeCategories =()=>{
     const uniqeCategories=[
         ...new Set(FoodData.map((food)=>food.category))
    ]
    setCategories(uniqeCategories)
    console.log(uniqeCategories);
    
  }

  useState(()=>{
    listUniqeCategories()
  },[])

const dispatch=useDispatch()
const selectedCategory=useSelector((state)=>state.category.category)

  return (
    <div className='ml-6 '>
      <h3 className='font-semibold'>Find the best food</h3>

      <div className='my-5  flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>

      <button 
              onClick={()=>dispatch(SetCategory("All"))}
              className={`px-3 py-2 text-center bg-green-200 font-bold rounded-lg 
              hover:bg-green-500 hover:text-white ${selectedCategory==='All' && "bg-green-500 text-white"}`}>All</button>

        {
          categories.map((category,index)=>{
            return (
              <button key={index} 
              onClick={()=>dispatch(SetCategory(category))}
              className={`px-3 py-2 text-center bg-green-200 font-bold rounded-lg 
              hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white"}`}>{category}</button>
            )
          })
        }
        
        
      </div>
    </div>
  )
}

export default CategoryMenu