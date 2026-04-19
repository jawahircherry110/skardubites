import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import thali from '../../assets/thali.png'


const Values = () => {

       const leftValues = value.slice(0,2).map(item=>{

        return(
            <div className='flex md:flex-row-reverse items-center gap-7' key={item.id}>
                <div>
                    <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-white text-3xl'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 3xl font-bold'>
                   {item.title}
   
                    </h3>
                    <p className='text-zinc-800 mt-2'>{item.para}</p>
                </div>
               
               
            </div>
        )

       })

const rightValues = value.slice(2,4).map(item=>{

        return(
            <div className='flex items-center gap-7' key={item.id}>
                <div>
                    <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-white text-3xl'>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 3xl font-bold'>
                   {item.title}
   
                    </h3>
                    <p className='text-zinc-800 mt-2'>{item.para}</p>
                </div>
               
               
            </div>
        )

       })

  return (
   <section>
     <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight = 'Our' heading = 'Values'/>

        <div className='flex md:flex-row  flex-col  gap-15 md:gap-3 mt-15'>
            {/* leftcontent */}
          <div className='md:min-h-100 gap-15 flex flex-col justify-between' >
                 {leftValues}
          </div>
          {/* centercontent */}
            <div className='md:flex w-1/2 hidden'>
                <img src={thali} alt="" />
            </div>
            {/* RightContent */}
            <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                  {rightValues}
            </div>
        </div>
    </div>
   </section>
   
  )
}

export default Values
const value = [
    {
        id :1,
        title : 'Trust',
        para :'“We ensure quality, freshness, and fast delivery, making every order reliable, safe, and satisfying for you.”',
        icon :<FaHeart/>
    },
     {
        id :2,
        title : 'Always Fresh',
        para :'We deliver freshly prepared meals using quality ingredients, ensuring every bite is full of flavor.',
        icon :<FaLeaf/>
    },
     {
        id :3,
        title : 'Food Safety',
        para :'We deliver freshly prepared meals using quality ingredients, ensuring every bite is full of flavor.',
        icon :<FaShieldAlt/>
    },
   {
        id :4,
        title : '100% Organic',
        para :'“We deliver freshly prepared meals using quality ingredients, ensuring every bite is full of flavor.”',
        icon :<FaSeedling/>
    }
]