import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
 const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(() => {
          setLoading(false)
    }, 2000);
  },[])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      {
        loading ? <PropagateLoader  color='#36d7b7'/> : (<>
         <h2 className='text-3xl font-semibold mb-4 text-center'>Order Successful!</h2>
         <p>Your order has been successfully placed</p>
        </>)
      }
  
     
    </div>
  )
}

export default Success