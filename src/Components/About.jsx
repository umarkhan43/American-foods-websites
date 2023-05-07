import React from 'react'
import "./Style.css"
import product1 from "../Assets/sandwitch.png"
const About = () => {
    return (
        <div className="about" id='about'>
            <div className="heading__about">
                <h1>About Us</h1>
                <h2>About Us</h2>
            <p>Welcome to America Foods, where we celebrate the diverse and delicious <br /> cuisine of the United States. Our goal is to showcase the best of American food, <br /> from classic dishes like hamburgers and hot dogs to regional specialties  like lobster <br /> rolls and BBQ. We are passionate about food and dedicated to providing our readers with mouth-watering <br /> recipes, informative articles, and a taste of American culture. Join us on a culinary journey across the <br /> United States and discover the rich and vibrant flavors of American cuisine.</p>
            </div>
            <div className="about__content">
                <div className="content__section">
                    <div className="about__heading headingg">
                        <h1>let food by the medicine <br />medicine by the food</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, debitis <br /> asperiores. Eveniet, sed dolorum. Porro nisi quidem quibusdam totam deleniti?</p>
                        <div className="about__btn">
                            <button className='about__btn_read'>Read More</button>
                            <button className='about__arrow__btn'><i className="fa-solid fa-arrow-left "></i></button>
                        </div>
                    </div>
                </div>
                <div className="image__section imageA">
                    <img src={product1} alt="" />
                </div>

                
            </div>
            <div className="about__content">
            <div className="image__section">
                    <img src={product1} alt="" />
                </div>
                <div className="content__section">
                    <div className="about__heading">
                        <h1>let food by the medicine <br />medicine by the food</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, debitis <br /> asperiores. Eveniet, sed dolorum. Porro nisi quidem quibusdam totam deleniti?</p>
                        <div className="about__btn">
                            <button className='about__btn_read'>Read More</button>
                            <button className='about__arrow__btn'><i className="fa-solid fa-arrow-left "></i></button>
                        </div>
                    </div>
                </div>
               

                
            </div>

        </div>
    )
}

export default About
