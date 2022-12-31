import React, {useState, useEffect}from 'react'
import { FaBars, FaSearch, FaShoppingCart,  FaRegBell } from "react-icons/fa";
import './Navbar.css';
import Sidebar from './Sidebar';
import NavLink from './NavLink';

function Navbar() {

  const [openBar, setopenBar] = useState(false) 
  const [windowSize, setwindowSize] = useState([window.innerWidth])
  const openSideBar = () => {
    setopenBar(!openBar)
  }

  useEffect(() => {
    const handleWindowsResize = () => {
      setwindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowsResize)
    return () => {
      window.removeEventListener('resize', handleWindowsResize)
    }
  }, [])

  

  return (
    <div>
      <nav>
        {
              windowSize <= 768 && 
              <div className='mobileView'>
                  <div className="navIcon" onClick={openSideBar}>
                      <FaBars />
                  </div>
                  <div className="navText">
                  <h3>ARTSY.</h3>
               </div>
               <div className="navCart">
                  <FaSearch className='searchIcon' />
                  <FaShoppingCart className='cartIcon' />
                  <FaRegBell />
                </div>
           </div>
        }
          
          {
            windowSize > 768 &&
            <div className='desktopView'>
              <div className="navText">
                  <h3>ARTSY.</h3>
              </div>
              <div className="navLink">
                <NavLink />
              </div>
              <div className="navIcon">
                  <FaSearch className='searchIcon' />
                  <FaShoppingCart className='cartIcon' />
                  <FaRegBell />
              </div>
              
            </div>
          }
         
      </nav>
      {
          openBar && <Sidebar setopenBar={setopenBar} openBar={openBar} />
      }
      
    </div>
  )
}

export default Navbar