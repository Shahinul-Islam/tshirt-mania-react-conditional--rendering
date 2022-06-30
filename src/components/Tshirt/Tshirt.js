import React from "react";
import "./tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="tshirt-card">
      <div className="tshirt-image">
        <img src={picture} alt="tshirt" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Tshirt;
