import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="d-flex flex-row justify-content-around align-items-center">
      <Link Link to="/home" className="text-light text-decoration-none">
        Home
      </Link>

      <Link to="/about" className="text-light text-decoration-none">
        About
      </Link>

      <Link to="/contact" className="text-light text-decoration-none">
        Contato
      </Link>

    </nav>
  );
}

export default NavigationBar;
