import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function UserPage() {
    const { currentAccount } = useSelector(state => state.auth)
    const { currentLoginStatus } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(currentAccount === 'on') {
            console.log(`currenty logged as ${currentAccount.username}`)
        } else if(currentAccount === 'off') {
            navigate('/')
        }
    }, [currentLoginStatus])
    return (
    <div className='flex justify-center items-center py-24 text-[24px] font-semibold'>
        <p>Currently logged as: {currentAccount.username}</p>
    </div>
  )
}

export default UserPage