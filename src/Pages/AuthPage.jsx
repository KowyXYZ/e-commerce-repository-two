import React from 'react'
import { Link } from 'react-router-dom'

function AuthPage() {
  return (
    <div>
        <p>Sign in</p>
        <Link to='/user/register'>Register</Link>
    </div>
  )
}

export default AuthPage
