import React from 'react'
import blogA from "../Assets/blogs-one.png"
import blogB from "../Assets/blogs.png"


import "./Style.css"
const Blog = () => {
  return (
    <div className="blog" id='blog'>
      <div className="pricing" id='pricing'>
        <div className="about">
          <div className="heading__about">
            <h1>Blog</h1>
            <h2>Blog</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, debitis <br /> asperiores. Eveniet, sed dolorum. Porro nisi quidem quibusdam totam deleniti?</p>
          </div>
        </div>
      </div>
      <div className="blogs">
        <div className="bloges">
          <img src={blogA} alt="" />
        </div>
        <div className="bloges blog__two">
          <h1>Eat food.Not too much <br /> mostly plants</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Alias facere libero mollitia sapiente accusantium suscipit!</p>
          <button className='discover__now'>Read More</button>
       
        </div>
        <div className="bloges">
          <img src={blogB} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Blog
