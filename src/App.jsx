import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Products from './component/Products'

function App() {

  return (
    <div className="">
      <div className='h-screen'>
        {/* hello */}
        <Navbar />
        <Home />
      </div>
      <div className="h-screen">
        <Products/>
      </div>
    </div>
  )
}

export default App
