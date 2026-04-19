import React from 'react'
import Button from '../Button/Button'
import { FaWpforms } from "react-icons/fa";
import orderForm from '../../assets/orderform.png'



const OrderForm = () => {
  return (
      <section>
        <div className='md:max-w-2xl  mx-auto py-30'>
          <div className='flex gap-5'>
            <div>
              <h1 className='text-4xl'><img className='w-20' src={orderForm} alt="" /></h1>
              </div>
            <div className='flex justify-center items-center'>
              <h1 className='text-2xl font-bold text-zinc-800 '>OrderForm</h1>
            </div>
          </div>
          <div className='mt-3'>
            <p className='text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam ea </p>
          </div>
          <div className='mt-3'>
              <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />
                <input
                type="number"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />

               <select id="region" className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none">
               <option value="">-- Select Province --</option>
               <option value="Punjab">Punjab</option>
               <option value="Sindh">Sindh</option>
               <option value="KPK">Khyber Pakhtunkhwa</option>
               <option value="Balochistan">Balochistan</option>
               <option value="Gilgit Baltistan">Gilgit Baltistan</option>
               <option value="Azad Kashmir">Azad Kashmir</option>       
             </select>
              <textarea
                rows="2"
                placeholder="Enter Detailed Address"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>

             <Button content = "Submit"/>

            </form>
          </div>
        </div>
      </section>
  )
}

export default OrderForm

