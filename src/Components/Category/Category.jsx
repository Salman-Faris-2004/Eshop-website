import React from 'react'
import image1 from './../../assets/category/earphone.png'
import image2 from './../../assets/category/watch.png'
import image3 from './../../assets/category/macbook.png'
import Buttons from '../Shared/Buttons/Buttons';



const category = () => {
  return (
    <div className='py-8'>

        <div className='container'>
           
        <div   data-aos='zoom-in'  className='  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
    {/* First col */}
     <div    data-aos='fade-up' className='py-0 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex
        items-end '>
          
          <div className='mb-4'>
           
            <div>
                
               <p className='text-gray-500 mb-[2px] '>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl font-bold mb-2 lg:text-5xl opacity-20'>Earphone</p>
           
             <Buttons text={'Browse'} bgcolor={'bg-primary'} textColor={'text-white'}/>
          
            </div>
           
            <div>
            <img className='w-[320px] absolute bottom-0' src={image1} alt="" />
           </div>
         
          </div>
         

        </div>
    {/* second col */}

    <div   data-aos='fade-up' className='py-1 pl-4 sm:p-30 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex
        items-end '>
          
          <div className='mb-4'>
           
            <div>
                
               <p className='text-white mb-[2px] '>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl font-bold mb-2 lg:text-5xl opacity-40 '>Gadget</p>
           
             <Buttons text={'Browse'} bgcolor={'bg-white'} textColor={'text-brandYellow'} />
          
            </div>
           
            <div>
            <img className='w-[320px]  absolute -right-4 top-24 lg:top-[40px]' src={image2} alt="" />
           </div>
         
          </div>
         

        </div>


    {/* Third col */}

    <div   data-aos='fade-up' className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end '>
          
          <div className='mb-4'>
           
            <div>
                
               <p className='text-white mb-[2px] '>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl font-bold mb-3 lg:text-5xl opacity-40 '>Laptop</p>
           
             <Buttons text={'Browse'} bgcolor={'bg-white'} textColor={'text-primary'} />
          
            </div>
           
            <div>
            <img className='w-[260px] absolute top-1/2 -translate-y-1/2 right-0 ' src={image3} alt="" />
           </div>
         
          </div>
         

        </div>



           </div>
       
        </div>


        
    </div>
  )
}

export default category