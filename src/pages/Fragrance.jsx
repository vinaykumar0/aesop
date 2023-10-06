import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Frag1 from '../components/assests/frag1.avif'
import Frag2 from '../components/assests/frag2.avif'
import Frag3 from '../components/assests/frag3.avif'
import Frag4 from '../components/assests/frag4.avif'
import Frag5 from '../components/assests/frag5.avif'
import Frag6 from '../components/assests/frag6.avif'
import Arraw from './Resuable/Arraw'
import { BsArrowRightShort } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import Resuse from './Resuable/Resuse';

const Fragrance = () => {
  return (
      <div> <Swiper
          slidesPerView={3}
          // spaceBetween={30}
          keyboard={{
              enabled: true,
          }}
          scrollbar={true}
          navigation={false}
          modules={[Scrollbar, Keyboard, Navigation]}
          className="myswiper realtive group"
      >
          <SwiperSlide className='px-1 py-12'>
              <div className='flex flex-col gap-4 ml-[70px]'>
                  <p className='text-base font-medium'>Fragrance</p>
                  <h1 className='text-3xl font-sans mb-2'>Our personal scents</h1>
                  <p className='text-sm font-thin'>Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.</p>
                  <button className='flex items-center mt-5'>
                      <span className='text-base'>See all Fragrance</span>
                      <BsArrowRightShort/>
                  </button>
              </div>
          </SwiperSlide>
          <SwiperSlide className='px-1 py-12'>
              <Resuse img={Frag1} head={"Quronon Eau du parfum"} desc={"Woody, spice, resinous"} />
          </SwiperSlide >
          <SwiperSlide className='px-1 py-12'>
              <Resuse img={Frag2} head={"Gloam Eau du parfum"} desc={"Floral, spice, green"} />
          </SwiperSlide>
          <SwiperSlide className='px-1 py-12'>
              <Resuse img={Frag3} head={"Eidesis Eau du parfum"} desc={"Woody, spice, ambery"} />
          </SwiperSlide>
          <SwiperSlide className='px-1 py-12'>
              <Resuse img={Frag4} head={"Eremia Eau du parfum"} desc={"A green floral, citrus fragrance"} />    
          </SwiperSlide>
          <SwiperSlide className='px-1 py-12'>
              <Resuse img={Frag5} head={"Miraceti Eau du parfum"} desc={"Resinous, woody, spice fragrance"} />
          </SwiperSlide>
          <SwiperSlide className='px-1 py-12'>
              <Resuse img={Frag6} head={"Karst Eau du parfum"} desc={"Fresh, herbaceous, marine fragrance"} />
          </SwiperSlide>
          <div className=''>
              <Arraw />
          </div>
          </Swiper>
      </div>
  )
}

export default Fragrance