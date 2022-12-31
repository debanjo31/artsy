import React from 'react'
import bid from '../../JSON/bid.json'

function AuctionBid() {
  return (
    <div className='flex flex-col md:flex-row md:justify-evenly w-5/6 mx-auto'>
            {
                bid.map((item)=> (
                    <div key={item.id} className="mb-10">
                        <div className="bg-white rounded shadow-xl px-5 py-5 md:pt-5 mb-2 mx-auto">
                            <img src={item.url} className="rounded sm:w-full md:max-h-48 lg:max-h-64 xl:min-h-96" alt={item.name} />  
                            <div className="flex justify-between font-bold md:text-md lg:text-lg">
                                <p>{item.name}</p>
                                <p>{item.bid.highest.eth} ETH</p>
                            </div>  
                        </div>
                        <div className="px-5 text-sm md:text-md lg:text-lg ">
                            <p>Creator : <span className="inline-block ml-3 text-blue-900">{item.creator}</span> </p>
                            <p> Date : <span className="inline-block ml-3 font-bold ">{item.date.day}/{item.date.month}/{item.date.year}</span></p>
                            <div className="flex justify-between">
                                <div className="flex-col ">
                                    <p className=''>Current Bid</p>
                                     <p className="font-bold">{item.bid.current.eth} ETH</p>
                                </div>
                                 <button className='bg-blue-500 px-10 text-white'>Place Bid</button>   
                            </div>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default AuctionBid