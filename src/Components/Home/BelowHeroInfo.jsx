import React from 'react'
import wallet from '../../Assets/Icons/wallet.png'
import pack from '../../Assets/Icons/package.png'
import delivery from '../../Assets/Icons/delivery.png'



function BelowHeroInfo() {
  return (
    <div className='w-full py-12'>
        <div className=' flex flex-col sm:flex-row justify-center items-center container mx-auto py-4 gap-10'>


            <div className='flex justify-center items-center gap-5 '>
                <div className='text-end'>
                    <p className='font-semibold'>Guaranteed products</p>
                    <p>Secure payments in up to 12 months</p>
                </div>
                
                <div>
                    <img src={wallet} alt="wallet icon" />
                </div>
            </div>

            <p className='text-[33px] text-[lightgray]'>&#9474;</p>

            <div className='flex justify-center items-center gap-5'>
                <div className='text-end'>
                    <p className='font-semibold'>Guaranteed refund</p>
                    <p>Secure refund in up to 12 months</p>
                </div>
                
                <div>
                    <img src={pack} alt="wallet icon" />
                </div>
            </div>

            <p className='text-[33px] text-[lightgray]'>&#9474;</p>

            <div className='flex justify-center items-center gap-5'>
                <div className='text-end'>
                    <p className='font-semibold'>Guaranteed delivery</p>
                    <p>Secure delivery in up to 12 months</p>
                </div>
                
                <div>
                    <img src={delivery} alt="wallet icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BelowHeroInfo