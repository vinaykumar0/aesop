import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const Heros = ({heading,subHead,desc,btn}) => {
  return (
      <div>
          <div className='flex mx-auto justify-around mt-[70px]'>
              <div className=''>
                  <h1 className='text-3xl'>Aesop </h1>
              </div>
              <div className='w-[60%] flex flex-col gap-5'>
                  <h6 className='text-sm font-medium'>{heading }</h6>
                  <h1 className='text-3xl font-medium'>{subHead}</h1>
                  <p className='text-base'>{desc }</p>
                  <button className='flex items-center w-[300px] justify-between border-[1px] border-black py-4 px-4 mt-2'>
                      <span className='text-base'>{btn }</span>
                      <BsArrowRightShort className='text-xl'/></button>
              </div>
          </div>
    </div>
  )
}

export default Heros