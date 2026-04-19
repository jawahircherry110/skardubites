import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../../components/ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title ,bgimage,categories=[]}) => {
  let filteredItems = categories.includes('All')
  ? ProductList
  :ProductList.filter(item=> categories.includes(item.category))
    const renderProduct = filteredItems.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price} />

        )
    })
  return (
    <div>
      <Banner title = {title } bgimage = {bgimage}/>
      <div className='grid  md:grid-cols-4 sm:grid-cols-1 py-20 gap-9 max-w-[1400px] px-10 mx-auto'>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage
