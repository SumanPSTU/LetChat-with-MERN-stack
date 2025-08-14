import React, { useState } from 'react'
import assets from '../assets/assets'
import '../App.css'

const Resister = () => {
    const [userData,setuserData] = useState({
      fullname:"",
      email:"",
      password:""
    });
    const handleuserData = (e)=>{
      const {name,value} = e.target;
      setuserData((prevState)=>({
        ...prevState,
        [name]:value,
      }))
    };
    //handle register the user
    const handleAuth =()=>{
      try{
        alert(userData['fullname'])
      }catch(err){
        console.log(err);
      }
    };
  return (
    <section style={{ backgroundImage: `url(${assets.bg})` }} className='flex flex-col items-center justify-center h-[100vh]
      bg-cover bg-center bg-blue-500/35 '>
      <div className='bg-white p-5 rounded-3xl shadow-2xl h-[27rem] w-[20rem]
      flex flex-col items-center justify-center '>
        <div className='mb-6 flex flex-col items-center'>
          <img src={assets.man} className='w-14 mb-2' alt="" />
          <h1 className='text-center font-bold text-3xl'>Resister</h1>
          <p className='text-center text-sm text-gray-400' >Welcome, create an account to continue</p>
        </div>
        <div className='w-full'>
          <input type="text" onChange={handleuserData} name='fullname' className='border text-[#004939f3]  focus:outline-green-400 mb-3 font-medium
           border-green-200 rounded-md w-full p-2 bg-[#01aa851d]' placeholder='Enter your full name' required/>

          <input type="email" onChange={handleuserData} name='email' className='border text-[#004939f3]  focus:outline-green-400 mb-3 font-medium
           border-green-200 rounded-md w-full p-2 bg-[#01aa851d]' placeholder='Enter your email' required/>

          <input type="password" onChange={handleuserData} name='password' className='border text-[#004939f3]  focus:outline-green-400 mb-3 font-medium
           border-green-200 rounded-md w-full p-2 bg-[#eff8f61d]' placeholder='Enter your password' required/>
        </div>
        <div className='w-full'>
          <button onClick={handleAuth} className='flex items-center justify-center gap-2 bg-[#01aa65] hover:bg-[#01aa75] cursor-pointer text-2xl text-white font-bold w-full p-2 rounded-md'>Register
            <img className='w-6 h-6 bg-none' src={assets.login} /></button>
        </div>
        <div className='flex items-center justify-center gap-2 py-2'>
          <label className='text-gray-400'>Already have an account?</label>
          <button className='text-blue-500 cursor-pointer'>Sign in</button>
        </div>
      </div>
    </section>
  )
}

export default Resister