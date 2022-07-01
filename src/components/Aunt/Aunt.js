import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunt = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h4>Aunt:{house}</h4>
      <p>Ring:{}</p>
      <button onClick={() => setHouse(house + 1)}>Buy a House</button>
    </div>
  );
};

export default Aunt;
