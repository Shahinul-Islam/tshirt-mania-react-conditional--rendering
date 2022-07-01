import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunt from "../Aunt/Aunt";
import "./Grandpa.css";

export const RingContext = React.createContext();
const Grandpa = () => {
  const ornament = "Diamond Ring";
  const [house, setHouse] = useState(1);
  const buyAHouse = () => {
    const newhouse = house + 1;
    setHouse(newhouse);
  };
  return (
    <RingContext.Provider value={[house, setHouse, ornament]}>
      <div>
        <h3>Grand Pa</h3>
        <button onClick={buyAHouse}>Buy a House: {house}</button>
        <p>House: {house}</p>
        <div className="grandpa">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunt house={house}></Aunt>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
