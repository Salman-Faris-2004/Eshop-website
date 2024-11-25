import React from 'react';
import Buttons from '../Shared/Buttons/Buttons';

const Banner = ({ data }) => {
  return (
     
    <div className=' min-h-[550px] justify-center items-center py-12'>
        <div className='container'>
            <div style={{background: data.bgColor}}  className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center  text-white rounded-3xl'>
             
              {/* First section */}
                 <div className=' p-6 sm:p-8'>
                    <p data-aos='slide-right' className='text-sm font-semibold'>{data.discount}</p>
                    <h1 data-aos='zoom-out' className='text-4xl uppercase lg:text-7xl font-bold'>{data.title}</h1>
                    <p data-aos='fade-up' className='text-sm font-semibold'>{data.date}</p>
                 </div>
              
               {/* second section */}

               <div data-aos='zoom-in  ' className='h-full flex items-center '>
                <img className=' scale-125 w-[250px] md:w-[330px] mx-auto drop-shadow-2xl object-cover' src={data.image} alt="" />
               </div>
               
               
                {/* Third section */}

                <div className='flex flex-col p-6 sm:p-8 gap-5'>
                  <h1 data-aos='zoom-out' className=' text-xl font-bold'>{data.title2}</h1>
                  <p  data-aos='fade-up'  className='text-sm tracking-wide leading-5'>{data.title3}</p>
                  <p  data-aos='fade-up' className='text-sm'>{data.description}</p>
                 <div  data-aos='fade-up'  data-aso-offset='0'>
                    <Buttons text={'Shop Now'} bgcolor={'bg-white'} textColor={'text-primary'}/>
                  </div>


                </div>
            </div>
        </div>
    </div>

  );
}

export default Banner;
