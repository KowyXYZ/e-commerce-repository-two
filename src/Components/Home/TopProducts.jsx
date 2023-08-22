import React, { useEffect, useState } from 'react'
import RenderProducts from '../../Utilities/RenderProducts'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'



function TopProducts() {

    const [products, setProducts] = useState([])

    useEffect( () => {
        RenderProducts().then(res => setProducts(res.products.slice(4, 12))).catch( (error) => console.log(error))

    }, []) 


    


  return (
    <div className='w-full space-y-6'>
        <div className='flex justify-start items-center container mx-auto text-start'>
            <Link to='/products'>
            <p className='text-[20px] font-bold underline text-[#208a81] '>Check more products &#8594;</p>
            </Link>
        </div>
       

      <div className='container mx-auto flex justify-center items-center flex-wrap gap-20'>
            {products.map((product, index) => {
                return (
                    <SingleProduct item={product} key={index}/>
                )
            })}
      </div>
    </div>
  )
}

export default TopProducts
