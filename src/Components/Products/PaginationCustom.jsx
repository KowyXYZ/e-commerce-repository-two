import React from 'react'
import { Pagination } from 'antd';

function PaginationCustom ({totalPosts, postsPerPage, setCurrentPage}) {

    let pages = []

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }


  return (
    <div className='flex justify-center items-center'>
      {
        pages.map((page, index) => {
            return(
                <button onClick={() => setCurrentPage(page)} className='rounded-2xl px-4 border-[#62D0B6] p-2 border-2 m-2' key={index}>{page}</button>
            )
        })
      }

    </div>
  )
}

export default PaginationCustom
