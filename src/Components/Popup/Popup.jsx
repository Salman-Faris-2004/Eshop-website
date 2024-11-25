import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import Buttons from '../Shared/Buttons/Buttons';


const Popup = ({OrderPopup,handlePopup}) => {
  return (
   <>
   {
    OrderPopup&&(
        <div>
        <div className=' h-screen w-screen top-0 fixed left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className=' w-[300px] rounded-xl shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4  bg-white dark:bg-gray-900 dark:text-white duration-200'>
                {/* Header section */}
                <div className=' flex items-center justify-between'>
                    <h1>Order Now</h1>
                    <div>
                    <IoMdCloseCircle onClick={handlePopup}  className=' text-2xl cursor-pointer' />

                    </div>
                </div>
                {/* Form section */}
                <div className=' mt-7 p-2'>
                    <input type="text" placeholder='Name' className=' form-input' />
                    <input type="email" placeholder='Email' className=' form-input' />
                    <input type="text" placeholder='Address' className=' form-input' />
                </div>
                <div className=' flex items-center justify-center'>
                    <Buttons text={'Order Now'} bgcolor={'bg-primary'} textColor={'text-white'}/>
                </div>
            </div>
        </div>
    </div>
    )
   }
   
   
   
   </>
  )
}

export default Popup