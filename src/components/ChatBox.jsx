import React from 'react'
import assets from '../assets/assets'

const ChatBox = () => {
  return (
    <section className='flex flex-col items-start justify-start h-screen  bg-cover overflow-hidden bg-no-repeat w-[65%]' style={{ backgroundImage: `url(${assets.chatbg})` }}>
      <header className='w-[100%] shadow'>
        <main className='bg-gray-200 w-[100%] flex items-start p-2 gap-3 '>
          <span>
            <img className='w-12' src={assets.man} alt="" />
          </span>
          <span className='flex flex-col gap-0 items-start justify-start h-auto'>
            <h3 className='text-semibold'>Sumon Das</h3>
            <p className='text-sm'>@sumon</p>
          </span>
        </main>
      </header>
    </section>
  )
}

export default ChatBox