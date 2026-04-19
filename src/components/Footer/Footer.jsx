import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20 '>
       <div className='max-w-[1400px] mx-auto gap-y-12 px-10 flex flex-wrap'>
             <div className='flex-1 basis-[300px]'>
               <a
                className='text-3xl font-bold'
                href=""><span className='text-orange-500'>S</span>kardu<span className='text-orange-500'>B</span>ites
                </a> 
                <p className='text-zinc-600 mt-6 max-w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos tempore nobis!</p>
                <p className='text-zinc-800 mt-6'>
                    2025 &copy; All Rights Reserved
                </p>
         </div>
         <ul className='flex-1'>
            <li><h5 className='text-zinc-500 text-2xl font-bold'>Company</h5></li>
            <li className= 'mt-6'><a href="" className='text-zinc-800 hover:text-orange-500 ' >About</a></li>
            <li className= 'mt-6'><a href="" className='text-zinc-800 hover:text-orange-500 '>FAQ'S</a></li>
            <li></li>
            <li></li>
         </ul>

          <ul className='flex-1'>
            <li><h5 className='text-zinc-500 text-2xl font-bold'>Support</h5></li>
            <li className= 'mt-6'><a href="" className='text-zinc-800 hover:text-orange-500 ' >Support Center</a></li>
            <li className= 'mt-6'><a href="" className='text-zinc-800 hover:text-orange-500 '>Feedback</a></li>
            <li className= 'mt-6'><a href="" className='text-zinc-800 hover:text-orange-500 '>ContactUS</a></li>
           
            
         </ul>
            <div className='flex-1'>
                <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                <p className='mt-6 text-zinc-600'>Questions or Feedbacks? <br />
                We'd love to hear from you.
                    
                </p>
                <div className='flex bg-white  p-1 rounded-lg mt-6'>
                    <input type="email" name='email' id='email' autoComplete='off' className='h-[5vh] pl-4 flex-1 focus:outline-none'  placeholder='Email Address'/>
                    <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                        <IoIosArrowForward/>
                    </button>
                </div>
            </div>
       </div>
    </footer>
  )
}

export default Footer
