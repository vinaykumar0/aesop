import React from 'react'
import Eff from '../components/assests/Eff.avif'
import { BsArrowRightShort } from 'react-icons/bs'

const Efficacious = () => {
  return (
      <div className='flex w-full justify-between gap-10 mt-12'>
          <div>
              <img src={Eff} alt="" width={770}/>
          </div>
          <div className='w-[25%] mr-[74px]'>
              <h1 className='text-3xl font-normal mb-8'>
                  Efficacious pairings</h1>
              <p className='text-lg font-extralight mb-8'>
                  Our consultants have long combined complementary formulations
                  to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.</p>
              <button className='flex justify-around items-center w-[280px] bg-[rgba(51,51,51,.2)] py-4 px-3'><span>Browse skin care bundles</span>
                  <BsArrowRightShort />
              </button>
          </div>
      </div>
  )
}

export default Efficacious