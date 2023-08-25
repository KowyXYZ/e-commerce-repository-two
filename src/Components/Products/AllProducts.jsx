import React, { useEffect, useState } from 'react'
import RenderProducts from '../../Utilities/RenderProducts'
import SingleProduct from './SingleProduct'
import RenderCatergories from '../../Utilities/RenderCategories'

import { Input, Radio, Space } from 'antd';
// import {  Checkbox , Space } from 'antd';

function AllProducts() {

    // const onChange = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    //   };
    const [value, setValue] = useState(0);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
      console.log(value)
    };


    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect( () => {
        RenderProducts().then( (product) => setProducts(product.products))
        RenderCatergories().then( (category) => setCategories(category))
    }, [])

    console.log(categories)


  return (
    <div className='container mx-auto w-full flex py-6'>
        <div className='flex flex-col justify-start items-start flex-wrap gap-5 bg-[#fff] p-8 h-full border-2 rounded-3xl '>
            <h1 className='text-[30px] font-semibold'>Categories</h1>
            <Radio.Group className='flex flex-col gap-5' onChange={onChange} value={value}>
                <Radio value={0}>All</Radio>
            {categories.map( (cat, idx) => {
                return (
                    // <Checkbox onChange={onChange}>{cat}</Checkbox>
                   
                    <Space direction="vertical">
                        
                      <Radio value={idx + 1 }>{cat}</Radio>
                    </Space>
                 
                )
            })}
             </Radio.Group>
        </div>



        <div className='container mx-auto flex justify-center items-center flex-wrap gap-10'>
            {products.map((item, index) => {
                return (
                    <SingleProduct item={item} key={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default AllProducts
