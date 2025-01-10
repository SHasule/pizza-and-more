import React from 'react'
import { FaPlus } from "react-icons/fa6"
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slice/CartSlice';
import { incrementQty } from '../redux/slice/CartSlice';
import { decrementQty } from '../redux/slice/CartSlice';
// import { toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
const ItemCard = ({price,name,id,img,qty}) => {
  const dispatch=useDispatch()
  
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-6'>
      <RiDeleteBin5Fill  
      className='absolute hover:text-red-500 right-7 cursor-pointer text-gray-700'
      onClick={()=>{dispatch(removeFromCart({id,name,img,qty,price}))
      toast.error(`${name} removed!`, {
        icon: '👋',
      });}}
      />

          <img src={img} alt="" 
          className='w-[50px] h-[50px]' />
    
       <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
                 <div className='flex justify-between'>
                    <span className='text-green-500 font-bold'>₹{price}</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7'>

                    <FaPlus  onClick={()=> dispatch(incrementQty({id}))}
                    className='border border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                    <span>{qty}</span>
                    <FaMinus  onClick={()=> qty>1? dispatch(decrementQty({id})): (qty=0)}
                      className='border border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                    </div>
                </div>
 
        </div>
    </div>
  )
}

export default ItemCard