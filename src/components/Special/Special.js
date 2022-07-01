import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse, ornament] = useContext(RingContext);
  return (
    <div>
      <h4>
        Special: {ornament} {house}
      </h4>
    </div>
  );
};

export default Special;
