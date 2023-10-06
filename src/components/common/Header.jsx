import React from 'react';
import { FiSearch } from 'react-icons/fi'
import Atheneum from '../../pages/Atheneum';
import Efficacious from '../../pages/Efficacious';
import Facial from '../../pages/Facial';
import Parsley from '../../pages/Parsley';
import Locator from '../../pages/Locator';
import Hero from '../../pages/Hero';
import Fragrance from '../../pages/Fragrance';
import { IoChatboxOutline } from 'react-icons/io5'

function Header() {
    return (
        <div className="w-full relative">
            <div className='text-center text-[16px] font-light'>
                <div className='bg-[#c2c2af] p-2'>
                    <h3>Trained Aesop consultants are available to provide bespoke skin care advice. <strong className=''>Book a video consultation</strong></h3>

                </div>
                <div className='bg-[#252525] p-2 text-white flex items-center justify-center gap-5'>
                    <h3>
                        Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on orders over $400.</h3>
                    <p>+</p>
                </div>
            </div>
            {/* Header Section */}
            <header className='bg-[#fffef2] full'>
                <nav className='flex justify-between items-centere px-4 py-7 mx-auto text-ms w-11/12'>
                    {/* Navigation Menu */}
                    <ul className="flex gap-6">
                        <li>Skin Care</li>
                        <li>Body & Hand</li>
                        <li>Hair</li>
                        <li>Fragrance</li>
                        <li>Home</li>
                        <li>Gift</li>
                        <li>Read</li>
                        <li>Store </li>
                        <li>Facial Appointment</li>
                        <div className="text-center">
                            <FiSearch className='text-center' />
                        </div>
                    </ul>

                    {/* User Account Icons */}
                    <div className="flex gap-5">
                        <span>Login</span>
                        <span>Cabinet</span>
                        <span>Cart</span>
                    </div>
                </nav>
            </header>

            <div className='fixed z-20 top-[85%] right-[100px] w-12 h-12 rounded-full bg-black'>
                <IoChatboxOutline className='translate-y-3 translate-x-3 text-white text-2xl' />
            </div>
            <div className='relative'>
                <Hero />
            </div>
            <div className='mt-[110px] bg-[]'>
                <Atheneum />
            </div>
            <div className='mt-32'>
                <Fragrance />
            </div>
            <div className='mt-32'>
                <Efficacious />
            </div>
            <div className='mt-32'>
                <Parsley />
            </div>
            <div className='mt-[50px]'>
                <Locator />
            </div>
            <div className='mt-32 relative'>
                <Facial />
            </div>
            <div className='flex flex-col justify-between items-center mt-32 mb-32 gap-5'>
                <p className='text-3xl font-sans'>‘Nothing is ever ended, everything only begun.’</p>
                <p className='font-medium mb-5'>Sara Teasdale</p>
            </div>
        </div>
    )
}
export default Header;
