import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateAccount } from '../../Store/sliceAuthReg'
import useSelection from 'antd/es/table/hooks/useSelection'
import { useNavigate } from 'react-router-dom'

function Login() {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentLoginStatus } = useSelector(state => state.auth)

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(user, pwd)
        setUser('')
        setPwd('')

        const account = {
            username: user,
            password: pwd
        }

      dispatch(validateAccount(account))

      navigate('/user/profile')
       
    
    }

  return (
    <div className='w-full '>
        <div className='container mx-auto flex justify-center items-center flex-col'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <p className='p-4 text-[22px] font-semibold'>Sign in</p>
                <form onSubmit={handleSubmit} className='flex justify-center items-center gap-4 flex-col border-2 p-4  border-[black] w-[400px] rounded-xl'>
                    <label htmlFor="username" className='text-center flex gap-3 justify-center'>Username:</label>
                    <input
                     className='p-2 border-2 w-[250px] rounded-xl'
                    type="text"
                    id="username"
                    ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required/>

                    <label htmlFor="password" className='text-center flex gap-3 justify-center'>Password:</label>
                    <input
                     className='p-2 border-2 w-[250px] rounded-xl'
                    type="password"
                    id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required/>

                    <button className='px-16 bg-[#62D0B6] mt-4 text-[#fff] rounded-xl py-2'>Sign in</button>
                </form>
        </div>
       
    </div>
  )
}

export default Login