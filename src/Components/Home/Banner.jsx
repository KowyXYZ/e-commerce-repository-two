import React from 'react'
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <div className='w-full mt-20 '>
      <div className='bg-hero-pattern py-12 bg-no-repeat object-cover bg-center   flex justify-center items-center'>
         
            <div className='flex justify-center items-center  flex-col text-[#fff] text-center space-y-5'>
                <p className='text-[24px] w-[300px] sm:text-[44px] font-bold'>Best products of 2023</p>
                <p>The store provides you with all the electronics or home furnishings you need<br/> in addition to the best discounts on products.</p>
          
                  <p className='bg-[#62D0B6] py-4 px-9 text-[18px]'>Find out more</p>
            
            </div>
      </div>
    </div>
  )
}

export default Banner
