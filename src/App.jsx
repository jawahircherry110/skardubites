import React from 'react'
import Home from './components/Home/Home'
import Allproducts from './components/AllProducts/Allproducts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import FastFood from './components/FastFood/FastFood'
import DesiFood from './components/DesiFood/DesiFood'
import Healthymeal from './components/HealthyMeal/Healthymeal'
import OrderForm from './components/OrderForm/OrderForm'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Process from './components/Process/Process'
import AdminLogin from './components/Admin/AdminLogin'
import NotFound from './components/NotFound/NotFound'


const router = createBrowserRouter([
  {
    path :'/',
    element :<Layout/>,
    children:[
      {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutus',
    element: <AboutUs />
  },
   {
    path: '/process',
    element: <Process/>
  },
   {
    path: '/contactus',
    element :<ContactUs/>
  },
  {
    path: '/allproducts',
    element: <Allproducts />
  },
  {
    path: '/fastfood',
    element: <FastFood />
  },
  {
    path: '/desifood',
    element: <DesiFood/>
  },
  {
    path: '/healthymeal',
    element: <Healthymeal/>
  },
   {
    path: '/orderform',
    element: <OrderForm/>
  },
  {
    path: '/adminlogin',
    element: <AdminLogin/>
  },
   {
    path: '*',
    element:<NotFound/> 
  }
   
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
