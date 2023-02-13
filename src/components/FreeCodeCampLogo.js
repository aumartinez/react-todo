import React from 'react';
import logo from '../img/freecodecamp-logo.png'

const FreeCodeCampLogo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} className='freecodecamp-logo' />
    </div>
  );
};

export default FreeCodeCampLogo;