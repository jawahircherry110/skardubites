import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import all from '../../assets/all.png'
import { FaHeadphones, FaStar } from 'react-icons/fa'
import { FaStopwatch } from 'react-icons/fa6'

const AboutUs = () => {

  const renderabout = aboutus.map(items=>{
    return (
      <div className='flex md:flex-row flex-col '>
    <div className='w-70 bg-zinc-100 py-7 m-2 mx-5 p-8 rounded-lg'>
        <div className='flex  gap-3'> 
          <div className='w-13 h-13 flex justify-center items-center rounded-full bg-orange-500'>
           <h2 className='text-3xl text-white'>{items.icon}</h2>
          </div>

          <h1 className='text-xl font-bold text-zinc-800'>{items.heading}</h1>

        </div>
        <div className=''>
          <p className='text-lg mt-2 text-zinc-500'>{items.para}</p>
        </div>

    </div>
</div>

    )
  })
  
  return (
    <section>
    <div className=' max-w-[1400px] mx-auto  px-10 py-30 '>
        <div className='flex md:flex-row flex-col gap-y-10'>
          <div>
          <div>
            <Heading  highlight = 'About' heading='Us'/>
          </div>
              <div>
            <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima veritatis ab blanditiis dolorem maxime ratione, totam eligendi praesentium repellat tempore veniam laboriosam. Autem, ex sed! Natus recusandae ad veritatis assumenda earum impedit, facere reiciendis quod quaerat explicabo quis id adipisci saepe iure tempore nihil fugiat repellendus eos odit aspernatur doloribus libero reprehenderit ut! Iusto repellendus quidem adipisci nobis deleniti perspiciatis!</p>
              </div>
            <div className='mt-5'>
            <Button content='Learn more'/>
            </div>
            </div>
         <div>
              <div>
                 <img className='rounded-lg' src={all} alt="" />
              </div>
            </div>
        </div>
         
         {/* aboutservice */}
          <div className='flex md:flex-row flex-col items-center md:mt-15 justify-center gap-5 mt-4 md:gap-50'>
            {renderabout}
          </div>
          
    </div>
    </section>
  )
}

export default AboutUs


const aboutus =[
  {
    id :1,
    icon :<FaStopwatch/>,
    heading:'Fast Delivery',
    para :'Get a hot and fresh food'

  },
  {
    id :2,
    icon :<FaStar/>,
    heading:'Top Quality',
    para :'Get a hot and fresh food'

  },
  {
    id :3,
    icon :<FaHeadphones/>,
    heading:'24/7 Support',
    para :'Get a hot and fresh food'

  }
]