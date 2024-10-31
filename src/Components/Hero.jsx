import React from 'react';
import HeroImg from '../Asserts/bro.png'

function Hero() {
  return (
    <>
        <section className='w-full flex p-14'>
        <div className='w-1/2'>
            <h1 className='text-5xl  font-medium'>Welcome to the Ministry of Agriculture’s Procurement Platform.</h1>
            <p className='my-14 text-[20px] font-inter'>Your central hub for accessing procurement plans, bidding opportunities, and awarded contracts.</p>
            <a href="#" className='font-bold mr-4 text-[17px] hover:underline hover:text-green-900'>View Active Bids →</a> <a href="#" className='font-bold mr-4 text-[17px] hover:underline hover:text-green-800'>View Report →</a> <a href="#" className='font-bold mr-4 text-[17px] hover:underline hover:text-green-800'>Submit a New RFQ →</a>
        </div>
        <div className='w-1/2 flex justify-center'>
            <img src={HeroImg} alt="image" width="75%"/>
        </div>
    </section >

    <section className='w-full flex p-14 mt-[-5rem]'>
        <div className="wrapper w-full flex justify-around">
            {/* This is box 1 */}
            <div className='border-b-4 border border-gray-400 w-[16rem] p-8 shadow rounded-r-lg rounded-l-lg rounded-b-none text-center hover:bg-green-800 cursor-pointer hover:text-white'>
                <h1 className='text-3xl font-bold my-2'>120+ Tenders</h1>
                <p>Issued for 2024</p>
            </div>
              {/* This is box 2 */}
            <div className='border-b-4 border border-gray-400 w-[16rem] p-8 shadow rounded-r-lg rounded-l-lg rounded-b-none text-center hover:bg-green-800 cursor-pointer hover:text-white'>
                <h1 className='text-3xl font-bold my-2'>300+</h1>
                <p>Approved Vendors</p>
            </div>
              {/* This is box 3 */}
            <div className='border-b-4 border border-gray-400 w-[16rem] p-8 shadow rounded-r-lg rounded-l-lg rounded-b-none text-center hover:bg-green-800 cursor-pointer hover:text-white'>
                <h1 className='text-3xl font-bold my-2'>$68M+</h1>
                <p>Awarded Contracts</p>
            </div>
              {/* This is box 4 */}
            <div className='border-b-4 border border-gray-400 w-[16rem] p-8 shadow rounded-r-lg rounded-l-lg rounded-b-none text-center hover:bg-green-800 cursor-pointer hover:text-white'>
                <h1 className='text-3xl font-bold my-2'>45+ Projects</h1>
                <p>Nationwide Coverage</p>
            </div>
        </div>
    </section>
    </>
    
  )
}

export default Hero