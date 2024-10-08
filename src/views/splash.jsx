import React from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";

const SplashButton = (props) => {
  return (
    <button className="button-style" onClick={props.onClick}>
      {" "}
      {props.buttonName}{" "}
    </button>
  );
};

export default function Splash() {
  const navigate = useNavigate();
  const handleStartSimulation = () => {
    navigate("/simulation");
  };

  return (
    <div className="splash-div">
      <h1> Rocket Visualizer </h1>
      <SplashButton buttonName="Save" />
      <SplashButton buttonName="Load" />
      <SplashButton buttonName="Simulation" onClick={handleStartSimulation} />
    </div>
  );
}
