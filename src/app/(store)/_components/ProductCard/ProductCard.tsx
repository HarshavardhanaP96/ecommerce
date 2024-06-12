import React from 'react'
import Image from 'next/image'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import Rating from './Ratings/Rating'



const ProductCard= ()=> {

  interface ProductProperties{
    id:number
    image:string[];
    star:number;
    name: string
    description:string;
    price:number;
  }
  
  const product=[
    {
      id:1,
      star:4.7, 
      name:"Product Name", 
      description:"CSS properties effectively truncate a single line of text or multi-line text spanning two lines or fewer. But it is also possible to achieve text truncation for multi-line text using JavaScript.",
      price:30000,
      image:["/try.jpg"]
    }
  ]

  return (
  
      <>
        <div className="min-h-80 w-60 bg-slate-900 border-1 border-slate-600 rounded-md p-2 drop-shadow-lg text-slate-200 mt-10 ml-10">
            
          <div className='h-36'>
            <Image src={product[0].image[0]} alt={product[0].name} width={250} height={187.5} className='rounded-md mb-2 '/>
          </div>
  
          <h3 className='flex w-full h-6 items-center my-2 text-m font-medium '>{product[0].name}</h3>
  
          <p className='w-full h-12 rounded-md 
          my-2 text-xs font-small 
          text-wrap truncate'>{product[0].description}</p>
  
  
          <Rating star={product[0].star}/>
  
          <div className='flex justify-between text-slate-900'>
            <span className='flex items-center justify-center w-20 h-8
              bg-white rounded-md '>$1,268</span>
            <span className='flex items-center justify-center w-8 h-8
              bg-white rounded-md cursor-pointer' > <MdOutlineAddShoppingCart/> </span>
          </div>
  
        </div>
  
      </>
  )
}

export default ProductCard
