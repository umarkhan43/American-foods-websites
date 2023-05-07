import React from 'react'
import "./Style.css"
const Banner = () => {
  return (
    <div className="banner" id='banner'>
      <div className="content">
        <div className="heading">
          <h1>american food</h1>
          <h4>the best taste food</h4>

        </div>
        <hr className=' my-hr' />
       <p > Provide an overview of American cuisine, including its history, <br /> influences, and regional variations.
       Highlight some of the most <br /> popular and iconic American dishes,  such as hamburgers, hot  <br /> dogs, macaroni and cheese, and apple pie.
        </p>
      </div>
      <div className="banner__button">
        <button className='order__now__btn'>Order Now</button>
        <button className='left__arrow__btn'><i className="fa-solid fa-arrow-left "></i></button>
      </div>
    </div>
  )
}

export default Banner
