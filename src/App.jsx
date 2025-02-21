import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  )
}

export default App
