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
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(
    () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
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
  }), [
    typeRegister, setTypeRegister,
    categories, setCategories,
    categoryIcons, setCategoryIcons,
    selectedCategory, setSelectedCategory,
    theme, setTheme,
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
