import React from 'react'
import srce from '../../Assets/Icons/srce.png'
import cart from '../../Assets/Icons/navbarcart.png'


function SingleProduct({item}) {
  return (
    <div className='flex justify-center items-center flex-col border-2 rounded-3xl bg-[#fff] pb-6'>
       
      <img className='object-cover w-80 h-80 rounded-t-3xl' src={item.thumbnail} alt="" />
      <div className='text-center'>
        <p className='text-[#208a81]'>{item.category}</p>
        <p className='text-[18px] font-semibold'>{item.title}</p>
        <p className='text-[20px]'>{item.price}$</p>
      </div>

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
  )
}

export default SingleProduct
