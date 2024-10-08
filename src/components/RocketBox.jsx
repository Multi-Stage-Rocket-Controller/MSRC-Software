import React from "react";

const boxStyle = {
  border: "2px solid green",
  borderRadius: "10px",
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Orbitron, sans-serif",
  backgroundColor: "#375237",
};

const Box = ({ label }) => {
  return (
    <div style={boxStyle}>
      <h2>{label}</h2>
    </div>
  );
};

export default Box;