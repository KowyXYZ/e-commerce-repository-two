import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Components/Auth/Login'

function AuthPage() {
  return (
    <div className=' flex justify-center items-center flex-col'>
        <Login/>
        <div className='flex flex-col text-center mt-5'>
          <p>Need an account?</p>
          <Link className='underline' to='/user/register'>Click here to register</Link>
        </div>
        
    </div>
  )
}

export default AuthPage
