import React from 'react'
import cart from '../../Assets/Icons/navbarcart.png'
import search from '../../Assets/Icons/search.png'
import user from '../../Assets/Icons/user.png'
import bag from '../../Assets/Icons/bag.png'



function HeaderBotBar() {
  return (
    <div className='w-full bg-[#fff] py-6'>
        <div className='container mx-auto flex justify-center items-center'>


            <div className='flex justify-center gap-40 items-center'>

                <div className='flex gap-8'>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Cart</p>
                            <p className='font-semibold'>Cart value: 0</p>
                        </div>
                        <div className='bg-[#F8F8F8] border-2 p-3 rounded-[50px]'>
                            <img className=' w-8' src={cart} alt="" />
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <p>User</p>
                            <p className='font-semibold'>Go to profile</p>
                        </div>
                        <div className='bg-[#F8F8F8] border-2 p-3 rounded-[50px]'>
                            <img className=' w-8' src={user} alt="" />
                        </div>
                    </div>
                </div>
              


              

                <div className='border-2 py-1 px-3'>
                    <div className='flex justify-center items-center gap-3'>
                        <img className='w-8' src={search} alt="" />
                    <input type='text' className='w-[400px] outline-none' placeholder='Search . . .'/>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center items-center'>
                        <p className='font-semibold'>Go to products</p>
                        <img className='w-12' src={bag} alt="" />
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default HeaderBotBar