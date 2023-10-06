import React from 'react'
import { useSwiper } from 'swiper/react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Arraw = () => {
    const swip = useSwiper()


    return (
        <div className='flex justify-between items-center'>
            <button onClick={() => swip.slidePrev()} className='text-3xl font-thin top-[45%] absolute z-10 group-hover:left-0 -left-[23rem] 
            bg-[#252525] h-[80px] w-[77px] text-center text-white duration-500 '> <MdKeyboardArrowLeft  className='text-center ml-3'/></button>
            <button onClick={() => swip.slideNext()} className='text-3xl font-thin top-[45%] absolute z-10 group-hover:right-0 -right-[23rem] 
            bg-[#252525] h-[80px] w-[77px] text-white duration-500 '><MdKeyboardArrowRight className='text-center ml-5'/></button>
        </div>
    )
}

export default Arraw