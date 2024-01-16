import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import categoriesJson from '../helper/categories.json';

import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  // Ao inicializar, busca os dados da transação no localStorage
  // Caso não exista, retorna um array vazio para o estado inicial - transaction
  const initialTransaction = JSON.parse(localStorage.getItem('transactions')) || [];

  const [transaction, setTransaction] = useState(initialTransaction);
  const [categories, setCategories] = useState(categoriesJson);
  const [typeRegister, setTypeRegister] = useState('');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transaction));
  }, [transaction]);

  // const addTransaction = useCallback(
  //   (newTransaction) => {
  //     setTransaction((prevState) => [
  //       ...prevState,
  //       { id: prevState.length + 1, ...newTransaction },
  //     ]);
  //   },
  //   [],
  // );

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    transaction,
    setTransaction,
    categories,
    setCategories,
    // addTransaction,

  }), [
    typeRegister,
    setTypeRegister,
    transaction,
    setTransaction,
    categories,
    setCategories,
    // addTransaction,
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
