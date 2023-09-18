import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut, removefavList } from '../Store/sliceAuthReg'

function UserPage() {
    const { currentAccount } = useSelector(state => state.auth)
    const { currentLoginStatus } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        if(currentLoginStatus === 'on') {
            console.log(`currenty logged as ${currentAccount.username}`)
        } else if(currentLoginStatus === 'off') {
            navigate('/user/login')
        }
    }, [currentLoginStatus])
    return (
    <div className='flex justify-center items-center py-24 text-[24px] font-semibold flex-col'>
        <p>Currently logged as: {currentAccount.username}</p>
        {currentAccount.favList.length === 0 ? <></> : <p className='text-[20px] underline font-medium'>Your Favourite List: </p>} 
        <div className='flex flex-wrap gap-10'>
     
        {currentAccount.favList.length === 0 ? <p>Favourite list is empty!</p> : currentAccount.favList.map((el, index) => {
            return(
                <div className='flex-wrap flex'>
                    <div  className='space-y-[2px] flex flex-col border-2 p-4 rounded-3xl pt-2 text-center items-center text-[16px] mt-4 drop-shadow-xl shadow-md'>
                        <p className='text-[#208a81]'>{el.category}</p>
                        <Link to={`/products/product/${el.id}`}>
                        <img className='w-64 h-64 object-cover rounded-3xl' src={el.thumbnail} alt="" />
                        </Link>
                 
                        <p>{el.title}</p>
                        <p>{el.price}$</p>
                        <p onClick={() => dispatch(removefavList(el))} className='underline'>Remove</p>
                    </div>
                    
                </div>
            )
        })}
    
        </div>
       
        <button onClick={() => dispatch(logOut())} className='mt-24 text-[18px] text-[#fff] border-2 py-2 px-6 bg-[red] rounded-3xl underline'>Log out</button>
    </div>
  )
}

export default UserPage