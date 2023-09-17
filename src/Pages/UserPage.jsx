import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../Store/sliceAuthReg'

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
        <p>Favorite list:</p>
        <button onClick={() => dispatch(logOut())} className='underline'>Log out</button>
    </div>
  )
}

export default UserPage