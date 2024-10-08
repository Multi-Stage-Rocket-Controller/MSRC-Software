import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashButton = () => {
  const navigate = useNavigate();

  const handleStartSimulation = () => {
    navigate('/simulation');  // This navigates to the simulation screen
  };

  return (
    <div>
      <h1>Welcome to the Simulation!</h1>
      <button onClick={handleStartSimulation}>Start Simulation</button>
    </div>
  );
};

export default SplashButton;
