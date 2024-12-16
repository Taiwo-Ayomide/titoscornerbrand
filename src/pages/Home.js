import React from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Recipe from '../components/Recipe'
import Audio from '../components/Audio'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <div>
      <About />
      <Blog />
      <Recipe />
      <Audio />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Home