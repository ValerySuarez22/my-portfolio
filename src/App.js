import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Aboutsme from './components/Aboutsme'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutsme />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App