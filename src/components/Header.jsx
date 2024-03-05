import { useContext } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import ToggleButtonTheme from './ToggleButtonTheme';
import logo from '../assets/logo.png';

import HomeContext from '../contexts/HomeContext';
import IncomeContext from '../contexts/IncomeContext';
import ExpenseContext from '../contexts/ExpenseContext';

import '../styles/components/Header.css';
import '../styles/components/ToggleTheme.css';
import MenuHamburger from './MenuHamburger';

function Header() {
  const { theme, showBalance, setShowBalance } = useContext(HomeContext);
  const { totalIncomes } = useContext(IncomeContext);
  const { totalExpenses } = useContext(ExpenseContext);

  console.log(totalIncomes, totalExpenses);

  return (
    <header
      className={ `
    navbar sticky-top bg-${theme === 'light' ? 'primary' : 'dark'}
    ` }
      style={ { height: '12vh' } }
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
            {showBalance ? '******' : totalIncomes - totalExpenses}
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
        <div className="img-logo-container col-3">
          <img
            className="img-logo-header"
            src={ logo }
            alt="logo"
            style={ { maxWidth: '70px' } }
          />
        </div>
        <MenuHamburger />
      </div>
    </header>
  );
}

export default Header;
