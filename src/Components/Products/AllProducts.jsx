import React, { useEffect, useState } from 'react'
import RenderProducts from '../../Utilities/RenderProducts'
import SingleProduct from './SingleProduct'
import RenderCatergories from '../../Utilities/RenderCategories'
import { Radio } from 'antd';

//assets
import grid from '../../Assets/Icons/grid.png'
import list from '../../Assets/Icons/list.png'

import {  useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../Store/sliceStyling';


function AllProducts() {


    const [val, setVal] = useState('all')
    let changeVal = (e) => {
        setVal(e.target.value)
    }
    
    // const rendering = () => {
    //     if(val === 'all') {
    //         products.map( (el, index) => {
    //             console.log('done')
    //             return (
    //                 <SingleProduct item={el} key={index}/>
    //             )
    //         })
    //     } else if (val === products.category) {
    //         products.filter(item => item.category.includes(val)).map((el, index) => {
    //             console.log('ok')
    //             return(
    //                 <SingleProduct item={el} key={index}/>
    //             )
    //         })
    //     }
    // }

    const [sorting, setSorting] = useState('Default')

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const dispatch = useDispatch()

    const { status } = useSelector( (state) => state.styling)




    useEffect( () => {
        RenderProducts().then( (product) => setProducts(product.products))
        RenderCatergories().then( (category) => setCategories(category))
    }, [])


  return (
    <div className='flex-col container mx-auto w-full flex  gap-5'>
        <div className='border-2 flex gap-4 items-center justify-between px-2 py-2 rounded-2xl'>
            <p className='text-[gray]'>Sory by :  <span className='text-[#000]'>{sorting}</span></p>
            <div className='flex gap-4 items-center justify-center'>
                <img onClick={ () => {dispatch(getStatus('list'))}} src={list} alt="list" />
                <img onClick={ () => {dispatch(getStatus('grid'))}} src={grid} alt="grid" />

                
            </div>
           
        </div>

        
        <div className='w-full flex gap-5'>


                <div className='flex flex-col justify-start items-start flex-wrap gap-5 bg-[#fff] p-8 h-full border-2 rounded-3xl '>
                    <h1 className='text-[30px] font-semibold'>Categories</h1>
                    <Radio.Group onChange={changeVal} className='flex flex-col gap-5' defaultValue="all" buttonStyle="solid">
                        <Radio.Button value='all'>All</Radio.Button>
                            {categories.map( (cat, idx) => {
                                return (

                                    <Radio.Button value={cat}>{cat}</Radio.Button>
                                )
                            })}
                    </Radio.Group>
                </div>


                 { status === 'list' ? <div className='container mx-auto flex flex-col items-start justify-end gap-8'>{
                    val === 'all' ? products.map((key, index) => {return(<SingleProduct item={key} key={index}/>)}) :  products.filter((item) => item.category.toLowerCase().includes(val)).map((el, index) => {return(<SingleProduct item={el}/>)})
                    }</div> :  <div className='container mx-auto flex justify-end items-start flex-wrap gap-8 '>
                    {
                    val === 'all' ? products.map((key, index) => {return(<SingleProduct item={key} key={index}/>)}) :  products.filter((item) => item.category.toLowerCase().includes(val)).map((el, index) => {return(<SingleProduct item={el}/>)})
                    }

                </div>}               
                {/* <div className='container mx-auto flex justify-end items-start flex-wrap gap-8 '>
                    {
                    val === 'all' ? products.map((key, index) => {return(<SingleProduct item={key} key={index}/>)}) :  products.filter((item) => item.category.toLowerCase().includes(val)).map((el, index) => {return(<SingleProduct item={el}/>)})
                    }

                </div> */}

        </div>
       
       
    </div>
  )
}




export default AllProducts
