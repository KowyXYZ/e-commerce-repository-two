import React from 'react'
import HeaderTopBar from './HeaderTopBar'
import HeaderBotBar from './HeaderBotBar'

function HeaderMain() {
  return (
    <div className='mx-12 flex flex-row-reverse sm:flex-col justify-between items-center border-b-2 mb-2'>
        <HeaderTopBar/>
        <HeaderBotBar/>
    </div>
  )
}

export default HeaderMain