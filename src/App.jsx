import React from 'react'
import Navlink from './components/Navlink'
import ChatList from './components/ChatList'
import Register from './components/Register'
import ChatBox from './components/ChatBox'
import Login from './components/Login'
import './App.css'

const App = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-start w-[100%]'>
        <Navlink />
        <ChatList />
        <ChatBox />

      </div>
      {/* <div>
        <Register />
        <Login />
      </div> */}

    </div>
  )
}

export default App