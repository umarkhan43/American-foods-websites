import React from 'react'
import "./App.css"
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Discount from './Components/Discount'
import Pricing from './Components/Pricing'
import DiscountB from './Components/DiscountB'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Banner/>
    <About/>
    <Services/>
    <Discount/>
    <Pricing/>
    <DiscountB/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
