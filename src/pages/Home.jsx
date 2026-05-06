import React from 'react'
import Hero from '../components/Hero'
import EventCalendar from '../components/EventCalendar'
import About from '../components/About'
import Services from '../components/Services'
import PromoBanner from '../components/PromoBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <EventCalendar />
      <Services />
      <PromoBanner />
      <Contact />
      <Footer />
    </main>

  )
}

export default Home
