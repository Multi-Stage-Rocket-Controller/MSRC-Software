import React from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";

const SplashButton = (props) => {
  return (
    <button className="button-style" onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
};

export default function Splash() {
  const navigate = useNavigate();
  const handleStartSimulation = () => {
    navigate("/simulation");
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
      if (file.type === "text/csv") {
        console.error("Invalid file type. Please select a JSON file.");
      }
      if (file.type !== "application/json") {
        console.error("CSV File detected. Please select a JSON file.");
      }
      if (file.type === "application/json") {
        console.log("Correct file type detected. Loading simulation...");
        navigate("/simulation");
      }
    }
  };

  const handleFileLoadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="splash-div">
      <h1> Rocket Visualizer </h1>
      <SplashButton buttonName="Connect" />
      <SplashButton
        buttonName="Load"
        onClick={handleFileLoadClick}
      />
      <SplashButton buttonName="Simulation" onClick={handleStartSimulation} />
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
    </div>
  );
}
