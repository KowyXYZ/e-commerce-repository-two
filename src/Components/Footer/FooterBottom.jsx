import React from 'react'
import snap from '../../Assets/Icons/snap.png'
import fb from '../../Assets/Icons/facebook.png'
import ig from '../../Assets/Icons/instagram.png'
import { NavLink } from 'react-router-dom'


function FooterBottom() {
  return (
    <div className='w-full py-6'>
      <div className='container flex-col  sm:flex-row mx-auto flex sm:justify-between sm:items-start items-center justify-center'>

        <div className='flex flex-col justify-center items-center space-y-2'>
            <p className='font-semibold text-[18px]'>Follow us on</p>
            <div className='flex'>
                <img className='w-10' src={snap} alt="snap icon" />
                <img className='w-10' src={fb} alt="fb icon" />
                <img className='w-10' src={ig} alt="ig icon" />
            </div>
        </div>


        <div className='flex justify-center items-center flex-col text-[gray] space-y-2'>
            <p className='font-semibold text-[18px] text-[#000]'>Connect with us</p>
            <p>+012345678910</p>
            <p>+012345678910</p>
            <p>+012345678910</p>
        </div>


        <div className='flex flex-col justify-center items-center text-[gray] space-y-2'>
            <p className='font-semibold text-[18px] text-[#000]'> Account</p>
            
            <NavLink className='hover:text-[#62D0B6]'>Home</NavLink>
            <NavLink  className='hover:text-[#62D0B6]' >Products</NavLink>
            <NavLink  className='hover:text-[#62D0B6]'>About us</NavLink>
            <NavLink  className='hover:text-[#62D0B6]'>Stores</NavLink>
            <NavLink  className='hover:text-[#62D0B6]'>Contact us</NavLink>
        </div>

        <div className='flex justify-center text-center items-center mt-5 sm:mt-0 flex-col text-[gray] space-y-2'>
            <p className='font-semibold text-[18px] text-[#000]'>About our store</p>
            <p className='w-[300px] sm:w-[500px]'>Basket store is one of the best stores that sell digital products at the best prices and international brands. Shop now and see more designs and enjoy the best offers and discounts</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
