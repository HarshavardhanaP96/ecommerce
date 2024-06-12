import React from 'react'
import { LuLogOut } from 'react-icons/lu'
import { MdShoppingCartCheckout } from 'react-icons/md'

const TNavbar = () => {
  return (
    <div className={`flex justify-between sticky w-full h-24
     bg-slate-300 px-8 lg:px-24 py-6 
     border-b-2 border-blue-950`}>

        <span className="flex items-center justify-center 
        h-6 lg:h-12 w-6 lg:w-12
        bg-slate-800 text-white 
        rounded-md font-small">
            logo
        </span>

        <div className=" w-48 lg:w-96 h-6 lg:h-12 ">
            <input type="text" className='w-full h-full rounded-md' />
        </div>

        <div className='flex items-center justify-center h-6 lg:h-12'>
          <span className='text-3xl text-slate-800 w-6 lg:w-12 mr-4 lg:mr-2 cursor-pointer'><MdShoppingCartCheckout/></span>
          <span className='text-3xl text-slate-800 w-6 lg:w-12 cursor-pointer'><LuLogOut/></span>
        </div>
      
    </div>
  )
}

export default TNavbar
