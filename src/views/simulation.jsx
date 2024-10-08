import React from "react";
import { useNavigate } from "react-router-dom";
import './simulation.css';

const SimulationScreen = () => {
  const navigate = useNavigate();
  const handleMainWindow = () => {
    navigate('/main_window'); 
  };

    return (
      <div>
        <h1>This is the Simulation Screen</h1>
        <button onClick={handleMainWindow}>Back</button>
        {/* Your simulation logic goes here */}
      </div>
    );
  };
  
  export default SimulationScreen;