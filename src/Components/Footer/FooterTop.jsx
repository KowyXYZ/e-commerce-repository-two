import React from 'react'
import ios from '../../Assets/Icons/apple.png'
import android from '../../Assets/Icons/android.png'
import mail from '../../Assets/Icons/mail.png'

function FooterTop() {
  return (
    <div className='w-full bg-[#d6d6d6] mt-12 py-6'>
        <div className='container mx-auto flex justify-between items-center'>


            <div className='flex flex-col justify-center items-start space-y-2'>
                <p className='font-semibold text-[20px]'>Mobile apps</p>
                <div className='flex justify-center items-center gap-5'>
                    <img src={ios} alt="ios icon" />
                    <img src={android} alt="android icon" />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='text-[20px] font-semibold'>You can unsubscribe at any moment</p>
                <div className='flex gap-3'>
                    <button className='bg-[#62D0B6] text-[#fff] text-[18px] py-2 px-4'>Send</button>
                    <input className='border-2 h-[40px] w-[400px] text-[18px] p-2' type="text" placeholder='Enter e-mail'/>
                </div>
            </div>

            <div className='flex flex-row justify-center items-center space-y-2'>
                <div>
                    <p className='text-[20px] font-semibold'>Subscribe to the newsletter</p>
                    <p className='text-[18px]'>Join now and get 10% off your next purchase!</p>
                </div>
                <img src={mail} alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default FooterTop
