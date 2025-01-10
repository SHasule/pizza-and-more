import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slice/SearchSlice'

const Navbar = () => {
  const dispatch=useDispatch()
  return (
    <>
      <nav className='flex py-3 mx-6 justify-between flex-col lg:flex-row mb-8'>
        <div>
          <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
          <h2 className='text-2xl font-bold'>Pizza's and More </h2>
        </div>

        <div>
          <input type="search" name="search" id=""
         placeholder='Search here'
         autoComplete='off'
         onChange={(e)=>dispatch(setSearch(e.target.value))}
         className='border p-2 border-gray-400 rounded-lg outline-none w-full lg:w-[26vw]' />
        </div>
      </nav>
    </>
  )
}

export default Navbar