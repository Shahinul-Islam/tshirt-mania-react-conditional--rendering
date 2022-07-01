import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h4>Father:{house}</h4>
      <div style={{ display: "flex" }}>
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
