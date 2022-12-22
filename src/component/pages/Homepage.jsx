import React from 'react'
import './homepage.css';
import { useNavigate} from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import PhotoGallery from './HomePage/PhotoGallery'
import FeaturedProduct from './HomePage/FeaturedProduct';
import UpcomingAuction from './HomePage/UpcomingAuction';
import ArrowLink from './HomePage/img/lgarrow.png'

function Homepage() {
  const navigate = useNavigate()
  return (
    <div className='homePage'>
       <Navbar />
       <div className="homePageText">
           <h1>Phtography is poetry &beautiful untold stories</h1>
           <p>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
       </div>
       <PhotoGallery />
       <FeaturedProduct />
       <UpcomingAuction />
       <div className="linkPage">
          <hr />
          <li className='pageslink' onClick={() => navigate('/marketplace')}> 
              <div>Explore Marketplace</div>
              <div><img src={ArrowLink} alt="Arrow" /></div>
          </li>
          <hr />
          <li className='pageslink' onClick={() => navigate('/auction')}> 
              <div>See Auctions</div>
              <div><img src={ArrowLink} alt="Arrow" /></div>
          </li>
       </div>

    </div>
  )
}

export default Homepage