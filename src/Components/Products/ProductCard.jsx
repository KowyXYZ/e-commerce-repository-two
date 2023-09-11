import React, { useState } from 'react'
import {useLoaderData, useParams } from 'react-router-dom'
import { Rate } from 'antd';
import srce from '../../Assets/Icons/srce.png'
import cart from '../../Assets/Icons/navbarcart.png'
import { addToCart } from '../../Store/sliceCart';
import { useDispatch } from 'react-redux';

function ProductCard() {

    const { id } = useParams()

    const loader = useLoaderData()

    const [current, setCurrent] = useState(0)

    let calculations = loader.price * loader.discountPercentage / 100 
    let final = loader.price - calculations


    const cartHandler = (item) => {
        dispatch(addToCart(item))
      }
      const dispatch = useDispatch()
 
  return (
    <div className='w-full  '>
        <div className='container mx-auto flex justify-center items-start gap-10'>
            <div className='flex  flex-col items-end justify-center text-end mt-16'>
                <p>{loader.brand}</p>
                <p className='text-[32px] font-semibold'>{loader.title}</p>
                <div className='flex gap-2 items-center justify-start text-center'>
                <Rate disabled defaultValue={loader.rating} />
                <p>({loader.rating})</p>
                </div>
                
                <p className='text-[gray] w-[400px] text-[20px]'>{loader.description}</p>
                <p className='text-[#208a81]'>{loader.category}</p>
                <div className='flex items-start justify-center gap-2 mt-4 '>
                <p className='text-[20px] '>New price: <span className='font-semibold'>{ Math.round(final)}$</span></p>
                    <div className='flex flex-col justify-center items-end'>
                   
                    <p className='line-through text-[20px] text-[gray]'>{loader.price}$</p>
                    <p className='text-[red]'>{loader.discountPercentage}% off</p>
                    </div>
                   
                   
                </div>
                <p></p> 
                <div className='flex gap-5 mt-4'>
                        <div className='border-2 p-2 flex items-center justiify-center'>
                            <img className='w-8' src={srce} alt="" />
                        </div>

                        <div className='flex justify-center items-center border-2 p-2 text-[20px] gap-2'>
                            <button className='font-semibold' onClick={() => cartHandler(loader)}>Add to cart</button>
                            <img className='w-8' src={cart} alt="" />
                        </div>
                    
                </div>


            </div>

            <div className='flex flex-col items-center justify-center gap-8  p-4 '>
                <div className='flex items-center justify-center flex-col border-2 w-full rounded-3xl p-2 '>
                    <img className='rounded-2xl h-[500px] w-[800px]  object-contain' src={loader.images[current]} alt="" />
                    
                </div>
                <p>Currently in stock: {loader.stock}</p>
                <div className=' flex justify-center items-center gap-4'>
                    { loader.images.map( (el, index) => {
                        return (
                            <img onClick={ () => setCurrent(index)} className='border-2 p-2 w-44 h-44 object-contain rounded-2xl' src={el} alt='images'/>
                        )
                    })}
                </div>
               
            </div>
        </div>

    </div>
  )
}

export const productCardLoader = async ( {params} ) => {
    const {id} = params
    let data = await fetch(`https://dummyjson.com/products/${id}`)
    return data.json()
}

export default ProductCard
