import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import categoriesJson from '../helper/categories.json';
import Icons from '../helper/Icons';
import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  const [categories, setCategories] = useState(categoriesJson);
  const [typeRegister, setTypeRegister] = useState('');
  const [categoryIcons, setCategoryIcons] = useState(Icons);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showBalance, setShowBalance] = useState('******');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(
    () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    },
    [theme],
  );

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    selectedCategory,
    setSelectedCategory,
    theme,
    setTheme,
    toggleTheme,
    showBalance,
    setShowBalance,
  }), [
    typeRegister, setTypeRegister,
    categories, setCategories,
    categoryIcons, setCategoryIcons,
    selectedCategory, setSelectedCategory,
    theme, setTheme,
    showBalance, setShowBalance,
    toggleTheme,
  ]);

  return (
    <Provider value={ store }>
      {children}
    </Provider>
  );
}

export default HomeProvider;

HomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
