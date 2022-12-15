import React from 'react'
import '../homepage.css';
import Person1 from './img/person1.png'
import Person2 from './img/person2.png'
import Person3 from './img/person3.png'
import Person4 from './img/person4.png'
import Person5 from './img/person5.png'
import arrowVector from './img/Vector.png'
function Product({img}) {
  return (
    <div className='product'>
        <div className="img">
            <img src={img} className='product-img' alt="The Boolean Egyptian" />
        </div>
        <div className="product-text">
            <h3>The Boolean Egyptian</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
            <div className="creator-img">
                <span className="peopleimage">
                  <img src={Person1} alt="Person1" />
                  <img src={Person2} alt="Person2" />
                  <img src={Person3} alt="Person3" />
                  <img src={Person4} alt="Person4" />
                  <img src={Person5} alt="Person5" />
                </span>
                <span className='imageText'>64 major creator</span>
                <span className="prodcutarrow"><img src={arrowVector} alt="arrowicon" className='arrowicon' /></span>
            </div>
        </div>
    </div>
  )
}

export default Product