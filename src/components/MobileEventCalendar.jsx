import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const MobileEventCalendar = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Sporting Events');

    const currentCategory = categories.find(category => category.name === activeCategory);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .then(err => console.log(err))
    }, [])


    return (
        <section id='events-calendar' className='xl:hidden'>
            <div className='container-custom'>
                <h1 className='text-[45px] md:text-[60px] font-lanze uppercase font-black text-center mb-2 leaading-none '>events calendar</h1>
            </div>
            <div className='relative'>
                <div className='flex items-center justify-center '>
                    <button className='swiper-button-prev-custom'>
                        <BsArrowLeft className='text-[30px] hover:text-primary/60 hover:scale-105 transaction-all duration-300' />
                    </button>
                    <div className='flex w-[70%] md:w-[40%]'>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}>


                            {
                                categories.map((category, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='flex items-center justify-center mx-auto'>
                                            <button
                                                key={index}
                                                className={`cursor-pointer text-2xl font-semibold hover:scale-105 duration-300  text-primary`}
                                            >
                                                {category.name}
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <button className='swiper-button-next-custom'>
                        <BsArrowRight className='text-[30px] hover:text-primary/60 hover:scale-105 transaction-all duration-300' />
                    </button>
                </div>
                <p className='text-[17px] font-semibold text-center mt-4 leading-none mb-[5%]'>{currentCategory?.description}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        currentCategory?.events?.map((event, index) => (

                            <div className='border-[1px] border-primary rounded-lg p-6 overflow-hidden h-full flex flex-col'>
                                <div className='aspect-[4/3]'>
                                    <img src={event.img} alt="" className='w-full h-full object-cover rounded-lg' />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-base mt-2'>"{event.title}"</h3>
                                    <div className='flex items-center flex-wrap gap-2 mt-3'>
                                        <span className='px-2 py-1 text-center border-[2px] border-primary rounded-full text-[12px] dont-semibold'>Date:{event.tags.date}</span>
                                        <span className='px-2 py-1 text-center border-[2px] border-primary rounded-full text-[12px] dont-semibold'>Time:{event.tags.time}</span>
                                        <span className='px-2 py-1 text-center border-[2px] border-primary rounded-full text-[12px] dont-semibold'>Location:{event.tags.location}</span>

                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

        </section >
    )
}
export default MobileEventCalendar
