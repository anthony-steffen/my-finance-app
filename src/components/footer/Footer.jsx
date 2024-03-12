import { useContext } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiReactrouter, SiBootstrap, SiReacthookform } from 'react-icons/si';

import AppContext from '../../contexts/AppContext';
import NavigationBar from './NavigationBar';

import '../../styles/components/Footer.css';

function Footer() {
  const { theme } = useContext(AppContext);
  return (
    <footer
      className={
        `navbar fixed-bottom bg-${theme === 'light' ? 'primary' : 'black'} 
        bg-gradient text-light z-2`
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
