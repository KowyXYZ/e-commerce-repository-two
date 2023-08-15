import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderTopBar() {
  return (
    <div className='w-full bg-[#F8F8F8] py-4'>
        <div className='flex justify-between container mx-auto items-center'>
            <div className='gap-4 flex justify-center items-center'>
                <NavLink to='/'>Home &#9474;</NavLink>
                <NavLink>Products &#9474;</NavLink>
                <NavLink>About us &#9474;</NavLink>
                <NavLink>Stores &#9474;</NavLink>
                <NavLink>Contact us </NavLink>
            </div>

            <div className='gap-4 flex justify-center items-center'>
                <p>support@mail.com &#9474;</p>
                <p>+3816444444</p>
            </div>
        
        </div>
    </div>
  )
}

export default HeaderTopBar