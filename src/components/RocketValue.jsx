import React from 'react';
import DataReader from './DataReader.jsx';

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
        <>
            <p style={boxStyle}>Past Yaw: __ ° </p>
            {/* <DataReader /> */}
            <p style={boxStyle}>Roll_Radians : __ ° </p>
        </>
    );
};

export default RocketValue;