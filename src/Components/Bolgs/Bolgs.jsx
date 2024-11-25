import React from 'react'
import Heading from '../Shared/Heading/Heading'

// images  

import blogImg1 from '../../assets/bolgs/blog-1.jpg';
import blogImg2 from '../../assets/bolgs/blog-2.jpg';
import blogImg3 from '../../assets/bolgs/blog-3.jpg'

const BolgData = [{title:'How to Choose Perfect Smartwatch',subTitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',Published:'Jan 20/2024 By John Done',img:blogImg1, aosDelay:'0'},
                  {title:'How to Choose Perfect Smartwatch',subTitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',Published:'Jan 20/2024 By John Done',img:blogImg2, aosDelay:'200'},
                  {title:'How to Choose Perfect Smartwatch',subTitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',Published:'Jan 20/2024 By John Done',img:blogImg3, aosDelay:'400'},
                   ]

const Bolgs = () => {
  return (
    <div className=' my-10'>
        <div className='container'>
        {/* heading section */}
        <div>
        
        <Heading title={'Recent News'} subtitle={'Explore Oru Blogs'} />
       
        </div>
        
        {/* Body Section  */}

         <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-6 md:gap-8'>
     
             {BolgData.map((data)=>(
           
              <div  data-aos='fade-up'  data-aos-deley={data.aosDeley} key={data.title} className='bg-white dark:bg-gray-900'>
                {/* Image section  */}
                <div className='overflow-hidden rounded-2xl mb-3' >
                    <img className='w-full h-[220px]  object-cover hover:scale-110 duration-300' src={data.img} alt="" />
                </div>

                {/* Content Section */}

                <div className='space-y-2'>
                    <p className='font-bold text-xs text-gray-500'>{data.Published}</p>
                    <p className='text-sm font-semibold line-clamp-1'>{data.title}</p>
                    <p className='text-sm line-clamp-2'>{data.subTitle}</p>
                </div>

              </div>
              
                
            
          
 
               

             ))}

         </div>
     </div>
    </div>
  )
}

export default Bolgs