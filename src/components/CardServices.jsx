import React from 'react'
import AnimatedLink from './AnimatedLink'
import { LuArrowUpRight } from "react-icons/lu"


const CardServices = ({ title, description, link }) => {
  return (
    <section>
      <div className='w-1/2 ml-auto text-center text-primary bg-secondary flex flex-col xl:flex-row items-center justify-between rounded-md p-2 '>
        <div>
          <AnimatedLink to={link} className='inline-block max-w-fit'>
            <div className='flex items-center justify-between rounded-md'>
              <span className='text-[12px] xl:text-3xl uppercase font-semibold'>{title}</span>
              <LuArrowUpRight className='text-[25px]' />
            </div>
          </AnimatedLink>
        </div>
        <div className='w-full xl:w-1/4'>
          <p className=' text-[12px] xl:text-xs font-semibold items-start'>{description}</p>
        </div>
      </div>
    </section>
  )
}
export default CardServices
