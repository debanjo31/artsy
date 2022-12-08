import React from 'react'
import './Navbar.css';
import Link from './Link'

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
         <div className="navMobileLink">
            <Link />
         </div>
         
    </div>
  )
}

export default Sidebar