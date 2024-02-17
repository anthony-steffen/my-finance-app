import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.png';

function ToggleButtonTheme() {
  const { theme, toggleTheme } = useContext(HomeContext);

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
