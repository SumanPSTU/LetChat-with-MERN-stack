import React, { useState } from 'react'
import assets from '../assets/assets'
import '../App.css'

const Login = () => {
  const [userData,setuserData] = useState({
        email:"",
        password:""
      });
      const handleuserData = (e)=>{
        const {name,value} = e.target;
        setuserData((prevState)=>({
          ...prevState,
          [name]:value,
        }))
      }
  
      //handle register the user
      const handleAuth =()=>{
        try{
          alert(userData['email'])
        }catch(err){
          console.log(err);
        }
      }
  return (
    <section style={{ backgroundImage: `url(${assets.bg})` }} className='flex flex-col items-center justify-center h-[100vh]
      bg-cover bg-center bg-blue-500/35 '>
      <div className='bg-white p-5 rounded-3xl shadow-2xl h-[25rem] w-[20rem]
      flex flex-col items-center justify-center '>
        <div className='mb-5 flex flex-col items-center'>
          <img src={assets.man} className='w-14 mb-2' alt="" />
          <h1 className='text-center font-bold text-3xl mb-2'>Sign In</h1>
          <p className='text-center text-sm text-gray-400' >Welcome back</p>
        </div>
        <div className='w-full'>
          <input type="email" name='email' onChange={handleuserData} className='border text-[#004939f3]  focus:outline-green-400 mb-3 font-medium
           border-green-200 rounded-md w-full p-2 bg-[#01aa851d]' placeholder='Enter your email' required/>

          <input type="password" name='password' onChange={handleuserData} className='border text-[#004939f3]  focus:outline-green-400 mb-3 font-medium
           border-green-200 rounded-md w-full p-2 bg-[#01aa851d]' placeholder='Enter your password' required/>
        </div>
        <div className='w-full'>
          <button onClick={handleAuth} className='flex items-center justify-center gap-2 bg-[#01aa65] hover:bg-[#01aa75] cursor-pointer text-2xl text-white font-bold w-full p-2 rounded-md'>Sign In
            <img className='w-6 h-6 bg-none' src={assets.login} /></button>
        </div>
        <div className='flex items-center justify-center gap-2 py-2'>
          <label className='text-gray-400'>Don't have an account?</label>
          <button className='text-blue-500 cursor-pointer'>sign up</button>
        </div>
      </div>
    </section>
  )
}

export default Login