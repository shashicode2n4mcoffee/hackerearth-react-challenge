import React from 'react';
import '../App.css';

const Box = ({ item, val }) => {
  return <div className={val===item? 'box active': 'box'}>{item}</div>;
};

export default Box;
