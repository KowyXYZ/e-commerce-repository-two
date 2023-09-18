import React from 'react'
import srce from '../../Assets/Icons/srce.png'
import cart from '../../Assets/Icons/navbarcart.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Store/sliceCart'
import { addfavList } from '../../Store/sliceAuthReg'


function SingleProduct({item}) {
  const dispatch = useDispatch()

  return (
    <div className='flex justify-center items-center flex-col border-2 rounded-3xl bg-[#fff] pb-6'>
       <Link to={`/products/product/${item.id}`}>
        <img className='object-cover w-80 h-80 rounded-t-3xl' src={item.thumbnail} alt="" />
       </Link>
    
      <div className='text-center'>
        <p className='text-[#208a81]'>{item.category}</p>
        <p className='text-[18px] font-semibold'>{item.title}</p>
        <p className='text-[20px]'>{item.price}$</p>
      </div>

      <div className='flex gap-5 mt-4'>
            <div onClick={() => dispatch(addfavList(item))} className='transition-all ease-in-out delay-100 cursor-pointer border-2 p-2 hover:bg-[#208a81] active:bg-[#208a81c4]'>
                <img className='w-8' src={srce} alt="" />
            </div>

            <div className='flex justify-center items-center border-2 p-2'>
                <p className='cursor-pointer' onClick={() => dispatch(addToCart(item))}>Add to cart</p>
                <img className='w-8' src={cart} alt="" />
            </div>
        
      </div>
    </div>
  )
}

export default SingleProduct
