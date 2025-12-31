import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Cars from '../../components/cars/cars'
import About from '../../components/about/about'
import Cities from '../../components/cities/cities'
import Footer from '../../components/footer/footer'
const Home = () => {
  return (
    <div className='w-full h-dvh bg-white'>
        <Navbar />
        <Hero />
        <Cars />
        <About />
        <Cities />
        <Footer />
    </div>
  )
}

export default Home