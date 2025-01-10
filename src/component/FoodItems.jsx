import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const handleToast=(name)=>toast.success(`${name} added`)
  const category=useSelector((state)=>state.category.category);

  const search=useSelector((state)=>state.search.search)
 
  

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>

    <div className='flex flex-wrap gap-10 mx-6 my-10 justify-center items-center lg:justify-start'>
    
    
   {
    FoodData.filter((food)=>{
        
      if(category==="All"){
        return food.name.toLowerCase().includes(search.toLowerCase())
      }
      else{
       return  category===food.category && 
        food.name.toLowerCase().includes(search.toLowerCase())
      }
    }).map((food)=>(
      <FoodCard key={food.id} price={food.price} rating={food.rating} 
      description={food.desc} name={food.name} img={food.img} id={food.id} 
     handleToast={handleToast} />             
    ))
   }

      {/* {
        FoodData.map((food)=>{
           return <FoodCard key={food.id} price={food.price} rating={food.rating} 
           description={food.desc} name={food.name} img={food.img} id={food.id} 
          handleToast={handleToast} />
        })
      } */}
    
    </div></>
  )
}

export default FoodItems