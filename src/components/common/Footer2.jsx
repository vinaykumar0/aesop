import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const about = ["Our story", "Foundation", "Careers", "Privacy policy", "Accessibility", "Cookie Policy"]
const social = ["Instagram ", "Twitter", 'LinkedIn', "WeChat","Weibo"]
const Footer2 = () => {
  return (
      <div className='flex justify-around'>
          <div className='flex flex-col gap-5 w-[38%]'>
              <h3>Sustainability</h3>
              <div className='h-[1px] w-full bg-white'></div>
              <p>
                  All Aesop products are vegan, and we do not test our
                  formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
              </p>
          </div>
          <div className='w-[15%] flex flex-col gap-5'>
              <div>
                  <h3>About</h3>
                  <div className='h-[1px] w-full bg-white mt-5'></div>
              </div>
              <div className='flex flex-col gap-4'>
                  {about.map(about => (
                      <div className='flex gap-1'>{about}
                          <GoArrowUpRight />
                      </div>
                  ))}
              </div>
          </div>
          <div className='w-[15%] flex flex-col gap-5'>
              <div>
                  <h3>Social Media</h3>
                  <div className='h-[1px] w-full bg-white mt-5'></div>
              </div>
              <div className='flex flex-col gap-4'>
                  {social.map(social => (
                      <div>
                          {social}
                      </div>
                  ))}
              </div>
          </div>
          <div className='w-[15%]'></div>
    </div>
  )
}

export default Footer2