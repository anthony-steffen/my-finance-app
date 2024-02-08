import '../styles/components/Footer.css';

import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';

function Footer() {
  const { theme } = useContext(HomeContext);
  return (
    <nav
      className={ `
    footer-navbar sticky-bottom py-3 bg-${theme === 'light' ? 'primary' : 'dark'}
    ` }

    >
      <div className="container-fluid">
        <a className=" navbar-brand text-white" href="http:">Footer Sticky bottom</a>
      </div>
    </nav>
  );
}

export default Footer;
