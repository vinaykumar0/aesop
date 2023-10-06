import React from 'react'

const Resuse = ({img,head,desc}) => {
  return (
      <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <div className='w-[90%]'>
              <img src={img} alt="" />
          </div>
          <div className='flex flex-col gap-2 items-center'>
              <p className='text-base font-medium underline'>{head}</p>
              <p className='text-sm font-normal'>{desc}</p>
          </div>
    </div>
  )
}

export default Resuse