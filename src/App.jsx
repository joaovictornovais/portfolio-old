import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <div className='full-container'>
        <Hero />
        <Skills />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
