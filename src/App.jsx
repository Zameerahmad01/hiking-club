import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-200'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
