import React from 'react';
import jug from '../images/jug.png'
import './ProductCard.scss'; 

import { useNavigate } from "react-router-dom";

function ProductCard() {
    const navigate = useNavigate();
    const handleClick = () => {
      console.log("Button clicked!");
      navigate("/productregisteration"); 
    };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={jug} alt="Product" />
      </div>
      <div className="product-details">
        <h3 className="product-title">Hydration Water Jug</h3>
        <section className='product-info '>

        <p className="product-info"> Hydration Water Jug 11L</p>
        <p className="product-info"> 899kr</p>
        <p className="product-info"><span className="dot white"></span> <span className="dot black"></span></p>
        </section>
        <button className="shop-now-btn" onClick={handleClick}>Shop Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
