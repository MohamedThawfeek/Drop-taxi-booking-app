import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Cars from '../../components/cars/cars'
import About from '../../components/about/about'
import Cities from '../../components/cities/cities'
import Footer from '../../components/footer/footer'
import SEO from '../../components/seo/SEO'

const Home = () => {
  return (
    <div className='w-full h-dvh bg-white'>
        <SEO 
          title="Drop Taxi Trip - Your Trusted One Way & Drop Taxi Service"
          description="Reliable drop taxi services connecting major cities across Tamil Nadu, Bengaluru, and Pondicherry. Affordable, safe, and convenient intercity travel."
          keywords="drop taxi, one way taxi, taxi booking, intercity taxi, Tamil Nadu taxi, Bengaluru taxi, Pondicherry taxi"
        />
        <Hero />
        <Cars />
        <About />
        <Cities />
        <Footer />
    </div>
  )
}

export default Home