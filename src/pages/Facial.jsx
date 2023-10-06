import React from 'react'
import Facia from '../components/assests/Facial.avif'
import { BsArrowRightShort } from 'react-icons/bs'

const Facial = () => {
  return (
      <div className='flex w-full justify-between gap-10 mt-12'>
          <div>
              <img src={Facia} alt="" width={770} />
          </div>
          <div className='w-[25%] mr-[74px]'>
              <p className='text-sm font-semibold mb-4'>Facial Appointments</p>
              <h1 className='text-3xl font-normal mb-8'>
                  Composure for the skin and senses</h1>
              <p className='text-lg mb-9'>
                  For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
              <button className='flex justify-around items-center w-[270px] bg-[rgba(51,51,51,.2)] py-4 px-3'><span>Learn more</span>
                  <BsArrowRightShort />
              </button>
          </div>
      </div>
  )
}

export default Facial