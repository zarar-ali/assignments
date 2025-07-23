import React from 'react'
import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import Services from './components/Services/page'
import Gallery from './components/Gallery/page'
import About from './components/About/page'
import Contact from './components/Contact/page'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home