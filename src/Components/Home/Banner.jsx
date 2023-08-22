import React from 'react'
import banner from '../../Assets/HomePage/bannerContainer.png'
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <div className='w-full mt-20'>
      <div className='relative flex justify-center items-center'>
            <img className='w-full object-contain' src={banner} alt="banner" />
            <div className='absolute top-44 right-56 flex justify-center items-end flex-col text-[#fff] text-end space-y-5'>
                <p className='text-[44px] font-bold'>Best products of 2023</p>
                <p>The store provides you with all the electronics or home furnishings you need<br/> in addition to the best discounts on products.</p>
                <Link>
                  <p className='bg-[#62D0B6] py-4 px-9 text-[18px]'>Find out more</p>
               </Link>
            </div>
      </div>
    </div>
  )
}

export default Banner
