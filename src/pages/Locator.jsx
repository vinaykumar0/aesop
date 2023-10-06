import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRightShort } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import Locator1 from '../components/assests/locator1.avif'
import Locator2 from '../components/assests/locator2.jpg'
import Locator3 from '../components/assests/locator3.avif'
import Loc from './Resuable/Loc';

const Locator = () => {
  return (
      <div className='flex w-full'>
          <div className='w-full ml-[50px] mt-[77px]'> 
              <h1 className='text-2xl font-medium mb-9'>Store Locator</h1>
              <p className='text-base mb-5'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
              <div>
                  <button className='flex justify-around items-center w-[240px] bg-[rgba(51,51,51,.2)] py-3 px-1'><span>Find a nearby store</span>
                      <BsArrowRightShort />
                  </button> 
              </div>
          </div>
          <div className='flex w-full p-16'>
              <Swiper
                  slidesPerView={1}
                  infinite={true}
                  speed={1000}
                  loop={true}
                  autoplay={true}
                  keyboard={{
                      enabled: true,
                  }}
                  scrollbar={true}
                  navigation={false}
                  modules={[Scrollbar, Keyboard, Navigation]}
                  className="myswiper w-[75%] relative group"
              >
                  <SwiperSlide className='px-1 py-12'><img src={Locator3} alt='loctor1' />
                  </SwiperSlide>
                  <SwiperSlide className='px-1 py-12'><img src={Locator2} alt='loctor1' /></SwiperSlide>
                  <SwiperSlide className='px-1 py-12'><img src={Locator1} alt='loctor1' /></SwiperSlide>
                  <div className=''>
                  <Loc/>
                  </div>  
              </Swiper>
          </div>
 </div>
  )
}

export default Locator