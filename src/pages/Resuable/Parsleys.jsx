import React from 'react'

const Parsleys = ({image,head,desc}) => {
  return (
      <div>
          <div className='flex flex-col justify-between cursor-pointer'>
              <div className='w-[370px]'>
                  <img src={image} alt="" width={500} />
              </div>
              <div className='flex flex-col justify-between items-center gap-2 mt-2'>
                  <p className='text-sm font-semibold'>{head }</p>
                  <p>{desc }</p>
              </div>
          </div>
    </div>
  )
}

export default Parsleys