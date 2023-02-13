import React from 'react';
import "./App.css"

const ComponentB = ({ cendol, setCendol }) => {
  const handleClick = () => {
    setCendol(cendol + 10);
  };

  return (
    <div className='container' >
      <h1 className='count' >{cendol}</h1>
      <button onClick={handleClick}>Increment cendol by 10</button>
    </div>
  );
};

export default ComponentB;