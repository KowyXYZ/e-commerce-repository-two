import React from 'react'
import smartphone from '../../Assets/HomePage/smartphone.png'
import headphones from '../../Assets/HomePage/headphones.png'

function TwoTopProducts() {
  return (
    <div className='w-full py-12'>
        <div className='flex justify-center items-center container mx-auto gap-10'>

            <div className='relative'>
                <img src={smartphone} alt="" />
                <div className='absolute top-14 left-10 text-end text-[20px]'>
                    <p className=''>Smartphones</p>
                    <p className='font-bold text-[30px]'>Best digital quality</p>
                    <p className='underline'>Find out more</p>
                </div>
            </div>

            <div className='relative'>
                <img src={headphones} alt="" />
                <div className='absolute top-14 left-10 text-end text-[20px]'>
                    <p className=''>Headphones</p>
                    <p className='font-bold text-[30px]'>Best pure sound</p>
                    <p className='underline'>Find out more</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TwoTopProducts