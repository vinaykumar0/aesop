import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';

import Parsley1 from '../components/assests/parsley1.webp'
import Parsley2 from '../components/assests/parsley2.webp'
import Parsley3 from '../components/assests/parsley3.webp'
import Parsley4 from '../components/assests/parsley4.webp'
import Parsley5 from '../components/assests/parsley5.webp'
import Parsley7 from '../components/assests/parsley7.webp'

import Parsley6 from '../components/assests/parsley6.avif'
import Parsley8 from '../components/assests/parsley8.avif'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import Arraw from './Resuable/Arraw';
const Parsley = () => {
    return (
        <div className='w-full relative'>
            <Swiper
                slidesPerView={3}
                // infinite={true}
                // speed={1000}
                // loop={true}
                // autoplay={true}
                keyboard={{
                    enabled: true,
                }}
                scrollbar={true}
                navigation={false}
                modules={[Scrollbar, Keyboard, Navigation]}
                className="myswiper w-full relative group"
            >
                    < SwiperSlide className='px-1 py-12 left-16'>
                        <div className='w-full cursor-pointer'>
                            <p className='text-sm font-semibold mb-2'>Parsley Seed Skin Care</p>
                            <h1 className='text-[25px] mb-5'>
                                Fortification of the highest order</h1>
                            <p className='text-base mb-9'>
                                Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
                            </p>                    <button className='flex justify-around items-center '><span>Explore the range</span>
                                <BsArrowRightShort />
                            </button>
                        </div></SwiperSlide >
                <SwiperSlide className='px-1 py-12  left-16'>
                    <div className='flex flex-col mt-32 cursor-pointer'>
                            <div className='w-[400px]'>
                                <img src={Parsley1} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 text-sm mt-6'>
                                <p className='text-base underline'>Parsley Seed Anti-Oxident Skin Care Kit</p>
                                <p>A trio of Parsley seed Staples</p>
                            </div>
                        </div>
                    </SwiperSlide>
                <SwiperSlide className='px-1 py-12 left-3 cursor-pointer'>
                        <div className='flex flex-col justify-between mt-40'>
                            <div className='w-[400px]'>
                                <img src={Parsley2} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-6'>
                            <p className='text-base underline'>Parsley Seed Anti-Oxident Eye Cream</p>
                                <p className='text-sm'>Nourishes delicate skin around eyes</p>
                            </div>
                        </div>
                    </SwiperSlide>
                <SwiperSlide className='px-1 py-12 '>
                    <div className='flex flex-col justify-between cursor-pointer'>
                            <div className='w-[330px]'>
                                <img src={Parsley3} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-4'>
                            <p className='text-base underline'>Parsley Seed Facial Cleaning Oil</p>
                                <p className='text-sm'>Gently librates skin of grime and makeup</p>
                            </div>
                        </div>
                    </SwiperSlide ><SwiperSlide className='px-1 py-12'>
                    <div className='flex flex-col justify-between cursor-pointer'>
                            <div className='w-[360px]'>
                                <img src={Parsley4} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-6'>
                            <p className='text-base underline'>Parsley Seed Facial Cleanser</p>
                                <p className='text-sm'>For those in polluted urban environments</p>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide className='px-1 py-12'>
                    <div className='flex flex-col justify-between mt-40 cursor-pointer'>
                            <div className='w-[400px]'>
                                <img src={Parsley5} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-4'>
                            <p className='text-base underline'>Parsley Seed Anti-Oxident Facial Hydrating Cream</p>
                                <p className='text-sm'>A potent, nourishing cream </p>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide className='px-1 py-12'>
                    <div className='flex flex-col justify-between cursor-pointer'>
                            <div className='w-[370px]'>
                                <img src={Parsley6} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-2'>
                            <p className='text-base underline'>Parsley Seed Anti-Oxident Hydrator</p>
                            <p className='text-sm'>Light rapidly absorbed fortification</p>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide className='px-1 py-12'>
                    <div className='flex flex-col justify-between cursor-pointer'>
                            <div className='w-[370px]'>
                                <img src={Parsley7} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-6'>
                                <p className='text-base underline'>Parsley Seed Anti-Oxident Facial Treatment</p>
                                <p className='text-sm'>Fortifies, reviews and intensely hydrates </p>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide className='px-1 py-12'>
                    <div className='flex flex-col justify-between cursor-pointer'>
                            <div className='w-[370px]'>
                                <img src={Parsley8} alt="" width={500} />
                            </div>
                            <div className='flex flex-col justify-between items-center gap-2 mt-2'>
                                <p className='text-base underline'>Parsley Seed Anti-Oxident Facial Toner</p>
                                <p className='text-sm'>For normal dry, or sensitive skin</p>
                            </div>
                        </div></SwiperSlide>
                <div className=''>
                    <Arraw />
                </div>
            </Swiper>
        </div>
    );
}

export default Parsley

