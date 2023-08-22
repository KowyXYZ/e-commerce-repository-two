import React from 'react'
import heroimg from '../../Assets/HomePage/Heroimage.png'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='w-full'>
      <div className='relative'>
        <img className='w-full object-contain' src={heroimg} alt="" />

        <div className='absolute top-44 right-[450px] text-[#fff] justify-center items-center flex flex-col space-y-4 text-center'>
          <p className='text-[56px] font-bold'>Best products of 2023</p>
          <p>The basket store provides you with all the electronics or home furnishings that you need in addition to the best discounts on products.<br/> Shop now and enjoy all discounts on products.</p>
          <Link>
           <p className='bg-[#62D0B6] py-4 px-9 text-[18px]'>Find out more</p>
          </Link>
        </div>

      </div>

    
    </div>
  )
}

export default HeroSection