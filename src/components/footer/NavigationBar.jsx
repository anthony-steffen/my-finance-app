import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  // Obtém a localização atual
  const location = useLocation();
  // Verifica se a localização é a home
  const isHome = location.pathname === '/home';
  const isContact = location.pathname === '/contact';
  const isAbout = location.pathname === '/about';
  return (
    <nav className="d-flex flex-row justify-content-around align-items-center">
      <Link to="/" className="text-light">
        Inicio
      </Link>
      {!isHome && (
        <Link Link to="/home" className="text-light">
          Home
        </Link>
      )}
      {!isAbout && (
        <Link to="/about" className="text-light">
          About
        </Link>
      )}
      {!isContact && (
        <Link to="/contact" className="text-light">
          Contato
        </Link>
      )}
    </nav>
  );
}

export default NavigationBar;
