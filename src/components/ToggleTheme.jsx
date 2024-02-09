import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.png';

function ToggleTheme() {
  const { theme, toogleTheme } = useContext(HomeContext);
  console.log(theme);

  return (

    <div className={ `home-container ${theme}` }>

      <button
        type="button"
        onClick={ toogleTheme }
        style={ {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          // position: 'absolute',
          // bottom: '10px',
          // right: '20px',
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

export default ToggleTheme;
