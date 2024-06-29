import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Explore from './components/explore/Explore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Explore />
    </div>
  )
}

export default App
