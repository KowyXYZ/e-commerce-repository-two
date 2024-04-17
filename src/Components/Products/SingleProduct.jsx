import React from 'react'
import srce from '../../Assets/Icons/srce.png'
import cart from '../../Assets/Icons/navbarcart.png'
import { useDispatch, useSelector } from 'react-redux'
import { Rate } from 'antd';
import Link from 'antd/es/typography/Link';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../Store/sliceCart';
import { addfavList } from '../../Store/sliceAuthReg';


function SingleProduct({item}) {


  const { status } = useSelector( (state) => state.styling)
  // let ratingtext = item.description.slice(0, 30) + '...'
  const dispatch = useDispatch()
 
  const cartHandler = (item) => {
    dispatch(addToCart(item))
  }

  return (

    
    <div className=''>
      {status === 'list' ? 

      // <NavLink to={`/products/product/${item.id}`}>
      <div className='flex flex-col sm:flex-row gap-10 sm:w-[100vh] justify-start text-start items-center border-2  p-4 py-2  drop-shadow-xl rounded-3xl space-y-2'>
          <NavLink to={`/products/product/${item.id}`}>
             <img className='w-64 h-64 object-cover rounded-3xl' src={item.thumbnail} alt="" />
          </NavLink>
        <div className='flex-col space-y-2'>

          <p className='text-[#208a81]'>{item.category}</p>
          <p className='w-[200px] font-semibold'>{item.title}</p>
          <p className='text-[gray] w-[300px]'>{item.description}</p>
          <Rate disabled defaultValue={item.rating} />
          <p className='font-semibold'>{item.price}$</p>
          <div className='flex gap-5 mt-4'>
            <div onClick={() => dispatch(addfavList(item))} className='border-2 p-2 cursor-pointer'>
                <img className='w-8' src={srce} alt="" />
            </div>

            <div  className='flex justify-center items-center border-2 p-2'>
            <button onClick={() => cartHandler(item)}>Add to cart</button>
                <img className='w-8' src={cart} alt="" />
            </div>
        
       </div>
        </div>
       
      </div>
      // </NavLink>
     
      
      : 
      
      // <NavLink to={`/products/product/${item.id}`}>
      <div className='flex-col flex justify-center text-center items-center border-2 p-4 py-2 pb-5  drop-shadow-xl  rounded-3xl space-y-2'>
      <p className='text-[#208a81]'>{item.category}</p>

      <NavLink to={`/products/product/${item.id}`}>
        <img className='w-64 h-64 object-cover rounded-3xl' src={item.thumbnail} alt="" />
      </NavLink>
     
      <p className='w-[250px] font-semibold'>{item.title}</p>
      {/* <p className='text-[gray] text-[14px] w-[150px]'>{ratingtext}</p> */}
      <Rate disabled defaultValue={item.rating} />
      <p className='font-semibold'>{item.price}$</p>

      <div className='flex gap-5 mt-4'>
            <div onClick={() => dispatch(addfavList(item))} className='border-2 p-2 cursor-pointer'>
                <img className='w-8' src={srce} alt="" />
            </div>

            <div  className='flex justify-center items-center border-2 p-2'>
            <button onClick={() => cartHandler(item)}>Add to cart</button>
                <img className='w-8' src={cart} alt="" />
            </div>
        
      </div>
      </div>
      // </NavLink>
    
      }
     
    </div>
    
  )
}

export default SingleProduct
