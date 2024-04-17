import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function HeaderTopBar() {

  const [toggle, setToggle] = useState(false)


  return (
    <div className='sm:w-full sm:bg-[#F8F8F8] py-4'>
        <div className='hidden sm:flex justify-between container mx-auto items-center'>
            <div className='gap-4 flex justify-center items-center'>
                <NavLink to='/'>Home &#9474;</NavLink>
                <NavLink to='/products'>Products &#9474;</NavLink>
                <NavLink>About us &#9474;</NavLink>
                <NavLink>Stores &#9474;</NavLink>
                <NavLink>Contact us </NavLink>
            </div>

            <div className='gap-4 flex justify-center items-center'>
                <p>support@mail.com &#9474;</p>
                <p>+3816444444</p>
            </div>
        
        </div>

        <div className='flex sm:hidden relative justify-center items-center'>
          <div>
           {toggle ? <button onClick={() => setToggle(!toggle)}>X</button > : <button onClick={() => setToggle(!toggle)}>Menu</button>}
           {toggle ? 
           <div className='absolute top-12 bg-[#121212] rounded-2xl gap-2 border-green-500 border-2 flex flex-col z-10 p-2 text-[#fff] right-0'>
               <NavLink to='/'>Home </NavLink>
                <NavLink to='/products'>Products</NavLink>
                <Link to='/cart'>Cart</Link>
               
           </div> : <></>}
          </div>
        </div>
    </div>
  )
}

export default HeaderTopBar