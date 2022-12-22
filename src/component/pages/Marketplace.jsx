import React from 'react'
import Navbar from '../navbar/Navbar'
import Filter from './Marketplace/Filter'

function Marketplace() {
  return (
    <div>
        <Navbar />
        <div className="container w-5/6 m-auto flex">
            <div className="filter basis-1/6">
              <Filter />
            </div>
            <div className="marketProduct basis-5/6">
              
            </div>
        </div>
    </div>
  )
}

export default Marketplace