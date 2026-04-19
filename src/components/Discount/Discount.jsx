import React from 'react'
import Button from '../Button/Button'
// import allitems from '../../assets/discountbg.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100  '>
        <div className='flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
            <span className='md:text-9xl text-7xl text-orange-500 font-bold transform md:self-center h-fit md:-rotate-90'>20%</span>
            <div className='mx-w-[700px]'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Discount</h3>
                <p className='text-zinc-600  my-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur tempora exercitationem est ducimus neque?</p>
                <Button content = 'Get a Discount'/>
            </div>
          </div>
    </section>
  )
}

export default Discount
