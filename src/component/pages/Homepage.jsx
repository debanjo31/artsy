import React from 'react'
import './homepage.css';
import Navbar from '../navbar/Navbar';
import PhotoGallery from './HomePage/PhotoGallery'
import FeaturedProduct from './HomePage/FeaturedProduct';

function Homepage() {
  return (
    <div className='homePage'>
       <Navbar />
       <div className="homePageText">
           <h1>Phtography is poetry &beautiful untold stories</h1>
           <p>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
       </div>
       <PhotoGallery />
       <FeaturedProduct />
    </div>
  )
}

export default Homepage