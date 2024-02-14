import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="d-flex flex-row justify-content-around fw-bold">
      <Link to="/" className="text-light">
        Inicio
      </Link>
      <Link to="/home" className="text-light">
        Home
      </Link>
      <Link to="/about" className="text-light">
        Sobre Nós
      </Link>
      <Link to="/contact" className="text-light">
        Contato
      </Link>
    </nav>
  );
}

export default NavigationBar;
