import React from 'react'
import Buttons from '../Shared/Buttons/Buttons'


const ProductCard = ({data}) => {
  return (
    <div className='mb-10'>
   <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
      {/* card Section */}

        {data.map((data)=>(
            <div data-aos='fade-up'  data-aos-deley={data.aosDeley} className='group' key={data.id} >
              <div  className=' relative'>
                <img className='h-[180px] w-[220px] object-cover rounded-md' src={data.image} alt="" />

                  {/* Hover Button */}
             
                  <div className=' hidden group-hover:flex absolute top-0 left-3 lg:left-[-20px]  w-full h-full justify-center items-center backdrop-blur-sm duration-300'>
                   <Buttons text={'Add to Cart'} bgcolor={'bg-primary'} textColor={'text-white'} />
                    </div>
                 
                     </div>
            
              
               {/* Product descriptions */}
                <div className='leading-7'>
                    <h2 className='font-semibold text-gray-500'>{data.title}</h2>
                    <p className='font-bold'>${data.Price}</p>
                </div>


            </div>
        ))}

      </div>
   
    </div>
  )
}

export default ProductCard