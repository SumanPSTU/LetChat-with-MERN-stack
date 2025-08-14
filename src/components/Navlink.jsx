import React from 'react'
import assets from '../assets/assets'
import { RiArrowLeftLine, RiBardLine, RiChatAiLine, RiFile4Line, RiFolderUserLine, RiNotificationLine } from 'react-icons/ri'

const Navlink = () => {
  return (
    <section className='sticky lg:static top-0 flex items-center 
      lg:items-start lg:justify-center h-[7vh] lg:h-[100vh] w-full px-3 lg:px-1 lg:w-[150px] py-10 lg:py-2 bg-[#01AA85]'>
      
      <main className='flex lg:flex-col items-center lg:gap-10 justify-between w-full py-2 lg:px-0'>

        {/* Logo / Top Section */}
        <div className='flex items-start justify-start lg:justify-center 
          border-gray-100 border-r lg:border-r-0 lg:border-b'>
          <img
            className=' cursor-pointer w-16 h-16 object-contain my-0 px-2 lg:my-2 mb-0 lg:mb-4'
            src={assets.communication}
            alt="icon"
          />
        </div>

        {/* Navigation Buttons */}
        <div>
          <ul className='flex lg:flex-col flex-row items-center justify-center gap-7 md:gap-10 px-2 md:px-0'>
            
            <li>
              <button className='text-2xl lg:text-3xl cursor-pointer'>
                <RiChatAiLine className='text-white' />
              </button>
            </li>

            <li>
              <button className='text-2xl lg:text-3xl cursor-pointer'>
                <RiFolderUserLine className='text-white' />
              </button>
            </li>

            <li>
              <button className='text-2xl lg:text-3xl cursor-pointer'>
                <RiNotificationLine className='text-white' />
              </button>
            </li>

            <li>
              <button className='text-2xl lg:text-3xl cursor-pointer'>
                <RiFile4Line className='text-white' />
              </button>
            </li>

            <li>
              <button className='text-2xl lg:text-3xl cursor-pointer'>
                <RiBardLine className='text-white' />
              </button>
            </li>

            <li>
              <button className='text-2xl lg:text-3xl cursor-pointer'>
                <RiArrowLeftLine className='text-white' />
              </button>
            </li>

          </ul>
        </div>

      </main>
    </section>
  )
}

export default Navlink
