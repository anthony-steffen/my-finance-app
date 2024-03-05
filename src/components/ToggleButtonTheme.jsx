import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.png';

function ToggleButtonTheme() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className={ `home-container ${theme}` }>

      <button
        type="button"
        onClick={ toggleTheme }
        style={ {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        } }
      >
        <img
          src={ theme === 'light' ? Moon : Sun }
          alt="theme"
          style={ { width: '30px' } }
        />

      </button>

    </div>
  );
}

export default ToggleButtonTheme;
