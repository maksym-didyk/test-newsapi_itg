import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/logo_NewsAPI.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="singupform__logo">
        <Link to="/">
          <img src={imgLogo} alt="BestRest Logo" />
        </Link>
      </div>
    </div>
  );
};
