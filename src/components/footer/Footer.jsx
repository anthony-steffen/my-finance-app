import '../../styles/components/Footer.css';

import { useContext } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { Link } from 'react-router-dom';
import HomeContext from '../../contexts/HomeContext';

function Footer() {
  const { theme } = useContext(HomeContext);
  return (
    <footer
      className={
        `${theme === 'light' ? 'bg-primary' : 'bg-dark'} 
        text-light text-center py-1 sticky-bottom`
      }
    >
      <div className="container-footer">
        <div className="d-flex flex-row justify-content-between px-4">
          <Link to="/" className="text-light">
            Página Inicial
          </Link>
          <Link to="/about" className="text-light">
            Sobre Nós
          </Link>
          <Link to="/contact" className="text-light">
            Contato
          </Link>
        </div>
        <div
          className="
        footer-icons mt-1 d-flex flex-row gap-1 align-items-center justify-content-center
        "
        >
          <p>Tecnologias Utilizadas</p>
          <FaReact className="icon" />
          <FaNodeJs className="icon" />
          <FaHtml5 className="icon" />
          <FaCss3 className="icon" />
          <SiBootstrap className="icon" />

        </div>
        <p
          className="mt-1"
        >
          &copy; 2024 Anthony. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
