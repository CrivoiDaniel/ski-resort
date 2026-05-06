import React from 'react'
import AnimatedLink from './AnimatedLink'
import {LuArrowUpRight} from 'react-icons/lu'

const PromoBanner = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center mt-[12%]  '>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] font-lanze uppercase'>winter escape:</h1>
            <span className='text-6xl md:text-7xl lg:text-[110px] xl:text-[150px] font-lanze uppercase'>20% off weekdays</span>
        </div>
        <div className='flex flex-col intems-center justify-center'>
            <div className='max-w-[500px] mt-5 '>
                <p className='text-xs xl:text-md text-center'>Nestled in breathtaking landscapes, we offer top-tier amenities,
                <br/>inspiring slopes, and exclusive discounts for unforgettable adventures
                </p>
            </div>
            <div className='flex justify-center'>
                <AnimatedLink to="#" showLine={true} className='inline-block max-w-fit mt-[25px]'>
                            <div className='flex items-center gap-3'>
                                <span className='text-xl uppercase font-semibold'>Book a place </span>
                                <LuArrowUpRight className='text-[25px]'/>
                            </div>
                </AnimatedLink>
            </div>
            
        </div>
    </section>
  )
}

export default PromoBanner
