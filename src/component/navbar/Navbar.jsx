import React, {useState, useEffect}from 'react'
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import './Navbar.css';
import Sidebar from './Sidebar';

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
              windowSize <= 500 && 
              <>
              <div className="navIcon" onClick={openSideBar}>
                  <FaBars />
              </div>
              <div className="navText">
              <h3>ARTSY. {windowSize}</h3>
          </div>
          <div className="navCart">
              <FaSearch className='searchIcon' />
              <FaShoppingCart className='cartIcon' />
          </div>
          </>
        }
          
         
      </nav>
      {
          openBar && <Sidebar setopenBar={setopenBar} openBar={openBar} />
      }
      
    </div>
  )
}

export default Navbar