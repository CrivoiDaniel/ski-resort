import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLink from './AnimatedLink'
import MobileMenu from './MobileMenu'
import {BsCart3} from 'react-icons/bs'
import { useCart } from '../context/CartContext'


const Navbar = () => {
  const {toggleCart} = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center font-black'>
      <div>
        <Link to="/" className='text-[20px] md:text-[30px] lg:text-[35px] font-black  font-inter tracking-tight'>Ice Haven</Link>
      </div>
      <div className='hidden lg:flex xl:hidden items-center justify-between gap-6 '>
        <ul className='flex items-center gap-12 text-[16px] '>
          <li><Link to="/rent">Rent equipment</Link></li>
          <li><Link to="#" >Map</Link></li>
          <li><Link to="/accomodation" >Accommodation</Link></li>
        </ul>
        <Link to="#">
          <span>Contact us</span>
          <div className='w-full h-[2px] bg-primary'></div>
        </Link>
      </div>

      <div className='hidden xl:flex items-center justify-between gap-3 w-1/2'>
        <ul className='flex items-center gap-12 text-[19px]'>
          <li><AnimatedLink to="/rent">Rent equipment</AnimatedLink></li>
          <li><AnimatedLink >Map</AnimatedLink></li>
          <li><AnimatedLink to="/accomodation" >Accommodation</AnimatedLink></li>
        </ul>
        <div className='flex items-center gap-6'>
          <button onClick={toggleCart}>
            <BsCart3 className='text-[24px] text-primary hover:text-primary/60 transition-all cursor-pointer' />
          </button>
          <AnimatedLink showLine={true}>
            <span>Contact us</span>
          </AnimatedLink>
        </div>

      </div>

      <div className='lg:hidden'>
        <AnimatedLink showLine={true} onClick={handleMenuClick} classNameText='md:text-[19px] '>
          <span>Menu</span>
        </AnimatedLink>
      </div>
      {isMenuOpen && <MobileMenu closeMenu={handleMenuClick} />}
    </nav>
  )
}

export default Navbar

/*
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
 
  return (
    <nav className='flex justify-between items-center px-5'>
        <div>
          <Link to="/" className='text-[20px] font-black md:text-[35px] font-inter tracking-tight'>Ice Haven</Link>
        </div>
        <div className='hidden md:flex items-center justify-between gap-4 w-1/2'>
          <ul className='flex items-center gap-12 text-[19px]'>
            <li><Link className='font-semibold' to="/rent">Rent equipment</Link></li>
            <li><Link className='font-semibold' to="#">Map</Link></li>
            <li><Link className='font-semibold' to="#">Accommodation</Link></li>
          </ul>
          <Link to="#" className='font-semibold text-[19px]'>
            <span>Contact us</span>
            <div className='w-full h-[2px] bg-primary'></div>
          </Link>
       </div>

        <button 
        onClick={toggleMenu}
        className='cursor-pointer md:hidden font-semibold'
        >
          {menuOpen ? 'Close' : 'Menu'}
          <div className='w-full h-[2px] bg-primary'></div>
        </button>

        {menuOpen && (
        <div 
          className='md:hidden fixed top-16 bottom-0 left-0 right-0 p-5 bg-secondary bg-opacity-70 backdrop-blur-md'>
          <div className='flex flex-col items-center gap-4'>
            <ul className='flex flex-col items-center gap-4 text-[19px]'>
              <li><Link onClick={closeMenu} className='font-semibold' to="/rent">Rent equipment</Link></li>
              <li><Link onClick={closeMenu} className='font-semibold' to="#">Map</Link></li>
              <li><Link onClick={closeMenu} className='font-semibold' to="#">Accommodation</Link></li>
            </ul>
            <Link onClick={closeMenu} to="#" className='font-semibold text-[19px]'>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
 
export default Navbar
*/
/*
<nav className='flex justify-between items-center'>
<div>
  <Link to="/" className='font-black text-[35px] font-inter tracking-tight'>Ice Haven</Link>
</div>

<div className='flex items-center justify-between gap-4 w-1/2'>
  <ul className='flex items-center gap-12 text-[19px]'>
    <li className=''><Link className='font-semibold' to="/rent">Rent equipment</Link></li>
    <li className=''><Link className='font-semibold' to="#">Map</Link></li>
    <li className=''><Link className='font-semibold' to="#">Accommodation</Link></li>
  </ul>
  <Link to="#" className='font-semibold text-[19px]'>
    <span>Contact us</span>
    <div className='w-full h-[2px] bg-primary'></div>
  </Link>
</div>

</nav>
*/