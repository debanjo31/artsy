import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './component/pages/Homepage'
import Auction from './component/pages/Auction'
import Marketplace from './component/pages/Marketplace'
import Drop from './component/pages/Drop'

function App() {
  return (
    <div className="overflow-x-hidden">
       <Router>
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/drop' element={<Drop />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/marketplace' element={<Marketplace />} />
        </Routes>
       
      </Router>
    </div>
  )
}

export default App