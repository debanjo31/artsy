import React from 'react'
import Navbar from '../navbar/Navbar'
import { useNavigate} from 'react-router-dom'
import ImageSlider from './Auction/ImageSlider'
import AuctionBid from './Auction/AuctionBid'

function Auction() {
  const navigate = useNavigate()
  return (
    <div className='bg-white'>
        <Navbar />
        <div className="auction-top ml-2 ">
            <span className='bg-#333333-500/[.06] hidden md:inline'  onClick={() => navigate('/')}>Home/</span>
            <span className='font-bold hidden md:inline'  onClick={() => navigate('/auction')}>Auction</span>
            <p className='font-light mt-5'>Here's an Overview of products actively on auction, explore!</p>
        </div>
        <ImageSlider />
        <p className='mt-10 ml-2'>Top bid from  popular creators</p>
        <AuctionBid />
    </div>
  )
}

export default Auction