import React from 'react';

const boxStyle = {
    border: '2px solid green',
    borderRadius: '10px',
    width: '85vh',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Orbitron, sans-serif',
    backgroundColor: '#375237',
};

const RocketValue = () => {
    return (
        <p style={boxStyle}>This is where current values of the rocket will go. </p>
    );
};

export default RocketValue;