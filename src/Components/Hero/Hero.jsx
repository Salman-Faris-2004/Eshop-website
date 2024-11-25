import React from 'react'
import Slider from "react-slick";
import image1 from '../../assets/hero/headphone.png';
import image2 from '../../assets/hero/vr.png';
import image3 from '../../assets/hero/macbook.png';
import Buttons from '../Shared/Buttons/Buttons';

const HeroData = [
    { id: 1, image: image1, subtitle: 'Beats Solo', title: 'Wireless', title2: 'Headphone' },
    { id: 2, image: image2, subtitle: 'Beats Solo', title: 'Wireless', title2: 'Virtual' },
    { id: 3, image: image3, subtitle: 'Beats Solo', title: 'Branded', title2: 'Laptops' },
]

const Hero = ({handlePopup}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color items-center justify-center flex'>

                <div className='container pb-8 sm:pb-0 '>
                    {/* Hero Section */}
                    <Slider {...settings}>

                        {HeroData.map((data) => (

                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>

                                    {/* Text content */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-3xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl uppercase sm:text-[80px] md:text-[100px] lg:text-[150px] font-bold text-white dark:text-white/5'>{data.title2}</h1>
                                        <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='500' data-aos-delay='300'>
                                            <Buttons text={'Shop By Category'} bgcolor={'bg-primary'} textColor={'text-white'} handlePopup={handlePopup} />
                                        </div>
                                    </div>

                                    {/* Hero Image */}
                                    <div className='order-2 sm:order-1'>
                                        <div data-aos='zoom-in' data-aos-once='true' className='relative z-10'>
                                        <img className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[8px_4px_6px_rgba(0,0,0,0.4)] relative z-40' src={data.image} alt="" />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Hero;
