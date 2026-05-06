import React from 'react'
import AnimatedLink from './AnimatedLink'
import { LuArrowUpRight } from 'react-icons/lu'

const Contact = () => {
    return (
        <section id='contact' className='mt-[5%] py-20 flex justify-center items-center'>

            <div className='relative w-full max-w-7xl'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-6'>
                    <div className='w-1/2 flex items-center justify-center gap-6'>
                        <h1 className='font-lanze text-[140px] md:text-[170px] xl:text-[250px] text-primary leading-none'>
                            SLOPE
                        </h1>

                        <img
                            src="/images/contact.png"
                            alt="contact"
                            className='w-30 h-30 md:w-36 md:h-36 xl:w-50 xl:h-50 object-cover rounded-md -translate-y-3 xl:-translate-y-5 -translate-x-5'
                        />
                    </div>
                    <div className='xl:w-1/2'>
                        <h1 className='font-lanze text-[140px] md:text-[170px] xl:text-[250px] text-primary leading-none'>
                            INSIGHTS
                        </h1>
                    </div>

                </div>
                <div className='absolute left-1/2 top-1/2 translate-x-18 -translate-y-40 -rotate-6'>

                    <div className='border border-red-400 backdrop-blur-lg rounded-xl shadow-xl'>

                        <div className='hidden xl:inline-block p-6'>
                            <img
                                src="/images/about.png"
                                alt="card"
                                className='flex w-[300px] xl:w-[450px] h-[450px] object-cover rounded-xl'
                            />
                            <div className='mt-4 text-left'>
                                <p className='text-primary font-semibold text-xl'>
                                    @ice.haven
                                </p>

                                <p className='text-primary flex items-center gap-2 text-xl'>
                                    ❤️ 583
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='w-[90%] md:w-[70%] lg-[60%] xl:w-1/2 mt-24'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-semibold'>
                        From ski lessons to apres-ski vibes, we share it all
                    </h2>
                    <p className='mt-10'>Discover expert advice on mastering the slopes, tips for choosing the best equipment, and ideas for après-ski fun with family and friends. Stay updated with event highlights, insider stories, and must-know tricks to make your ski adventure truly remarkable. Be part of the journey and elevate your winter experience!</p>
                    <AnimatedLink to="#" showLine={true} className='inline-block max-w-fit mt-15'>
                        <div className='flex items-center gap-3'>
                            <span className='text-xl uppercase font-semibold'>Read More</span>
                            <LuArrowUpRight className='text-[25px]' />
                        </div>
                    </AnimatedLink>
                </div>
            </div>
        </section>
    )
}

export default Contact


{/* <section id='contact' className='py-16 flex flex-col xl:flex-row items-center justify-between'>
            <div className='relative w-full max-w-4xl text-center'>
                <h1 className='font-lanze text-[301px] text-primary'>INSISGHTS</h1>
                <div className='absolute top-70 left-20 border-red-500 border backdrop-blur-lg transform -rotate-4 rounded-xl'>
                    <div className='p-12 rounded-xl'>
                        <div>
                            <img src="/images/about.png" alt="contact image" className='w-[600px] h-[600px] rounded-xl object-cover' />
                        </div>
                        <div className='space-y-3 mt-3 text-left'>
                            <p className='text-primary font-semibold text-4xl'>@ice.haven</p>
                            <p className='text-primary font-semibold flex items-center justify-start gap-2 text-4xl'>
                                <span>❤️</span>
                                <span>583</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}