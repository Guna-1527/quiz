import React from 'react' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Guide from './components/Guide'
import Footer from './components/Footer'
import CTA from './components/CTA'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Guide />
      <CTA />
      <Footer />
    </div>
  )
}

export default page