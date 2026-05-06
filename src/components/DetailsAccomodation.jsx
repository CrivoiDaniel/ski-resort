import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Alert from '@mui/material/Alert';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaCaretLeft } from "react-icons/fa";


const DetailsAccomodation = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const [accomodations, setAccomodations] = useState([]);
    const [openImage, setOpenImage] = useState(null);
    const [alert, setAlert] = useState({ type: '', message: '' });


    useEffect(() => {
        fetchAccommodations();
    }, [id]);

    const fetchAccommodations = async () => {
        try {
            const response = await fetch('http://localhost:3000/accommodations');
            const data = await response.json();
            const found = data.find(item => item.id.toString() === id);
            setAccomodations(found ? [found] : []);
        } catch (error) {
            console.error('Error fetching accommodations:', error);
        }
    }

    return (
        <section>

            <div className='mt-10 gap-8'>

                {
                    accomodations.map((accomodation) => (
                        <div key={accomodation.id} className='flex flex-col items-start '>
                            <div className='w-full flex '>
                                <div className='w-1/2 pr-[5%] '>
                                    <h1 className='text-[36px] font-bold text-black'>{accomodation.name}</h1>
                                    <div className='relative w-full'>
                                        <Swiper
                                            modules={[Navigation]}
                                            slidesPerView={1}
                                            loop={true}
                                            navigation={{
                                                nextEl: '.swiper-button-next-custom',
                                                prevEl: '.swiper-button-prev-custom',
                                            }}
                                            className="w-full h-[45vh] rounded-lg mb-4 border-[2px] border-primary"
                                        >
                                            {accomodation.image?.map((img, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={img}
                                                        alt={accomodation.name}
                                                        onClick={() => setOpenImage(index)}
                                                        className="w-full h-full object-cover rounded-lg cursor-pointer"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        <div className="absolute top-0 left-0 w-full h-[45vh] flex items-center justify-between px-4 pointer-events-none z-10">
                                            <button className="swiper-button-prev-custom cursor-pointer bg-white/50 rounded-full p-3 hover:bg-white/80 transition-all pointer-events-auto shadow-lg">
                                                <FaCaretLeft className="text-[24px] text-primary/50 hover:text-primary/80" />
                                            </button>
                                            <button className="swiper-button-next-custom cursor-pointer bg-white/50 rounded-full p-3 hover:bg-white/80 transition pointer-events-auto rotate-180 shadow-lg">
                                                <FaCaretLeft className="text-[24px] text-primary/50 hover:text-primary/80" />
                                            </button>
                                        </div>
                                    </div>

                                    {openImage !== null && (
                                        <div
                                            className='fixed inset-0 bg-black/90 flex items-center justify-center z-50'
                                            onClick={() => setOpenImage(null)}
                                        >
                                            <div
                                                className='relative w-[90%] h-[90vh]'
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <button
                                                    onClick={() => setOpenImage(null)}
                                                    className='absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10'
                                                >
                                                    ×
                                                </button>

                                                <Swiper
                                                    modules={[Navigation]}
                                                    spaceBetween={20}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    navigation
                                                    className="w-full h-full"
                                                >
                                                    {accomodation.image.map((img, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div className='w-full h-full flex items-center justify-center'>
                                                                <img
                                                                    src={img}
                                                                    alt={accomodation.name}
                                                                    className='max-w-full max-h-full object-contain rounded-lg shadow-2xl'
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>

                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div key={accomodation.id} className='space-y-4 mt-12 flex flex-col '>
                                    <div className='space-y-2'>
                                        <p className='text-2xl text-gray-800/80'>
                                            Location:
                                            <span className='font-bold'>{accomodation.location}</span>
                                        </p>
                                        <p className='text-2xl text-gray-800/80'>
                                            Number:
                                            <span className='font-bold'>{accomodation.contacts}</span>
                                        </p>
                                        <p className='text-2xl text-gray-800/80'>
                                            Price:
                                            <span className='font-bold text-2xl text-gray-800/80'>{accomodation.price}$</span>
                                            <span className='font-bold text-[16px] text-gray-800/70'>/night</span>
                                        </p>
                                    </div>
                                    <div className='flex flex-col w-full space-y-4'>
                                        <button
                                            onClick={() => {
                                                try {
                                                    addToCart(accomodation);
                                                    setAlert({ type: 'success', message: 'Added successfully!' });
                                                } catch {
                                                    setAlert({ type: 'error', message: 'Add failed.' });
                                                }

                                                setTimeout(() => setAlert({ type: '', message: '' }), 2000);
                                            }}
                                            className='cursor-pointer px-6 py-3 bg-primary text-white rounded-lg text-[14px] font-semibold hover:bg-primary/80 transition-all duration-300'
                                        >
                                            Rent Now
                                        </button>

                                        <button className=' cursor-pointer px-6 py-3 bg-white text-black rounded-lg text-[14px] border-[2px] border-primary font-semibold hover:bg-primary/80 hover:text-white transition-all duration-300'>Send Message</button>
                                    </div>

                                </div>
                            </div>
                            <h1 className='text-2xl mt-4 font-semibold'>Description:</h1>
                            <div className='flex flex-col mt-2'>
                                {accomodation.description &&
                                    Object.entries(accomodation.description).map(([key, value]) => (
                                        <p key={key} className='text-gray-700/80 mb-2'>
                                            <span className='font-semibold capitalize'>{key}:</span> {value}
                                        </p>
                                    ))
                                }
                            </div>

                        </div>
                    ))}
                <div className='fixed bottom-10 left-1/2  z-50'>
                    {alert.message && (
                        <Alert severity={alert.type} className='mb-3'>
                            {alert.message}
                        </Alert>
                    )}
                </div>

            </div>

        </section>
    )
}

export default DetailsAccomodation
