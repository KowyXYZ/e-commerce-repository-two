import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RenderSearch from '../../Utilities/RenderSearch'
import {  useDispatch } from 'react-redux'
import { getStatus } from '../../Store/sliceStyling';
import searchbar from '../../Assets/Icons/search.png'
import { getSearchText } from '../../Store/sliceSearch';


import grid from '../../Assets/Icons/grid.png'
import list from '../../Assets/Icons/list.png'


import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';


function SearchProducts() {
    const dispatch = useDispatch()

    const { searchText } = useSelector((state) => state.srch)
    const handleSearch = (e) => {
        dispatch(getSearchText(e.target.value))  
    }

    const [search, setSearch] = useState([])
    const [sorting, setSorting] = useState('Default')
    useEffect(() => {
        RenderSearch(searchText).then((el) => setSearch(el.products))
     
    },[])

  return (
    <div className='w-full'>
        <div className=' container mx-auto border-2  flex gap-4 items-center justify-between px-2 py-2 rounded-2xl'>
            <p className='text-[gray]'>Sory by :  <span className='text-[#000]'>{sorting}</span></p>

            <div className='border-2 rounded-3xl border-[gray] py-1 px-3'>
                    <div className='flex justify-center items-center gap-3'>
                       
                    <input onChange={(e) => handleSearch(e)} type='text' className='w-[400px] outline-none' placeholder='Search . . .'/>
                    <Link>
                         <img onClick="window.location.reload();"  className='w-8 cursor-pointer' src={searchbar} alt="" />
                    </Link>
                   
                    </div>
                </div>
            <div className='flex gap-4 items-center justify-center'>
                <img onClick={ () => {dispatch(getStatus('list'))}} src={list} alt="list" />
                <img onClick={ () => {dispatch(getStatus('grid'))}} src={grid} alt="grid" />

                
            </div>
           
        </div>
        <div className='container mx-auto flex justify-center items-center flex-col'>
        

        <div className='flex flex-wrap gap-8'>
            {  searchText === '' ?
            
            
            <div className='flex justify-center items-center flex-col text-[22px] p-24'>
                <p>There are no matching products!</p>
                <Link className='underline' to='/products'>Go to shopping!!!</Link>
            </div>
            
            
            
            :  
            
            <div className='flex flex-wrap  items-center justify-center gap-8 py-8'>
                {search.filter((item) => item.title.includes(searchText)).map((el, index) => {
                    return (
                        <SingleProduct item={el} key={index}/>
                    )
                })
               }
            </div>
            
            }
        </div>
        

        {/* {
            searchText ===  ?   
            
            <div className='flex flex-wrap gap-8'>
                {search.map((el, index) => {
                    return (
                        <SingleProduct item={el} key={index}/>
                    )
                })}
             </div>
         :
         
       
         <div className='flex justify-center items-center flex-col p-44'>
              <p className='text-center text-[22px]'>There are no matching results </p>
              <Link className='underline' to='/products'>Go back to shopping...</Link>
         </div>

        } */}

        </div>
                



     
      
    </div>
  )
}

export default SearchProducts
