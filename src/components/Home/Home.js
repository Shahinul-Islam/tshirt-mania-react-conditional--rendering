import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exist = cart.find((selectedItem) => selectedItem._id === product._id);
    if (!exist) {
      const newCart = [...cart, product];
      setCart(newCart);
    } else {
      alert("Items already added");
    }
  };
  const removeProduct = (removedItem) => {
    const rest = cart.filter((singleProduct) => singleProduct._id !== removedItem._id);
    setCart(rest);
  };
  return (
    <div className="home">
      <div className="product-container">
        {products.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart key={cart._id} cart={cart} removeProduct={removeProduct}></Cart>
      </div>
    </div>
  );
};

export default Home;
