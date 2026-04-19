import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFastfood from '../../assets/pakistani.png'

const FastFood = () => {
  return (
    <div>
      <CategoryPage title = 'Fast Food' bgimage = {bgFastfood} categories={['pakistani']}/>
    </div>
  )
}

export default FastFood

