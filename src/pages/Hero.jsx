import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Hero1 from '../components/assests/hero1.avif'
import Hero2 from '../components/assests/hero2.avif'
import Hero3 from '../components/assests/hero.avif'
import { BsArrowRightShort } from 'react-icons/bs'
import SwiperBtn from './Resuable/SwiperBtn';

import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Heros from './Resuable/Heros';

const Hero = () => {
  
  return (
    <>
      <Swiper
        infinite={true}
        speed={1000}
        loop={true}
        autoplay={{
          el:'swiper-autop',
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{
          el: '.swiper-paginations',
          type:'fraction'
        }}
        slidesPerView={1}
        className="myswiper w-full"
      modules={[Pagination,Navigation,Autoplay]}
      >
        
        <SwiperSlide className='w-full'>
          <div className='bg-[rgb(246, 245, 232)] md:flex md:flex-col'>
            <div className='relative'>
              <img src={Hero3} alt=""/>
            </div>
            <div className='absolute top-[60px] flex gap-16 text-white mx-auto'>
              <div className='ml-10'>
                <h1 className='text-4xl'>Aesop</h1>
              </div>
              <div className='w-[28%] flex flex-col gap-5'>
                <h6 className='text-sm font-medium'>A new Othertopias fragrance</h6>
                <h1 className='text-3xl font-medium'>Ouranon Eau de Parfum</h1>
                <p className='text-base'>A fragrance that evokes a silent monolith, the last vestige of a stone
                  circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                  <button className='flex items-center w-[260px] justify-between border-2 border-blue-50 py-3 px-4 mt-2'>
                    <span className='text-base'>Discover Quranon</span>
                  <BsArrowRightShort /></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className='relative'>
            <img src={Hero1} alt="" />
          </div>
          <div className='absolute top-[60px] flex gap-16 text-white mx-auto'>
            <div className='ml-10'>
              <h1 className='text-3xl'>Aesop</h1>
            </div>
            <div className='w-[28%] flex flex-col gap-5'>
              <h6 className='text-sm font-medium'>Hand and Body Care</h6>
              <h1 className='text-3xl font-medium'>Buoyant bodies</h1>
              <p className='text-base'>Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by
                formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all.</p>
              <button className='flex items-center w-[300px] justify-between border-2 border-blue-50 py-4 px-4 mt-2'>
                <span className='text-base'>Discover Body & Hand Care</span>
                <BsArrowRightShort /></button>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>
          <div className='flex'>
            <Heros heading={"Suporting city skin"} subHead={"Parsley Seed Anti-Oxident Intense Serum"}
              desc={"Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind"}
            btn={"Discover the formulation"}/>
            <div className='h-[500px] w-[90%]'>
              <img src={Hero2} alt="" height={100} width={100}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperBtn >
          <div className='swiper-paginations font-mono'>
          </div></SwiperBtn>
</Swiper>
    </>
  )
}

export default Hero