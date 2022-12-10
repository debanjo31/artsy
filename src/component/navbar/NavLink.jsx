import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css';

function NavLink() {
    const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <div className='link-route'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <p
              className={
                pathMatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Home
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/auction')}>
            <p
              className={
                pathMatchRoute('/auction')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Auctions
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/marketplace')}>
            <p
              className={
                pathMatchRoute('/marketplace')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Marketplace
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/drop')}>
            <p
              className={
                pathMatchRoute('/drop')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Drops
            </p>
          </li>
        </ul>
    </div>
  )
}

export default NavLink