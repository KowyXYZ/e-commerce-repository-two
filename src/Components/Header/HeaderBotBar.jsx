import React, { useState } from 'react'
import caret from '../../Assets/Icons/navbarcart.png'
import searchbar from '../../Assets/Icons/search.png'
import user from '../../Assets/Icons/user.png'
import bag from '../../Assets/Icons/bag.png'
import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'
import RenderSearch from '../../Utilities/RenderSearch'

function HeaderBotBar() {

    const cart = useSelector((state) => state.cart)
    
    // const [search, setSearch] = useState('')

    // const handleSearch = (e) => {
    //     setSearch(e.target.value)
    //     console.log(search)
    // }

    // const [setsearchdata, setSetsearchdata] = useState([])

    // const fetchSearchProducts = () => {
    //     RenderSearch(search).then((data) => setSetsearchdata(data.products))
    // }

    const {currentAccount} = useSelector(state => state.auth)
    const {currentLoginStatus} = useSelector(state => state.auth)



  return (
    <div className='sm:w-full bg-[#fff] py-6'>
        <div className='container mx-auto sm:flex hidden  items-center'>


            <div className='flex justify-between gap-4 items-center'>

                <div className='flex gap-8'>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Cart</p>
                            <p className='font-semibold'>Cart items: {cart.cartItems.length}</p>
                        </div>
                        <Link to='/cart' className='bg-[#F8F8F8] border-2 p-3 rounded-[50px]'>
                            <img className=' w-8' src={caret} alt="" />
                        </Link>
                    </div>

                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                            {currentLoginStatus === 'on' ? <p>{currentAccount.username}</p> : <p>User</p>}
                            {currentLoginStatus === 'on' ?  <Link to='/user/profile' className='font-semibold'>Go to profile</Link> :  <Link to='/user/login' className='font-semibold'>Go to profile</Link>}
                           
                        </div>
                        <div className='bg-[#F8F8F8] border-2 p-3 rounded-[50px]'>
                            <img className=' w-8' src={user} alt="" />
                        </div>
                    </div>
                </div>
              
                

                <div>
                    <Link to='/products' className='flex justify-center items-center'>
                        <p className='font-semibold'>Go to products</p>
                        <img className='w-12' src={bag} alt="" />
                    </Link>
                </div>
            </div>


        </div>


        <div className='flex justify-center  gap-8 items-center sm:hidden text-[14px]'>

     
                    <div className='flex items-center text-center justify-center '>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                          
                            <p className='font-semibold'>Cart items: {cart.cartItems.length}</p>
                        </div>
                     
                    </div>

                    <div className='flex items-center text-center justify-center gap-2'>
                        <div className='flex flex-col items-center justify-center'>
                            {currentLoginStatus === 'on' ? <p>{currentAccount.username}</p> : <p>User</p>}
                            {currentLoginStatus === 'on' ?  <Link to='/user/profile' className='font-semibold'>Go to profile</Link> :  <Link to='/user/login' className='font-semibold'>Go to profile</Link>}
                           
                        </div>
                        
                    </div>
        </div>
    </div>
  )
}

export default HeaderBotBar