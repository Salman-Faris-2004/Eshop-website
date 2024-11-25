import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Darkmode from './Darkmode';

const menuLinks = [
    { id: '1', name: 'Home', link: '/#' },
    { id: '2', name: 'Shop', link: '/#shop' },
    { id: '3', name: 'About', link: '/#about' },
    { id: '4', name: 'Blogs', link: '/#blog' },
];

const DropdownLinks = [
    { id:'1', name: 'Trading Products',link: '/#' },
    { id:'2', name: 'Best Selling',     link: '/#' },
    { id:'3', name: 'Top Rated',        link: '/#' },

]

const Navbar = ({handlePopup}) => {
    return (
 <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
   <div className='py-4'>
     <div className="container flex justify-between items-center">
         {/* Logo and links section */}
         <div className='flex items-center gap-4'>
             <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                 {/* Menu Items */}
            <div className='hidden lg:block sm:block'>
             <ul className='flex gap-4 items-center'>
                     {menuLinks.map((data, index) => (
                     <li key={data.id}>
             <a className='font-semibold inline-block px-4 text-gray-500 hover:text-black dark:hover:text-white duration-200' href={data.link}>{data.name}</a>
                   </li>
                  ))}
              {/* Dropdown */}
                                
          <li className='relative cursor-pointer group'>
      <a href="#" className='flex items-center justify-center gap-1  font-semibold hover:text-black text-gray-500 dark:hover:text-white py-2' >Quick Links<span className=''><FaCaretDown className='group-hover:rotate-180 duration-300'/></span></a> 
                                 
     {/* Dropwon Links */}
                                 
 <div className='absolute z-[9999] w-[200px] hidden  group-hover:block rounded-md shadow-md bg-white dark:bg-gray-900 p-2 text-black   dark:text-white dark:hover:text-black '>

  <ul className='space-y-2'>
       {DropdownLinks.map((data)=>(

    <li key={data.id}><a className='text-gray-600 hover:text-black dark:text-white dark:hover:text-black duration-200 w-full p-2 inline-block rounded-md bg-primary/20 font-semibold text-[13px]' href={data.name}>{data.name}</a></li>



     ))}
    </ul>


     </div>

  </li>
     </ul>
     </div>
         </div>

           {/* Navbar right section */}
       <div className='flex items-center gap-4'>
             {/* Search Bar section */}
                  <div className='relative items-center group hidden sm:flex'>
                            <input 
                                type="text" 
                                placeholder='Search' 
                                className='Search-bar pl-10' // Adds padding to avoid overlap with icon
                            />
                            <CiSearch className='absolute group-hover:text-primary duration-200 left-3 text-xl text-gray-600 dark:text-gray-300' />
                        </div>

                        {/* Cart Button Section */}
                        <div className='relative'>
                            <button className='relative' onClick={handlePopup}>
                                <FaShoppingCart className='text-2xl text-gray-600 dark:text-gray-400' /> 
                                {/* Cart notification badge */}
                                <div className='absolute -top-1 -right-2 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-semibold'>
                                    4
                                </div>
                            </button>
                        </div>

                        {/* Dark mode section */}
                        <div>
                            <Darkmode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
