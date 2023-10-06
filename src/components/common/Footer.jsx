import React from 'react';
import {GoArrowUpRight} from 'react-icons/go'
import Footer2 from './Footer2';
import Footer3 from './Footer3';


const order = ["Contact us", "FAQs", "Shipping", "Returns", "Order history", "Term and conditions"]
const services = ["Live assistance", "Corporate gifts", "Facial Appointments", "Click and Collect", "Video consultation"]
function Footer() {
    return (
        <div className=' bg-[#252525] text-[#fffef2] w-full max-w-maxContent flex flex-col gap-5'>
            <div className='flex justify-around gap-2 py-8 '>
                <div className='flex flex-col w-[38%] gap-8'>
                    <div>
                        Subscribe to Aesop communications
                        <div className='h-[1px] w-full bg-white mt-4'></div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input type="email" placeholder='Email Address' className='w-full p-1.5 font-semibold' />
                        <div>
                            <input type="checkbox" id='check' />
                            <label htmlFor="check">
                                Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</label>
                        </div>
                    </div>
                </div>
                <div className='w-[16%] flex flex-col gap-5'>
                    <div>
                        <h3>Order and Support</h3>
                        <div className='h-[1px] w-full bg-white mt-4'></div>
                    </div>
                    <div className='flex flex-col justify-between gap-4'>
                        {order.map((orders) => (
                            <div className='flex gap-1 items-center'
                            >{orders}
                                <GoArrowUpRight />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[16%]'>
                    <h3>Services</h3>
                    <div className='h-[1px] w-full bg-white mt-4'></div>
                    <div className='flex flex-col justify-between gap-4 mt-5'>
                        {services.map(service => (
                            <div>{service}</div>
                        ))}
                    </div>
                </div>
                <div className='w-[14%] '>
                    <div>
                        <h3>Location Prefrence</h3>
                        <div className='h-[1px] w-full bg-white mt-4'></div>
                        <div className='flex flex-col gap-5 mt-5'>
                            <div>
                                <p>Shippings:</p>
                                <a href="#" className='underline'>Hong Kong SAR, China</a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Languages:</div>
                                <div>
                                    <p className='underline'>English</p>
                                    <p>繁體中文</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer2 />
            </div>
            <div>
                <Footer3/>
            </div>
      </div>
    )
}



export default Footer;