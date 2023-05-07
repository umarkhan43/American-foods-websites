import React from 'react'
import "./Style.css"
import product1 from "../Assets/Product1.png"
import Servise from "../Store/SerivseStore"
const Services = () => {
  return (
    <div className="services">
      <div className="about">
        <div className="heading__about">
          <h1>Services</h1>
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, debitis <br /> asperiores. Eveniet, sed dolorum. Porro nisi quidem quibusdam totam deleniti?</p>
        </div>
      </div>
      {
        Servise.map((data) => {
          return (
            <div className="about__content servise__section" id='services'>
              <div className="content__section">
                <div className="about__heading">
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                  <div className="about__btn buy__now">
                    <button className='about__btn_read'>Buy Now</button>

                  </div>
                </div>
              </div>
              <div className="price"><h1>{data.price}$</h1></div>
              <div className="image__section serivse__img"><img src={data.image} alt="" /></div>
            </div>

          )
        })
      }


    </div>
  )
}

export default Services
