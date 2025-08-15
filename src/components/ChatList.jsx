import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { RiMore2Fill } from 'react-icons/ri'
import SearchModel from './SearchModel'
import ChatData  from '../data/ChatData'

const ChatList = () => {
  
    const [chats,setChat] = useState([]);
    useEffect(()=>{
      setChat(ChatData);
    },[]);
  


  return (
    <section className='relative hidden lg:flex flex-col items-start justify-start bg-white 
    h-[100vh] w-[100%] md:w-[380px]'>
      <header className='flex items-center justify-between w-[100%] border-b-1 border-gray-300'>
        <main className='flex items-center gap-3 p-2'>
          <img className='w-14 object-cover rounded-full' src={assets.man} alt="" />
          <span>
            <h3 className='text-black text-xl font-semibold'>Sumon</h3>
            <h2 className='text-gray-500 text-sm'>@sumon</h2>
          </span>
          
        </main>
        <button className='w-6 h-6 flex items-center justify-center rounded-md cursor-pointer bg-[#D9F2ED] mr-2 '>
          <RiMore2Fill className='text-[#01AA85]'/>
        </button>
        
      </header>

      <div className='w-[100%] mt-4 px-5'>
        <header className='flex items-center justify-between'>
          <h2>messege {chats?.length || 0}</h2>
          <SearchModel/>
        </header>
      </div>

      <main className='felx flex-col items-start mt-[1.5rem] w-[100%]'>

        {chats?.map((chat,index)=>(

          <button  className='flex items-start justify-between w-[100%] cursor-pointer
          rounded-md shadow py-2 px-3 border-b border-gray-500/30 hover:bg-blue-200/30 bg-blue-100/20 transition'>
            <div className='flex items-center justify-start gap-2 w-[100%]'>
              <img className='w-12' src={assets.man} alt="" />
              <span >
                <h2 className='text-start '>{chat.name}</h2>
                <p className='font-light text-gray-400/80'>{chat.lastMessage}</p>
              </span>
            </div>
              <p className='mr-auto w-26 font-light my-auto text-sm text-gray-400'>{chat.date}</p>
          </button>

        ))}

          

      

       
      </main>

    </section>
  )
}

export default ChatList