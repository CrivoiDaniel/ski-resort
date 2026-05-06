import React from 'react'
import AnimatedLink from './AnimatedLink'
import { LuArrowUpRight } from 'react-icons/lu'

const Footer = () => {
    return (
        <section className='mt-20 px-4 py-12 bg-primary flex flex-col xl:flex-row'>
            <div className='w-full xl:w-1/2'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>Ice Haven</h1>
                <div className='mt-18 md:mt-24 xl:mt-28'>
                    <h2 className='text-white font-lanze tracking-wider'>20% OFF WEEKDAY ADVENTURES!</h2>
                    <p className='text-white/80'>Embrace the slopes without the crowds. Book <br /> your weekday escape today and enjoy exclusive savings <br /> on skiing, rentals, and more.</p>
                    <AnimatedLink to="#" showLine={true} className=' mt-5 inline-block max-w-fit mt-15s'>
                        <div className='flex items-center gap-3'>
                            <span className='text-xl uppercase text-white/80'>Read More</span>
                            <LuArrowUpRight className='text-[25px] text-white/80' />
                        </div>
                    </AnimatedLink>
                </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col'>
                <h1 className='text-2xl mt-5 xl:mt-0 md:text-3xl xl:text-5xl text-white'>Explore thrilling slopes <br/> and unwind in our welcoming, serene haven.</h1>
                <div className='mt-14 w-full flex flex-row items-center justify-between'>
                    <div className='w-1/3 flex flex-col'>
                        <h3 className='font-lanze text-white text-xl tracking-wider'>ADRESS</h3>
                        <p className='text-white/80'>185 Alpine Road,<br/> Mountainville</p>
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        <h3 className='font-lanze text-white text-xl tracking-wider'>CONTACTS</h3>
                        <p className='text-white/80'>185 Alpine Road, <br/> Mountainville</p>
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        <h3 className='font-lanze text-white text-xl tracking-wider'>SOCIAL MEDIA</h3>
                        <p className='text-white/80'>185 Alpine Road,<br/> Mountainville</p>
                    </div>

                </div>
            </div>



        </section>
    )
}

export default Footer
