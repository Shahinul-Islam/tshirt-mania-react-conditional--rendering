import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeProduct }) => {
  return (
    <div>
      <h3>Total Products Selected: {cart.length}</h3>
      {cart.length === 0 ? <p style={{ color: "red" }}>Kipta, khoroch kore na</p> : <div style={{ backgroundColor: "orange" }}>YAY, You are buying</div>}
      {cart.map((cartItem) => (
        <div className="cart-item">
          <p>{cartItem.name}</p>
          <button onClick={() => removeProduct(cartItem)}> X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
