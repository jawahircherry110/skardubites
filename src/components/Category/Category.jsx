import React from 'react'
import Heading from '../Heading/Heading'
import fastFood from '../../assets/fastfood.png'
import Healthymeals from '../../assets/Healthymeals.png'
import desifood from '../../assets/desifood.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Category = () => {
    const renderCards = category.map(card=>{
        return(
            // Card
            <div className='flex-1 mt-5 basis-[300px]' key={card.id} >
                {/* card-image */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} className='absolute bottom-0' alt="" />
                </div>
                {/* card-content */}
                <div className='bg-zinc-100 pt-5 p-4 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold mt-15'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                      <Link className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer' to={card.path}>View All</Link>
                  
                   
                </div>
            </div>

        )
    })
  return (
  <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20 '>
        <Heading highlight = "Shop" heading =  "By Category"/>

        <div className='flex flex-wrap gap-10 md:mt-10 mt-8'> 
            {renderCards}
        </div>
      </div>
  </section>
  )
}

export default Category
const category =  [
       {
        id : 1,
        title:'Fast Food',
        description:'Quick, tasty, and satisfying meals like burgers, fries, and pizzas—perfect for instant cravings.',
        image : fastFood,
        path:'/fastfood'
       },
        {
        id : 2,
        title:'Desi Food',
        description:'Traditional Pakistani flavors with rich spices and authentic taste, made fresh for every meal.',
        image : desifood,
        path :'/desifood'
       },
        {
        id : 3,
        title:'Healthy Meals',
        description:'Light, fresh, and nutritious dishes for a balanced lifestyle without compromising on taste.',
        image : Healthymeals,
        path:'healthymeal'

       }

]
