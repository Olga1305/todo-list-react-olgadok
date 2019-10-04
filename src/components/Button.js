import React from 'react';
import './Button.css';

const Button = ({ children, myProp }) => {
  return (
    <button onClick={myProp}>
      {children}
    </button>
  );
};

export default Button;