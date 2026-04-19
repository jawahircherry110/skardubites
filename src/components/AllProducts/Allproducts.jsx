import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgall from '../../assets/all.png'

const Allproducts = () => {
  return (
    <div>
              <CategoryPage title = 'All Products' bgimage = {bgall} categories={['All']}/>
       
    </div>
  )
}

export default Allproducts
