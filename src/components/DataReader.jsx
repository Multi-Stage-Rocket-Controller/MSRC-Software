import React, { useState, useEffect } from 'react';

const DataReader = ({style}) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentData, setCurrentData] = useState({});

  // Load the JSON file when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./../assets/demo/demo_data2.json'); // Ensure the JSON file is in the public folder
      const jsonData = await response.json();
      setData(jsonData);
      setCurrentData(jsonData[0]); // Set initial data for the text box
    };

    fetchData();
  }, []);

  // Update the text box value every second
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % data.length;
        setCurrentData(data[newIndex]);
        return newIndex;
      });
    }, 1000); // Change data every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [data]);

  return (
    <div style={style}>
      <h2>Current Data</h2>
      <textarea
        rows="10"
        cols="50"
        readOnly
        value={JSON.stringify(currentData, null, 2)}
      />
    </div>
  );
};

export default DataReader;
