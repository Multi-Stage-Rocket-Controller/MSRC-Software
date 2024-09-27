import React from "react";

const SplashStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "10px",
  textAlign: "center",
  margin: "10px",
};

export default function Splash() {
  return (
    <div className="splash-div" style={SplashStyle}>
      <h1> Rocket Visualizer </h1>
      <button> Save </button>
      <button> Load </button>
    </div>
  );
}