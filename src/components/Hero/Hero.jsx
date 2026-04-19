import React from 'react'
import thali from '../../assets/thali.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='max-w-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'>
           {/* HeroContent */}
           <div className='flex-1'>
              <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Experince Delicios Dishes...</span>
                  <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
                    Taste Organic <span className='text-orange-500'>Dishes</span> & <span className='text-orange-500'>Deserts</span>  <br /> in your Skardu
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                        Fresh, delicious meals from Skardu delivered fast to your doorstep, anytime you crave great food.
                     </p>
                     <Button content = "Shop Now"/>
           </div>
           {/* HeroImage */}
           <div className='flex-1'>
            <img src={thali} alt="" />
           </div>
        </div>
    </section>
  )
}

export default Hero
