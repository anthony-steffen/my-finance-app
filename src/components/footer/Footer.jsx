import { useContext } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiReactrouter, SiBootstrap, SiReacthookform } from 'react-icons/si';

import HomeContext from '../../contexts/HomeContext';
import NavigationBar from './NavigationBar';

import '../../styles/components/Footer.css';

function Footer() {
  const { theme } = useContext(HomeContext);
  return (
    <footer
      className={
        `navbar sticky-bottom ${theme === 'light' ? 'bg-primary' : 'bg-dark'} 
        text-light`
      }
      style={ { height: '12vh' } }
    >
      <div className="container-footer w-100 d-flex flex-column justify-content-center">
        <NavigationBar />
        <div
          className="
        footer-icons  d-flex flex-row gap-2
        align-items-center justify-content-center
        "
        >
          Tecnologias Utilizadas
          <FaReact className="icon" />
          <FaNodeJs className="icon" />
          <FaHtml5 className="icon" />
          <FaCss3 className="icon" />
          <SiBootstrap className="icon" />
          <SiReactrouter className="icon" />
          <SiReacthookform className="icon" />

        </div>
        <div className="text-center">
          &copy; 2024 Anthony. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
