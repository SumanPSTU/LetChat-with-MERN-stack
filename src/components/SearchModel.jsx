import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const SearchModel = () => {
  return (
    <div>
        <button className='w-7 h-7 flex items-center justify-center rounded-md cursor-pointer bg-[#D9F2ED] mr-2'>
          <RiSearch2Line className='w-6 '/> 
        </button>
    </div>
  )
}

export default SearchModel