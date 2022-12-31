import React from 'react'
import Navbar from '../navbar/Navbar'
import Filter from './Marketplace/Filter'
import products from '../JSON/product.json'
import { useNavigate} from 'react-router-dom'
import Footer from './Footer'


function Marketplace() {

  const navigate = useNavigate()
  return (
    <div>
        <Navbar />
        <div className="mobileText ml-2 md:hidden">
            <span className='bg-#333333-500/[.06]'  onClick={() => navigate('/')}>Home/</span>
            <span className='bg-#333333-500/[.06]'  onClick={() => navigate('/')}>Marketplace/</span>
            <span className='font-bold'  onClick={() => navigate('/auction')}>Editorials</span>
        </div>
        <div className=" flex flex-col md:flex-row md:flex-wrap">
            <div className="filter md:w-1/4">
              <Filter />
            </div>
            <div className=" md:w-3/4 marketProduct ">
              <div className="flex mx-auto flex-wrap justify-between">
                    {
                          products.map((item) => (
                              <div key={item.id} className="product mx-auto mb-10 rounded p-2 ">
                                    <img src={item.url} className=" object-fill rounded w-72" alt={item.name} />
                                    <div className="imgText flex justify-between">
                                        <p className='mt-2 text-sm '>{item.name.toUpperCase()}</p>
                                        <p className='font-bold mt-2 text-sm '>${item.price.usd}</p>
                                    </div>
                              </div>
                          ))
                        }
              </div>   
              <div className="more text-center">
                    <button className='px-10 py-2 rounded-lg  border-2 border-black'>See More</button>
                </div>
          
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Marketplace