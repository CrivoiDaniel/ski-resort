import React, { useState, useEffect, use } from 'react'
import { LuSearch } from 'react-icons/lu';
import DetailsAccomodation from '../components/DetailsAccomodation';
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Alert from '@mui/material/Alert';

const AcomodationPage = () => {
    const { addToCart } = useCart();
    const [accommodations, setAccommodations] = useState([]);
    const [filteredAccommodations, setFilteredAccommodations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        area: '',
        rooms: '',
        price: ''
    });
    const [alert, setAlert] = useState({ type: '', message: '' });

    useEffect(() => {
        fetchAccommodations();
    }, []);

    const fetchAccommodations = async () => {
        try {
            const response = await fetch('http://localhost:3000/accommodations');
            const data = await response.json();
            setAccommodations(data || []);
        } catch (error) {
            console.error('Error fetching accommodations:', error);
        }
    }
    const getUniqueValues = (key) => {
        return [...new Set(accommodations.map(accomodation => accomodation.description[key]))];
    }
    const getUniqueValuesPrice = (key) => {
        return [...new Set(accommodations.map(accomodation => accomodation[key]))];
    }

    const handleFillterChange = (filterType, value) => {
        setSelectedFilters(prev => {
            const currentValues = prev[filterType];
            if (currentValues.includes(value)) {
                // Deselect the filter
                return {
                    ...prev,
                    [filterType]: currentValues.filter(v => v !== value)
                };
            } else {
                // Select the filter
                return {
                    ...prev,
                    [filterType]: [...currentValues, value]
                };
            }
        })
    };

    const clearFilters = () => {
        setSelectedFilters({
            area: [],
            rooms: [],
            price: []
        });
        setSearchTerm('');
    }

    useEffect(() => {
        let filtered = [...accommodations];
        if (selectedFilters.area.length > 0) {
            filtered = filtered.filter(accomodation =>
                selectedFilters.area.includes(accomodation.description.area)
            );
        }

        if (selectedFilters.rooms.length > 0) {
            filtered = filtered.filter(accomodation =>
                selectedFilters.rooms.includes(accomodation.description.rooms)
            );
        }

        if (selectedFilters.price.length > 0) {
            filtered = filtered.filter(accomodation =>
                selectedFilters.price.includes(accomodation.price)
            );
        }
        if (searchTerm) {
            filtered = filtered.filter(accomodation =>
                accomodation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                accomodation.description.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
                accomodation.description.rooms.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredAccommodations(filtered);
    }, [searchTerm, selectedFilters, accommodations]);


    return (
        <main id='acomodation' className='py-8'>

            <div>
                <h1 className='text-[32px] font-semibold mb-2'>Rent Accomodation</h1>
                <p className='text-[16px] font-medium text-primary/80'>Find your Accomodation</p>
            </div>
            <div className='flex gap-8'>
                <aside className='w-1/4 flex-shrink-0'>
                    <div className='border-[2px] border-primary rounded-lg p-6 sticky top-8'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[22px] font-semibold'>Filters</h2>
                            {/*Aici vom avea filtrele selectate si resetarea */}
                            {
                                Object.values(selectedFilters).some(arr => arr.length > 0 || searchTerm) && (
                                    <button
                                        onClick={clearFilters}
                                        className='cursor-pointer text-[14px] font-medium text-primary/50 hover:text-primary transition-all duration-100'
                                    >
                                        Clear Filters
                                    </button>
                                )
                            }


                        </div>

                        {/* Filtrele disponibile */}
                        <div className='mb-6'>
                            <label htmlFor="searchbar">Search</label>
                            <div className='relative'>
                                <input
                                    type="text"
                                    placeholder='Search accomodation'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className='w-full border-[2px] border-primary rounded-lg p-2 text-[16px] font-medium
                                          text-primary/80 placeholder:text-primary.60 focus:outline-none focus:border-primary focus:ring-0'
                                />
                                <LuSearch className='text-[20px] text-primary absolute right-2 top-1/2 -translate-y-1/2' />
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h3 className='text-[18px] font-semibold mb-2'>Area:</h3>
                            <div className='space-y-2'>
                                {
                                    getUniqueValues('area').map((area) => (
                                        <label className='flex items-center gap-2 cursor-pointer group:' key={area}>
                                            <input
                                                type='checkbox'
                                                checked={selectedFilters.area.includes(area)}
                                                onChange={() => handleFillterChange('area', area)}
                                                className='w-4 h-4 accent-primary cursor-pointer'
                                            />
                                            <span className='text-[14px] font-medium'>{area}</span>
                                        </label>

                                    ))
                                }
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h3 className='text-[18px] font-semibold mb-2'>Rooms:</h3>
                            <div className='space-y-2'>
                                {
                                    getUniqueValues('rooms').map((rooms) => (
                                        <label className='flex items-center gap-2 cursor-pointer group:' key={rooms}>
                                            <input
                                                type='checkbox'
                                                checked={selectedFilters.rooms.includes(rooms)}
                                                onChange={() => handleFillterChange('rooms', rooms)}
                                                className='w-4 h-4 accent-primary cursor-pointer'
                                            />
                                            <span className='text-[14px] font-medium'>{rooms}</span>
                                        </label>

                                    ))
                                }
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h3 className='text-[18px] font-semibold mb-2'>Price:</h3>
                            <div className='space-y-2'>
                                {
                                    getUniqueValuesPrice('price').map((price) => (
                                        <label className='flex items-center gap-2 cursor-pointer group:' key={price}>
                                            <input
                                                type='checkbox'
                                                checked={selectedFilters.price.includes(price)}
                                                onChange={() => handleFillterChange('price', price)}
                                                className='w-4 h-4 accent-primary cursor-pointer'
                                            />
                                            <span className='text-[14px] font-medium'>{price}</span>
                                        </label>

                                    ))
                                }
                            </div>
                        </div>

                    </div>


                </aside>

                <div className='flex-1'>
                    <div className='mb-6'>
                        <p className='text-[16px] font-medium text-primary/80'>Showing {filteredAccommodations.length} of {accommodations.length} accomodations</p>
                    </div>

                    {
                        filteredAccommodations.length === 0 ? (
                            <div className='text-center py-20'>
                                <p className='text-[8px] font-semibold text-primary/60'>No accomodations found</p>
                                <button
                                    onClick={clearFilters}
                                    className='mt-4 px-6 border-[2px] border-primary rounded-lg text-[14px] font-semibold hover:bg-primary hover:text-white transition-all duration-300'>Clear Filters
                                </button>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    filteredAccommodations.map((accomodation) => (
                                        <div key={accomodation.id} className='border-[2px] border-primary rounded-lg p-4 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'>
                                            <div className='h-[200px] mb-4 overflow-hidden rounded-lg'>
                                                <img
                                                    src={accomodation.image}
                                                    alt={accomodation.name}
                                                    className='w-full h-full object-cover rounded-lg'
                                                />
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <h3 className='text-[18px] font-semibold mb-2'>{accomodation.name}</h3>
                                                <p className='text-[20px] font-semibold text-gray-800/80 '>{accomodation.price} $
                                                    <span className='text-[16px] font-semibold text-primary/50'>/night</span>
                                                </p>
                                            </div>

                                            <div className='space-y-1 mb-3'>
                                                <p className='text-[14px] font-medium text-primary/80'>
                                                    <span className='font-medium '>Area:</span>{accomodation.description.area}
                                                </p>
                                                <p className='text-[14px] font-medium text-primary/80'>
                                                    <span className='font-medium'>Rooms:</span>{accomodation.description.rooms}
                                                </p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <Link
                                                    to={`/accomodation/details/${accomodation.id}`}
                                                    className="cursor-pointer px-4 py-2 text-black border-[2px] border-primary rounded-lg text-[10px] font-semibold hover:bg-primary/80 hover:text-white transition-all duration-300"
                                                >
                                                    View details
                                                </Link>

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
                                                    className=' cursor-pointer px-4 py-2 bg-primary text-white rounded-lg text-[10px] font-semibold hover:bg-primary/80 transition-all duration-300'>Rent Now</button>
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        )
                    }
                </div>

            </div>
            <div className='fixed bottom-10 left-1/2  z-50'>
                {alert.message && (
                    <Alert severity={alert.type} className='mb-3'>
                        {alert.message}
                    </Alert>
                )}
            </div>
           

        </main>
    )
}

export default AcomodationPage
