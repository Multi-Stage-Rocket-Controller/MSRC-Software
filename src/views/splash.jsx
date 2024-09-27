import React from "react";

const SplashStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  textAlign: "center",
  margin: "10px",
};

const ButtonStyle = {
  backgroundColor: "lightblue",
  color: "white",
  padding: "10px",
  textAlign: "center",
  display: "block",
  justifyContent: "center",
  margin: "10px",
  fontOpticalSizing: "auto",
  fontWeight: "500",
  fontStyle: "normal",
  borderRadius: "12px",
  border: "2px solid #aa0404",
  width: "100px",
  fontFamily: "Orbitron, sans-serif",
};

const buttonContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const SplashButton = (props) => {
  return <button style={ButtonStyle}> {props.buttonName} </button>;
}

export default function Splash() {
  return (
    <div className="splash-div" style={SplashStyle}>
      <h1> Rocket Visualizer </h1>
      <div className="buttonContainer">
        <SplashButton buttonName="Save" />
        <SplashButton buttonName="Load" />
      </div>
    </div>
  );
}