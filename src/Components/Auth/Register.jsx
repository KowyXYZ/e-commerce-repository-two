import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { storeAccount } from '../../Store/sliceAuthReg';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';



function Register() {

    const userRef = useRef()
    const errRef = useRef()

    //user field state
    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)


    //pw field state
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    //match pwd
    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    //err msg state
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        userRef.current.focus()
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd == matchPwd
        setValidMatch(match)
    },[pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])


    const customId = Math.floor(Math.random() * 9999)

    const handleSubmit = async (e) => {
   
    
      const v1 = USER_REGEX.test(user)
      const v2 = PWD_REGEX.test(pwd)

      let account = {
        username: user,
        password: pwd,
        id: customId
      }
  

      if(!v1 || !v2) {
        setErrMsg('Invalid Entry!')
        return
      }


      setSuccess(true)
      dispatch(storeAccount(account))


    } 

    const dispatch = useDispatch()


  return (
    <div className='w-full'>
      <div className='container mx-auto flex justify-center items-center flex-col'>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
          <p className='p-4 text-[22px] font-semibold'>Register</p>
          <form onSubmit={handleSubmit} className='flex justify-center items-center gap-4 flex-col border-2 p-4  border-[black] w-[400px] rounded-xl'>
            <label htmlFor="username" className='text-center flex gap-3 justify-center'>
                Username:

                  <FontAwesomeIcon icon={faCheck } className={validName ? 'flex text-[green]' : 'hidden'}/>
                  <FontAwesomeIcon icon={faTimes} className={validName || !user ? 'hidden  ' : 'flex text-[red]'}/>
          
            </label>
            <input
                 className='p-2 border-2 w-[250px] rounded-xl'
                type="text"
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required 
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}/>

<p id="uidnote" className={userFocus && user && !validName ? "border-[red] rounded-xl m-2 p-2 flex flex-col border-2 text-center items-center justify-center transition-all delay-100 ease-in-out" : "hidden"}>
                        <span> <FontAwesomeIcon icon={faInfoCircle} /></span>
                         4 to 24 characters.<br />
                         Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
          </p>

          <label htmlFor="password" className='text-center flex gap-3 justify-center'>
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? 'flex text-[green]' : 'hidden'} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hidden  ' : 'flex text-[red]'} />
                        </label>
                        <input
                          className='p-2 border-2 w-[250px] rounded-xl'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />

                      <p id="pwdnote" className={pwdFocus && !validPwd ? "border-[red] rounded-xl m-2 p-2 flex flex-col border-2 text-center items-center justify-center transition-all delay-100 ease-in-out" : "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: !@#$%
                        </p>

                        <label htmlFor="confirm_pwd" className='text-center flex gap-3 justify-center'>
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? 'flex text-[green]' : 'hidden'} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? 'hidden  ' : 'flex text-[red]'} />
                        </label>
                        <input
                             className='p-2 border-2 w-[250px] rounded-xl'
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "border-[red] rounded-xl m-2 p-2 flex flex-col border-2 text-center items-center justify-center transition-all delay-100 ease-in-out" : "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button className='disabled:bg-[#a0f2df] px-16  bg-[#62D0B6] mt-4 text-[#fff] rounded-xl py-2' disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
          </form>

        <button onClick={handleSubmit}>Click</button>

          <div className='flex flex-col text-center mt-5'>
          <p className='text-[18px]'>Already registered?</p>
          <p className='underline'>Sign in</p>

          </div>
    
          
      </div>
      
    </div>
  )
}



export default Register
