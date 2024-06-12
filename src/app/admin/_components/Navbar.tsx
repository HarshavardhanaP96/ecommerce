'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuUsers2 } from 'react-icons/lu';
import { MdOutlineInventory2, MdOutlineProductionQuantityLimits, MdOutlineSpaceDashboard } from 'react-icons/md';

const Navbar = () => {

  const [sideBarOpen, setSideBarOpen]= useState(true);
  const router =useRouter();

  interface MenuItems{
    title: String;
    icon: JSX.Element;
    SubMenu?: boolean;
    SubMenuItems?:MenuItems[];
    router:string;
  }

  const Menus: MenuItems[]=[
    {title:'Dashboard',icon:<MdOutlineSpaceDashboard/>,router:"/Dashboard" },
    {title:'Users',icon:<LuUsers2 />,router:"/Users" },
    {title:'Products',icon:<MdOutlineProductionQuantityLimits/>,router:"/Products" },
    {title:'Orders',icon:<BiPurchaseTagAlt />,router:"/Orders" },
    {title:'Inventory',icon:<MdOutlineInventory2 />,router:"/Inventory" },
    {title:'Settings',icon:<IoSettingsOutline />,router:"/Settings" },

  ]

  return (
    <div className={`h-screen ${sideBarOpen? "w-48":"w-18"} bg-blue-800 px-4 py-6 relative`}>
      
      <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full 
      absolute -right-3 top-9 border-black border-2
      ${!sideBarOpen && "rotate-180"}`}
      onClick={()=>setSideBarOpen(!sideBarOpen)}/>
      
      <ul>
        {Menus.map((menu, index) =>(
          <>
            <li key={index}className='text-white text-sm gap-x-4 
            flex items-center cursor-pointer p-2 
            hover:bg-blue-400 rounded-md' onClick={()=>router.push(`http://localhost:3000/admin/${menu.router}`)}>
              
              <span className='text-2xl block float-left'>{menu.icon}</span>

              <span className={`text-base font-medium flex-1 ${!sideBarOpen && "hidden"}`}>{menu.title}</span>

            </li>
          </>
        ))}
        
      </ul>
    </div>
  )
}

export default Navbar
