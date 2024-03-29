import { useContext } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import ToggleButtonTheme from './ToggleButtonTheme';
import logo from '../assets/logo.png';

import AppContext from '../contexts/AppContext';

import '../styles/components/Header.css';
import '../styles/components/ToggleTheme.css';
import MenuHamburger from './MenuHamburger';

function Header() {
  const {
    totalExpenses,
    totalIncomes,
    theme,
    showBalance,
    setShowBalance,
  } = useContext(AppContext);

  return (
    <header
      className={ `
    navbar sticky-top bg-${theme === 'light' ? 'primary' : 'black'}
    bg-gradient border-bottom border-dark rounded-2
    ` }
      style={ { height: '15vh' } }
    >

      <div
        className="container-fluid"
        style={ {
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        } }
      >
        <ToggleButtonTheme />
        <div className="navbar-title-container text-white">
          <h3 className="navbar-title mb-0">
            Saldo da conta:
            {' '}
          </h3>
          <span className="navbar-value d-flex gap-2">
            {showBalance ? '******' : (totalIncomes - totalExpenses).toFixed(2)}
            <button
              type="button"
              onClick={ () => setShowBalance(!showBalance) }
              style={ {
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              } }
            >
              {showBalance ? <PiEyeClosed size="20px" color="white" />
                : <PiEye size="20px" color="white" />}
            </button>
          </span>

        </div>
        <img
          className="img-logo-header"
          src={ logo }
          alt="logo"
          style={ { maxWidth: '70px' } }
        />
        {/* </div> */}
        <MenuHamburger />
      </div>
    </header>
  );
}

export default Header;
