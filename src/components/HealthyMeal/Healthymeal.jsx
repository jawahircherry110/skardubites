import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgchinese from '../../assets/chinese.png'
const Healthymeal = () => {
  return (
    <div>
      <CategoryPage title = 'Healthy Meals' bgimage = {bgchinese} categories={['chinese']}/>
      
    </div>
  )
}

export default Healthymeal
