import React from 'react'
import './Navbar.css';

function Sidebar({setopenBar, openBar}) {
    const closeSideBar = () =>{
        setopenBar(false)
    }
    
  return (
    <div className='sideBar'>
         <div className="top">
                <h3>ARTSY.</h3>
                <span onClick={closeSideBar}>X</span>
         </div>
         <div className="navLink">
            <p>Home</p>
            <p>Auctions</p>
            <p>Marketplace</p>
            <p>Drops</p>
         </div>
         
    </div>
  )
}

export default Sidebar