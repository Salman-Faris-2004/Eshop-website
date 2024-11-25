import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMobile, FaPaperPlane, FaShare, FaTwitter } from 'react-icons/fa';

const ImportantLinks = [
  { links: '#', title: 'Home' },
  { links: '#', title: 'About' },
  { links: '#', title: 'Contact' },
  { links: '#', title: 'Blog' },
];

const QuickLinks = [
  { links: '#', title: 'Privacy Policy' },
  { links: '#', title: 'Terms of Service' },
  { links: '#', title: 'FAQ' },
  { links: '#', title: 'Support' },
];

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="lg:pr-24 pt-3 font-semibold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              repellat at culpa.
            </p>
            <p className="font-bold">Made with 💝 by the Coding Journey.</p>
            <div className="mt-5">
              <a
                className="mb-24 bg-primary py-2 px-5 rounded-lg text-white shadow-md"
                href="#"
              >
                Visit Our Youtube Channel
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-20 mt-10">
            <div className="py-8 px-4">
              <h1 className="font-semibold sm:text-left text-xl">Important Links</h1>
              <ul className="space-y-2">
                {ImportantLinks.map((data) => (
                  <li key={data.title}>
                    <a
                      className="text-gray-600 hover:text-gray-400 duration-300"
                      href={data.links}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="font-semibold sm:text-left text-xl">Quick Links</h1>
              <ul className="space-y-2">
                {QuickLinks.map((data) => (
                  <li key={data.title}>
                    <a
                      className="text-gray-600 hover:text-gray-400 duration-300"
                      href={data.links}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* company Address */}


           <div className='py-8 col-span-2 px-4 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
            <div>
                <div className=' flex items-center gap-3'>
                <FaPaperPlane/>
                <p> Taskforcetechnologies</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                    <FaMobile/>
                    <p>+9876543217</p>
                </div>
             
             {/* Social Icons */}
                
                <div className='flex items-center gap-3 mt-6'>
                    <a href="#"><FaInstagram className=' text-3xl hover:text-primary duration-300'/></a>
                    <a href="#"><FaFacebook className=' text-3xl hover:text-primary duration-300'/></a>
                    <a href="#"><FaLinkedin className=' text-3xl hover:text-primary duration-300'/></a>
                </div>

            </div>
           </div>






          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
