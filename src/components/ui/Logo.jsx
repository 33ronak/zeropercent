import React from 'react';
import logoImage from '../../assets/zeropercent.png';


export const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="Zero Logo"
        className="h-12"
      />
    </div>
  );
};