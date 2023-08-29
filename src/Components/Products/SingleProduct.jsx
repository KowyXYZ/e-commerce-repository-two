import React from 'react'
import srce from '../../Assets/Icons/srce.png'
import cart from '../../Assets/Icons/navbarcart.png'
import { useSelector } from 'react-redux'



function SingleProduct({item}) {


  const { status } = useSelector( (state) => state.styling)

  return (
    <div>
      {status === 'list' ? <div className='flex gap-5 w-full justify-end text-center items-center border-2 p-4 py-2 pb-5 drop-shadow-xl rounded-3xl space-y-2'>
        <div className='flex-col'>
          <p>In stock: {item.stock}</p>
          <p className='w-[200px]'>{item.title}</p>
          <p>{}</p>
          <div className='flex gap-5 mt-4'>
            <div className='border-2 p-2'>
                <img className='w-8' src={srce} alt="" />
            </div>

            <div className='flex justify-center items-center border-2 p-2'>
                <p>Add to cart</p>
                <img className='w-8' src={cart} alt="" />
            </div>
        
      </div>
        </div>
        <img className='w-64 h-64 object-cover rounded-3xl' src={item.thumbnail} alt="" />
      </div> : 
      
      <div className='flex-col flex justify-center text-center items-center border-2 p-4 py-2 pb-5  drop-shadow-xl  rounded-3xl space-y-2'>
      <p>In stock: {item.stock}</p>
      <img className='w-64 h-64 object-cover rounded-3xl' src={item.thumbnail} alt="" />
      <p className='w-[200px]'>{item.title}</p>
      <p>{item.price}$</p>

      <div className='flex gap-5 mt-4'>
            <div className='border-2 p-2'>
                <img className='w-8' src={srce} alt="" />
            </div>

            <div className='flex justify-center items-center border-2 p-2'>
                <p>Add to cart</p>
                <img className='w-8' src={cart} alt="" />
            </div>
        
      </div>
      </div>}
     
    </div>
    
  )
}

export default SingleProduct
