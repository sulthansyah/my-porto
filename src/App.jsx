import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  )
}

export default App
