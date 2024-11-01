import React from 'react';
import image from '../Asserts/Video Thumbnail.png'

function Tutorial() {
  return (
    <div className="parent p-20">
        <div className="wrapper flex border">
            <div className="img w-1/2">
                <img src={image} alt="Video" width="95%" className='hover:shadow-2xl' />
            </div>
            <div className="text-div w-1/2 py-4 px-8">
                <h1 className='w-[10em] text-4xl font-bold'>Welcome to the Procurement Portal</h1>
                <p className='my-8'>Watch a quick overview of how the Ministry of Agriculture’s procurement portal connects businesses with opportunities to support Liberia’s agricultural growth.</p>
                <p>Learn about the Ministry’s procurement goals, vendor eligibility, and steps to get started.</p>
                <div className="text-right mt-5">
          <a href="#" className='font-semibold mr-4 text-[17px] underline hover:text-green-900'>Learn More →</a>
          </div>
            </div>
        </div>
  </div>
  )
}

export default Tutorial