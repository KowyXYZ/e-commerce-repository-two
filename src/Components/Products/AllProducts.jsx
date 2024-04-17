import React, { useEffect, useState } from 'react'
import RenderProducts from '../../Utilities/RenderProducts'
import SingleProduct from './SingleProduct'
import RenderCatergories from '../../Utilities/RenderCategories'
import { Radio } from 'antd';
import searchbar from '../../Assets/Icons/search.png'
//assets
import grid from '../../Assets/Icons/grid.png'
import list from '../../Assets/Icons/list.png'

import {  useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../Store/sliceStyling';

import PaginationCustom from './PaginationCustom';

import { getSearchText } from '../../Store/sliceSearch';
import { Link } from 'react-router-dom';


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

    const { status } = useSelector( (state) => state.styling) //status for grid and list stlying


    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        dispatch(getSearchText(e.target.value))  
    }

    useEffect( () => {
        RenderProducts().then( (product) => setProducts(product.products))
        RenderCatergories().then( (category) => setCategories(category))

    }, [])


    const [currentPage, setCurrentPage] = useState(1  )
    const [postsPerPage, setPostsPerPage] = useState(12)

    const lastPostIndex = currentPage * postsPerPage //10
    const firstPostIndex = lastPostIndex - postsPerPage // 0
    const currPosts = products.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='flex-col container mx-auto w-full flex  gap-5'>
        <div className='border-2 sm:flex hidden gap-4 mx-2 sm:mx-0 items-center justify-between px-2 py-2 rounded-2xl'>
            <p className='text-[gray]'>Sory by :  <span className='text-[#000]'>{sorting}</span></p>

          
            <div className='flex items-center gap-2 justify-center'>
                <img className={status === 'list' ? 'invert' : 'invert-0'} onClick={ () => {dispatch(getStatus('list'))}} src={list} alt="list" />
                <img className={status === 'grid' ? 'invert' : 'invert-0'}  onClick={ () => {dispatch(getStatus('grid'))}} src={grid} alt="grid" />

                
            </div>
           
        </div>
    

        <div className='w-full flex flex-col sm:flex-row gap-5'>


                <div className='hidden sm:flex flex-col justify-start items-start flex-wrap gap-5 bg-[#fff] p-8 h-full border-2 rounded-3xl '>
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


                <div className='flex sm:hidden justify-center items-center '>
                    <h1 className='uppercase font-black text-[24px]'>Products</h1>
                    
                </div>

                 { status === 'list' ?
                     <div className='container sm:mx-auto flex mx-2 flex-col sm:items-start sm:justify-end justify-center items-center gap-8'>
                    {
                    val === 'all' ? products.map((key, index) => {return(<SingleProduct item={key} key={index}/>)}) :  products.filter((item) => item.category.toLowerCase().includes(val)).map((el, index) => {return(<SingleProduct item={el}/>)})
                    }
                    </div>
                    
                    :  
                    <div className='container mx-auto sm:flex hidden justify-start items-start flex-wrap gap-8 '>
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
