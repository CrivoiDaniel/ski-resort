import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const SwiperEvents = ({ slidesPerView = (3) }) => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Sporting Events');

    const currentCategory = categories.find(category => category.name === activeCategory);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .then(err => console.log(err))
    }, [])
    console.log(categories);
    return (
        <section>
            <div className='flex items-center justify-center gap-[50px] mb-6 w-[70%] mx-auto'>
                {
                    categories.map((category, index) => (
                        <button
                            key={index}
                            className={`cursor-pointer text-[42px] font-semibold hover:scale-105 duration-300 ${activeCategory === category.name ? 'text-primary' : 'text-primary/60'}`}
                            onClick={() => setActiveCategory(category.name)}
                        >
                            {category.name}
                        </button>
                    ))
                }
            </div>
            <p className='text-[17px] font-semibold text-center mb-6'>{currentCategory?.description}</p>
            <Swiper
                modules={[Navigation]}
                spaceBetween={100}
                slidesPerView={slidesPerView}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                className='pb-20'
                key={activeCategory}
            >
                {
                    currentCategory?.events?.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className='border-[2px] border-primary rounded-lg p-6 overflow-hidden h-full flex flex-col'>
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
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default SwiperEvents
