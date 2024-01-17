import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import categoriesJson from '../helper/categories.json';
import Icons from '../helper/Icons';
import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  // Ao inicializar, busca os dados da transação no localStorage
  // Caso não exista, retorna um array vazio para o estado inicial - transaction
  const initialTransaction = JSON.parse(localStorage.getItem('transactions')) || [];

  const [transaction, setTransaction] = useState(initialTransaction);
  const [categories, setCategories] = useState(categoriesJson);
  const [typeRegister, setTypeRegister] = useState('');
  const [categoryIcons, setCategoryIcons] = useState(Icons);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transaction));
  }, [transaction]);

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    transaction,
    setTransaction,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    income,
    setIncome,
    expense,
    setExpense,

  }), [
    typeRegister,
    setTypeRegister,
    transaction,
    setTransaction,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    income,
    setIncome,
    expense,
    setExpense,

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
