
import { IoStarSharp } from 'react-icons/io5';
import Heading from '../Heading/Heading';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



const Testimonials = () => {


  let renderReviews = CustomerReviews.map(reviews=>{
    return (
  <div className='min-w-[320px] max-w-[320px] shrink-0 bg-zinc-100 p-8 rounded-xl'>
        <div className='flex gap-3'>
          <div className=' '><img className='h-17 w-17 rounded-full' src={reviews.image} alt="" /></div>
            <div className=' mt-5 gap-2'>
              <h3 className='text-xl font-bold text-zinc-800'>{reviews.name}</h3>
              <h4 className='text-lg font-semibold text-zinc-500'>{reviews.profession}</h4>
              <span className='flex text-yellow-500'>{reviews.review}</span>
            </div>
        </div>
           <div>
          <p>{reviews.para}</p>
          </div>
      </div>  

    )
  })
  return (
   <section className=' max-w-[1400px]  px-10 mx-auto py-20'>
     <div>
      <Heading highlight = 'Customers' heading = 'Sayings' />
      {/* <div className='flex justify-end gap-3 mt-5'>
        <button  className='bg-zinc-100 px-2 rounded-lg py-2flex justify-center items-center text-lg hover:text-white hover:bg-gradient-to-b from-orange-400 hover:to-orange-500'><IoIosArrowBack/></button>
        <button  className='bg-zinc-100 hover:text-white px-2 py-2 rounded-lg flex justify-center items-cente text-lg hover:bg-gradient-to-b from-orange-400 hover:to-orange-500'><IoIosArrowForward/></button>
      </div> */}
    
        <div className='flex gap-10 mt-20 scroll-smooth overflow-x-auto scrollbar-hide'>
          {renderReviews}
        </div>
    </div>
   </section>
  )
}

export default Testimonials

const CustomerReviews = [
  {
    id :1,
    name :'Jawahir',
    image : 'https://media.istockphoto.com/id/2213659186/photo/smiling-businessman-walking-outside-office-building-holding-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Df2-Xa-lSTyLWxUWY5xJmiu9Ha5lkISx4zBmSSSyiTM=',
    profession :'Doctor',
    review :<><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>
,
    para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora perspiciatis ex sequi alias qui ad consequuntur, optio mollitia labore!'

  },
  {
    id :2,
    name :'Cherry',
    image : 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    profession :'FoodVloger',
    review :<><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
    para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora perspiciatis ex sequi alias qui ad consequuntur, optio mollitia labore!'

  },
  {
    id :3,
    name :'zohaha',
    image : 'https://media.istockphoto.com/id/2225031969/photo/portrait-smile-and-confident-business-woman-in-corporate-office-for-ambition-finance-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=6cx7OTGdgu_Uz8Qx27E-_IsqV1htETr4zg8Do2A4TI0=',
    profession :'designer',
    review :'quality food',
    para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora perspiciatis ex sequi alias qui ad consequuntur, optio mollitia labore!'

  },
   {
    id :4,
    name :'Cherry',
    image : 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    profession :'Developer',
    review :<><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
    para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora perspiciatis ex sequi alias qui ad consequuntur, optio mollitia labore!'

  }, {
    id :5,
    name :'Cherry',
    image : 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    profession :'Developer',
    review :<><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
    para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora perspiciatis ex sequi alias qui ad consequuntur, optio mollitia labore!'

  },
]