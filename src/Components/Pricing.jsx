import React from 'react'
import "./Style.css"
// import pricing from "../Store/PricingStore"
const Pricing = () => {
    return (
        <div className="pricing" id='pricing'>
            <div className="about">
                <div className="heading__about">
                    <h1>Pricing</h1>
                    <h2>Pricing</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, debitis <br /> asperiores. Eveniet, sed dolorum. Porro nisi quidem quibusdam totam deleniti?</p>
                </div>
            </div>
            <div className="card__container">
                {/* Card One */}
                <div className="card__content">
                    <div className="card__heading">
                        <h6>basic</h6>
                        <h5>35$</h5>
                    </div>
                    <div className="product__info">
                        <p>6 pis chicken</p>
                        <p>3 pis beef chicken</p>
                        <p>2 pis burger</p>
                    </div>
                    <div className="btn">
                        <button className='buy__now__btn'>Buy Now</button>
                    </div>

                </div>
                {/* Card Two */}

                <div className="card__content">
                    <div className="card__heading">
                        <h6>standard</h6>
                        <h5>50$</h5>
                    </div>
                    <div className="product__info">
                        <p>6 pis chicken</p>
                        <p>3 pis beef chicken</p>
                        <p>2 pis burger</p>
                    </div>
                    <div className="btn">
                        <button className='buy__now__btn'>Buy Now</button>
                    </div>

                </div>


                {/* Card Three */}
                <div className="card__content">
                    <div className="card__heading">
                        <h6>perimium</h6>
                        <h5>45$</h5>
                    </div>
                    <div className="product__info">
                        <p>6 pis chicken</p>
                        <p>3 pis beef chicken</p>
                        <p>2 pis burger</p>
                    </div>
                    <div className="btn">
                        <button className='buy__now__btn'>Buy Now</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Pricing
