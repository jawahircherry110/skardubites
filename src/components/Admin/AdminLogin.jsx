import React from 'react'
import Button from '../Button/Button';
import { FaUser, FaUserLock } from "react-icons/fa";


const AdminLogin = () => {
  return (
   <section className='flex justify-center className="min-h-screen bg-zinc-100 py-30 px-6"'>
      <div className='flex justify-center rounded-lg flex-col items-center p-10  gap-5 mb-3 bg-white w-80 md:w-120  mt-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-13 h-13 flex justify-center items-center rounded-full bg-orange-500'>
             <h2 className='text-3xl text-white'><FaUserLock /></h2>

            </div>
             <h1 className='text-2xl font-bold text-zinc-600'>Admin Login</h1>
             <h4 className='mt-2 text-lg text-zinc-600'>Please sign in to access dashboared</h4>
        </div>
        <div>
            <label className='font-bold text-zinc-600' htmlFor="">Admin Email</label><br />
             <input
                type="email"
                placeholder=" Enter your email"
                className=" w-70 md:w-100 px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              /> <br /><br />
             <label className='font-bold text-zinc-600' htmlFor="">Password</label><br />
            <input
                type="password"
                placeholder="Enter your password"
                className="w-70 md:w-100 px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />   
             </div>
          <div className='mb-5'>
            <Button content ='Sign in'/>
         </div>
      </div>
   </section>
  )
}

export default AdminLogin
