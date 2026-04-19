import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgcultural from '../../assets/cultural.png'
const DesiFood = () => {
  return (
    <div>
      <CategoryPage title = 'Desi Food' bgimage = {bgcultural} categories={['cultural']}/>
       
    </div>
  )
}

export default DesiFood
