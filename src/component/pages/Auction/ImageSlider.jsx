import React, {useState, useEffect} from 'react'
import images from '../../JSON/auction.json'

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(images);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }, [currentIndex]);
  
    return (
      <div className="relative w-full h-40 ml-2 mt-5">
        <button
          className="absolute left-0 top-0 py-2 px-4 rounded-l-md text-gray-500 hover:text-gray-700"
          onClick={() => setCurrentIndex((currentIndex + images.length - 1) % images.length)}
        >
          Previous
        </button>
        <button
          className="absolute right-0 top-0 py-2 px-4 rounded-r-md text-white hover:text-gray-700"
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          Next
        </button>
        <div className="flex  overflow-x-hidden ">
            {images.map((image, index) => (
            <img
                key={index}
                src={image.url}
                className={` w-64 float h-40 rounded object-cover`}
                alt="new"
                />
            ))
            }
        </div>
        </div>
)}

export default ImageSlider