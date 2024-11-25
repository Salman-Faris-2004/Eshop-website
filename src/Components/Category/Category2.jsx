import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import image1 from './../../assets/category/vr.png';
import image2 from './../../assets/category/speaker.png';
import image3 from './../../assets/category/gaming.png';
import Buttons from '../Shared/Buttons/Buttons';

const Category2 = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true,     // Only animate once when scrolling
    });
  }, []); // Empty dependency array ensures AOS only initializes once on mount

  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* First Column */}
          <div 
            data-aos='zoom-in' 
            className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/70 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
            
            <div className='mb-4'>
              <div>
                <p className='text-gray-500 mb-[2px]'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl font-bold mb-3 lg:text-5xl opacity-70 uppercase'>Console</p>
             </div>
              <div>
                <img className='w-[260px] absolute top-1/2 -translate-y-1/2 right-0' src={image3} alt="Gaming Console" />
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div 
            data-aos='fade-up' 
            className='py-0 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen text-white rounded-3xl relative h-[320px] flex items-start'>
            
            <div className='mb-4'>
              <div>
                <p className='text-white mb-[7px]'>Enjoy</p>
                <p className='text-2xl font-semibold'>With</p>
                <p className='text-4xl font-bold lg:mb-[17px] lg:text-5xl opacity-20 uppercase'>Oculus</p>
                <Buttons text={'Browse'} bgcolor={'bg-white'} textColor={'text-brandGreen'} />
              </div>
              <div>
                <img className='w-[300px] absolute right-3 bottom-0' src={image1} alt="VR Headset" />
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div 
            data-aos='fade-up' 
            className='py-0 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue text-white rounded-3xl relative h-[320px] flex items-start'>
            
            <div className='mb-4'>
              <div>
                <p className='text-white mb-[2px]'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl font-bold mb-2 lg:text-5xl opacity-40 uppercase'>Speakers</p>
                <Buttons text={'Browse'} bgcolor={'bg-white'} textColor={'text-brandBlue'} />
              </div>
              <div>
                <img className='w-[200px] absolute bottom-0 right-0' src={image2} alt="Speakers" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category2;
