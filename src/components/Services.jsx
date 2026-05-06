import React from 'react'
import CardServices from './CardServices';

const Services = () => {
  return (
    <section className='services-bg opacity-90 '>
        <h1 className='text-7xl xl:text-[300px] font-lanze uppercase font-black text-center leading-none pt-[2%]'>SERVICES</h1>
        <div className='mr-[2%] gap-2 flex flex-col'>
          <CardServices
        title="Ski Lessons"
        description="Professional instructors for all levels"
        link="#"
        />
        <CardServices
        title="Equipment Rentals"
        description="Top-qulity skis, snowboards, and gear"
        link="#"
        />
        <CardServices
        title="Wellness & SPA"
        description="Relax with massages, saunas, and hot tubs"
        link="#"
        />
        <CardServices
        title="Fine Dining"
        description="Gourment restaurants with local and international cuisine"
        link="#"
        />
        <CardServices
        title="Guided Excursions"
        description="Explore the beauty of the mountains with a guide"
        link="#"
        />
        <CardServices
        title="Kids' Snow Park"
        description="Safe and fun snow activities for children"
        link="#"
        />
        <CardServices
        title="Night Skiing"
        description="Ski under the stars on illuminated trails"
        link="#"
        />
        </div>
        
    </section>
  )
}

export default Services
