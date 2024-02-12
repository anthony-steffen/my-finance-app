import '../styles/components/Footer.css';

import { useContext } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import HomeContext from '../contexts/HomeContext';

function Footer() {
  const { theme } = useContext(HomeContext);
  return (
    <footer
      className={
        `${theme === 'light' ? 'bg-primary' : 'bg-dark'} 
        text-light text-center py-1 sticky-bottom`
      }
    >
      {/* <footer className="bg-dark text-light text-center py-3"></footer> */}
      <div className="container-footer">
        <div className="d-flex flex-row justify-content-between px-4">
          <a href="/sobre" className="text-light">Sobre Nós</a>
          <a href="/" className="text-light">Página Inicial</a>
          <a href="/contato" className="text-light">Contato</a>
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
