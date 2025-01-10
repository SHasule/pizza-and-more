import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ItemCard from "./ItemCard";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RiTumblrFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [isActive, setIsActive] = useState(false);
  
  const cartItem=useSelector((state)=>state.cart.cart)
  console.log(cartItem);

  const totalQty=cartItem.reduce((totalQty,item)=>totalQty+item.qty,0);

  const Total=cartItem.reduce((total,item)=>total + item.qty * item.price,0)

  const navigate=useNavigate()
  return (
    <>
      <div className={`fixed right-0 top-0 w-full h-full bg-white lg:w-[20vw] p-5   
        ${isActive ? "translate-x-0":"translate-x-full"} transition-all duration-700 z-50 `}>
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoClose
            className="border  text-gray-800 font-bold cursor-pointer text-xl  
                        hover:text-black hover:bg-red-500"
         onClick={()=>setIsActive(!isActive)} />
        </div>
  {
    cartItem.length>=1 ? cartItem.map((food)=>{
      return (
        <ItemCard key={food.id} id={food.id}
         price={food.price}
        img={food.img} name={food.name} rating={food.rating} 
        qty={food.qty}/>
      )
    }
  ):
    <h2 className="font-bold text-center text-gray-800 text-xl">cart is empty</h2>

  }
        

        <div className="absolute bottom-0 ">
          <h3 className="text-gray-800 ont-semibold">Items: { totalQty} </h3>
          <h3 className="text-gray-800 ont-semibold">Total Amount: {Total}  </h3>
          <hr className="my-2  lg:w-[18vw] w-[90vw]" />

          <button 
          onClick={()=>navigate("/success")} className="bg-green-500 rounded-lg px-3 py-2 font-bold text-white w-[90vw] lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>

      <FaCartShopping
        className={` bg-white p-3 rounded-full text-black text-5xl shadow-md 
 fixed bottom-4 right-4 cursor-pointer  ${totalQty >=1 ? 'animate-bounce':''}  `}
    onClick={()=>setIsActive(!isActive)}  />
    </>
  );
};

export default Card;
