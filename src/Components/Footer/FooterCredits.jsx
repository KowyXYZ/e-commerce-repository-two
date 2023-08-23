import React from 'react'
import pp from '../../Assets/Icons/paypal.png'
import visa from '../../Assets/Icons/visa.png'
import mc from '../../Assets/Icons/master.png'


function FooterCredits() {
  return (
    <div className='w-full bg-[#1D1F1F] py-6'>
      <div className='container mx-auto flex justify-between items-center text-[#fff]'>
        <div className='flex justify-center items-center gap-5'>
            <img src={pp} alt="pp" />
            <img src={mc} alt="mc" />
            <img src={visa} alt="visa" />
        </div>
        <p>Copyright © 2023 Kowy. All rights reserved</p>
      </div>
    </div>
  )
}

export default FooterCredits
