import React from 'react';
import  "./Button.scss"
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className='butn'>
      {label}
    </button>
  );
};

export default Button;
