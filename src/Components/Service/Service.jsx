import React from 'react'
import { FaCarSide, FaCheckCircle, FaHeadset, FaWallet } from "react-icons/fa";




// service map

const service = [
    {Id:'1',Icon:<FaCarSide className=' text-4xl md:text-5xl text-primary'/>,title:'Free Shipping',Description:'Free All order Shipping'},
    {Id:'2',Icon:<FaCheckCircle className=' text-4xl md:text-5xl text-primary'/>,title:'Safe Money',Description:'30 Days Money Back'},
    {Id:'3',Icon:<FaWallet className=' text-4xl md:text-5xl text-primary'/>,title:'Secure Payment',Description:'All Payment Secure'},
    {Id:'4',Icon:<FaHeadset className=' text-4xl md:text-5xl text-primary'/>,title:'Online Support 24/7',Description:'Technical Support 24/7'},
]




const Service = () => {

    
  return (
    <div>

      <div className='container my-14 md:my-8'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
           {
            service.map((data)=>(

                <div  key={data.Id} className=' flex flex-col items-start sm:flex-row gap-4 gap-y-8'>
                    {data.Icon}
                    <div>
                        <h1 className=' lg:text-xl font-bold'>{data.title}</h1>
                        <h1 className=' text-sm font-semibold text-gray-500'>{data.Description}</h1>
                    </div>
                </div>
            


            ))}
        </div>
      </div>

    </div>
  )
}

export default Service