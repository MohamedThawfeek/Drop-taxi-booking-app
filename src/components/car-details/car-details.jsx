import React from 'react'
import sedanImage from '../../assets/cars/sedan.png'
import Json from '../../utils/statictest.json'

const CarDetails = ({ car }) => {
  return (
    <div className='w-full min-h-[400px] bg-white p-6 rounded-2xl shadow-lg'>
      {/* Car Image */}
      <div className='relative w-full mb-4'>
        <img 
          src={car.image} 
          alt="Sedan" 
          className='w-full h-[230px] rounded-lg object-contain'
        />
        {/* Price Tag */}
        <div className='absolute bottom-4 left-4 bg-cars-button-color text-black border-[1px] border-black px-6 py-2 rounded-full text-sm font-semibold'>
          ₹{car.oneWayPrice} ({Json["cars-section"]["one-way"]})
        </div>
      </div>

      {/* Title with Popular Badge */}
      <div className='flex items-center justify-between gap-3 mb-4'>
        <h2 className='text-2xl font-bold text-cars-text'>{car.name}</h2>
        <span className='bg-cars-badge-color text-cars-badge-text w-[80px] h-[22px] flex items-center justify-center rounded-full text-xs font-medium'>
          {Json["cars-section"].popular}
        </span>
      </div>

      {/* Pricing Boxes */}
      <div className='grid grid-cols-2 gap-4 mb-6'>
        {/* One Way Box */}
        <div className='bg-cars-content-background flex flex-col items-center justify-center rounded-lg p-4'>
          <h3 className='text-sm font-semibold text-gray-600 mb-2'>{Json["cars-section"]["one-way"]}</h3>
          <p className='text-2xl font-bold text-cars-text mb-1'>₹{car.oneWayPrice}/km</p>
          <p className='text-xs text-gray-500'>{Json["cars-section"]["minimum-distance"]}: 130 km</p>
        </div>

        {/* Round Trip Box */}
        <div className='bg-cars-content-background flex flex-col items-center justify-center rounded-lg p-4'>
          <h3 className='text-sm font-semibold text-gray-600 mb-2'>{Json["cars-section"]["round-trip"]}</h3>
          <p className='text-2xl font-bold text-cars-text mb-1'>₹{car.roundTripPrice}/km</p>
          <p className='text-xs text-gray-500'>{Json["cars-section"]["minimum-distance"]}: 250 km</p>
        </div>
      </div>

      {/* Features */}
      <div className='flex justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
          </svg>
          <span className='text-sm text-gray-700'>{car.passengers}+ {Json["cars-section"].passengers}</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
          </svg>
          <span className='text-sm text-gray-700'>{car.baggage} {Json["cars-section"].baggage}</span>
        </div>
      </div>

      {/* Driver Beta Info */}
      <div className='bg-cars-content-background border-l-4 border-cars-button-color rounded p-3 mb-6'>
        <p className='text-sm text-gray-700'>{Json["cars-section"]["diver-below"]}</p>
      </div>

      {/* Action Buttons */}
      <div className='flex gap-4'>
        <button className='w-[50%] h-[40px] flex items-center justify-center bg-cars-button-color text-white  rounded-lg font-semibold hover:opacity-90 transition-opacity'>
          {Json["cars-section"].button}
        </button>
        <button className='w-[50%] h-[40px] flex items-center justify-center bg-white border-2 border-cars-button-color text-cars-button-color  rounded-lg font-semibold hover:bg-cars-button-color hover:text-white transition-colors'>
          {Json["cars-section"].button2}
        </button>
      </div>
    </div>
  )
}

export default CarDetails