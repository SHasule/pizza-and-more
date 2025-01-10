
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({element}) => {
  const CartItem=useSelector((state)=>state.cart.cart)
  return CartItem.length >0 ? element : <Navigate to="/"/>
}

export default ProtectedRoute