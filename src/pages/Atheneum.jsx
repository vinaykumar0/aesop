import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Video from '../components/assests/video.mp4'

const Atheneum = () => {
  return (
      <div className='flex w-full justify-between gap-10'>
          <div className='w-[25%] ml-[74px]'>
              <p className='text-base font-medium mb-4'>The Athenaeum</p>
              <h1 className='text-3xl font-normal mb-8'>Ouranon: the sixth Othertopias fragrance</h1>
                  <p className='text-base mb-9'>
                  Each of the six Othertopias fragrances is a doorway to another realm,
                  real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey.</p>
              <button className='flex justify-around items-center w-[270px] bg-[rgba(51,51,51,.2)] py-4 px-3'><span>Step inside Ouranon</span>
                      <BsArrowRightShort />
                  </button>
          </div>

          <div className='shadow-blue-200'>
              <video
                  muted
                  loop
                  autoPlay width={773} >
                  <source src={Video} type="video/mp4"/>
              </video>
          </div>
    </div>
  )
}

export default Atheneum