import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import categoriesJson from '../helper/categories.json';
import Icons from '../helper/Icons';
import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  // Ao inicializar, busca os dados da transação no localStorage
  // Caso não exista, retorna um array vazio para o estado inicial - transaction
  // const initialTransaction = JSON.parse(localStorage.getItem('transactions')) || [];
  const initialIncomeTransaction = JSON.parse(localStorage.getItem('Receita')) || [];
  const initialExpenseTransaction = JSON.parse(localStorage.getItem('Despesa')) || [];

  // const [transaction, setTransaction] = useState(initialTransaction);
  const [categories, setCategories] = useState(categoriesJson);
  const [typeRegister, setTypeRegister] = useState('');
  const [categoryIcons, setCategoryIcons] = useState(Icons);
  const [incomes, setIncomes] = useState(initialIncomeTransaction);
  const [expenses, setExpenses] = useState(initialExpenseTransaction);

  const handleTransaction = useCallback(
    (data) => {
      if (typeRegister === 'income') {
        const newIncome = [
          ...incomes, { id: incomes.length + 1, type: typeRegister, ...data },
        ];
        setIncomes(newIncome);
        localStorage.setItem('Receita', JSON.stringify(newIncome));
      } else if (typeRegister === 'expense') {
        const newExpense = [
          ...expenses, { id: expenses.length + 1, type: typeRegister, ...data },
        ];
        setExpenses(newExpense);
        localStorage.setItem('Despesa', JSON.stringify(newExpense));
      }
    },
    [typeRegister, incomes, expenses],
  );

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    incomes,
    setIncomes,
    expenses,
    setExpenses,
    handleTransaction,

  }), [
    typeRegister,
    setTypeRegister,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    incomes,
    setIncomes,
    expenses,
    setExpenses,
    handleTransaction,
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
