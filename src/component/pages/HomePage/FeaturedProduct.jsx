import React from 'react'
import Product from './Product'
import Product1 from './img/product1.jpg'
import Product2 from './img/product2.jpg'
import Product3 from './img/product3.jpg'

export default function FeaturedProduct() {
  return (
    <div className='featuredProduct'>
        <h3>Featured Products</h3>
        <hr />
        <div className="display-product">
          <Product img={Product1} />
          <hr />
          <Product img={Product2} />
          <hr />
          <Product img={Product3} />
         </div>
    </div>
  )
}
