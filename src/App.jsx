import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Category2 from './Components/Category/Category2';
import Service from './Components/Service/Service';
import Banner from './Components/Banner/Banner';
import Image1 from '../src/assets/hero/headphone.png';
import Image2 from '../src/assets/hero/smartwatch.png';

import Product from './Components/Products/Product';
import Bolgs from './Components/Bolgs/Bolgs';
import Partners from './Components/partners/Partners';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
//  aos  animations

import AOS from 'aos';
import "aos/dist/aos.css"


const bannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Jan to 28 Jan',
  image: Image1,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  bgColor: '#f42c37',
};

const bannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '14 Jan to 28 Jan',
  image: Image2,
  title2: 'Smart Solo ',
  title3: 'Winter Sale',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  bgColor: '#2dcc6f',
  text:'#2dcc6f',
};
const App = () => {

  const [OrderPopup,SetOrderPopup] = useState(false);

  const handlePopup = ()=>{
    SetOrderPopup(!OrderPopup)
  }


  // AOS ANIMATIONS

  useEffect(()=>{
    AOS.init({
     duration:800,
     easing:'ease-in-sine',
     delay:100,
     offset:100,
    });
    AOS.refresh();
  },[])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white overflow-hidden duration-200'>
      <Navbar handlePopup={handlePopup} />
      <Hero handlePopup={handlePopup} />
      <Category />
      <Category2 />
      <Service />
      <Banner data={bannerData} /> {/* Passing the bannerData object as props */}
      <Product/>
      <Banner data={bannerData2} />
      <Bolgs/>
      <Partners/>
      <Footer/>
      <Popup OrderPopup={OrderPopup} handlePopup={handlePopup}/>
    </div>
  );
};

export default App;
