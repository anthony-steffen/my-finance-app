import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';

function ToggleTheme() {
  const { theme, toogleTheme } = useContext(HomeContext);
  console.log(theme);

  return (
    <div className={ `home-container ${theme}` }>
      <button
        type="button"
        className={ `btn btn-${theme === 'light' ? 'dark' : 'light'}` }
        onClick={ toogleTheme }
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}

export default ToggleTheme;
