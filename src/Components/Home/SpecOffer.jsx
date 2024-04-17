import React from 'react'
import watch from '../../Assets/HomePage/watch.png'

import srce from '../../Assets/Icons/srce.png'
import cart from '../../Assets/Icons/navbarcart.png'


import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SpecOffer() {
     // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
 
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => {
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next   
      
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10000);
        return deadline;
    }
 
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
 
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    
  return (
    <div className='w-full mt-12 space-y-4'>

        <div className='flex justify-center items-center container mx-auto text-start'>
            <Link to='/products'>
            <p className='text-[20px] font-bold underline text-[#208a81] '>Special offers &#8594;</p>
            </Link>
        </div>

        <div className='container mx-auto flex-col sm:flex-row flex justify-center items-center gap-24 '>
            <div className='text-center flex-col justify-center items-center border-2 border-[#208a81] sm:px-32 pb-10 rounded-3xl'>
                <div className='flex items-center justify-center'>
                 <div className='flex flex-col space-y-2'>
                 <p className='text-[#208a81]'>smartwatch</p>
                  <p className='text-[26px] font-semibold'>Smartwatch</p>
                  <p className='text-[22px]  text-[red]'><span className='text-[gray] line-through mr-2'>300$</span>150$ </p>
                 <p className='border-2 rounded-3xl border-[red] text-[26px] py-1 px-12 font-bold'><span className='text-[20px]'>Time remaining:</span> <br/>{timer}</p>
                 </div>
                 <div>
                <img src={watch} alt="" />
            </div>
                </div>
          
          

                    <div className='flex gap-5 items-center justify-center'>
                    <div className='border-2 p-2'>
                        <img className='w-8' src={srce} alt="" />
                    </div>

                    <div className='flex justify-center items-center border-2 p-2 sm:px-32 bg-[#208a81] text-[#fff]'>
                        <p>Add to cart</p>
                        <img className='w-8 invert' src={cart} alt="" />
                    </div>
                
                    </div>

            </div>

            <div className='text-center flex-col justify-center items-center border-2 border-[#208a81] sm:px-32 pb-10 rounded-3xl'>
                <div className='flex items-center justify-center'>
                 <div className='flex flex-col space-y-2'>
                 <p className='text-[#208a81]'>smartwatch</p>
                  <p className='text-[26px] font-semibold'>Smartwatch</p>
                  <p className='text-[22px]  text-[red]'><span className='text-[gray] line-through mr-2'>300$</span>150$ </p>
                 <p className='border-2 border-[red] rounded-3xl text-[26px] py-1 px-12 font-bold'><span className='text-[20px]'>Time remaining:</span> <br/>{timer}</p>
                 </div>
                 <div>
                <img src={watch} alt="" />
            </div>
                </div>
          
          

                    <div className='flex gap-5 items-center justify-center'>
                    <div className='border-2 p-2'>
                        <img className='w-8' src={srce} alt="" />
                    </div>

                    <div className='flex justify-center items-center border-2 p-2 sm:px-32 bg-[#208a81] text-[#fff]'>
                        <p>Add to cart</p>
                        <img className='w-8 invert' src={cart} alt="" />
                    </div>
                
                    </div>

            </div>



        </div>
    </div>
  )
}

export default SpecOffer
