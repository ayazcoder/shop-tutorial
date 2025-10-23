import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'

function App() {

  return (
    <div className='h-screen'>
      {/* hello */}
      <Navbar />
      <Home />
    </div>
  )
}

export default App
