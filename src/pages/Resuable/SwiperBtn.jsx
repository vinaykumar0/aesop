import React, { useRef } from 'react'
import { useSwiper } from 'swiper/react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { HiPlay } from 'react-icons/hi'
const SwiperBtn = (props) => {
    const swip = useSwiper()

    
  return (
      <div className='flex items-center justify-center gap-4'>
          <button onClick={() => swip.slidePrev()} className='text-2xl font-thin'> <MdKeyboardArrowLeft /></button>
          <div>{props.children}</div>
          <button onClick={() => swip.slideNext()} className='text-2xl font-thin'><MdKeyboardArrowRight /></button>
      </div>
  )
}

export default SwiperBtn