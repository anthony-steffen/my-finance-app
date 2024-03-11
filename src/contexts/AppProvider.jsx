import { useMemo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import categoriesJson from '../helper/categories.json';
import Icons from '../helper/Icons';

import AppContext from './AppContext';

const { Provider } = AppContext;

function AppProvider({ children }) {
  // Estado do HomeProvider
  const [typeRegister, setTypeRegister] = useState('');
  const [categories, setCategories] = useState(categoriesJson);
  const [categoryIcons, setCategoryIcons] = useState(Icons);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showBalance, setShowBalance] = useState('******');
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(
    () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    },
    [theme],
  );

  // Estado do IncomeProvider
  const storedIncomes = JSON.parse(localStorage.getItem('receitas')) || [];
  const [incomes, setIncomes] = useState(storedIncomes);
  const [receivedIncomes, setReceivedIncomes] = useState([]);
  const [incomesIds, setIncomesIds] = useState(0);
  const [selectIncome, setSelectIncome] = useState('');
  const [receivedDate, setReceivedDate] = useState('');
  const [totalIncomes, setTotalIncomes] = useState(0);

  useEffect(() => {
    const amount = incomes.reduce((acc, income) => acc + Number(income.value), 0);
    setTotalIncomes(amount);
  }, [incomes]);

  const addIncome = useCallback(
    (data) => {
      const newIncome = [
        ...incomes, { id: incomesIds, type: 'income', ...data },
      ];
      setIncomes(newIncome);
      setIncomesIds(incomesIds + 1);
      localStorage.setItem('receitas', JSON.stringify(newIncome));
    },
    [incomes, incomesIds],
  );

  const receiveIncome = useCallback(
    () => {
      const updatedIncomes = incomes
        .filter((income) => incomes.indexOf(income) !== selectIncome);

      const receivedIncome = incomes
        .filter((income) => incomes.indexOf(income) === selectIncome);
      receivedIncome.receivedDate = receivedDate;

      setIncomes(updatedIncomes);
      setReceivedIncomes((prev) => [...prev, receivedIncome]);

      localStorage.setItem('receitas', JSON.stringify(updatedIncomes));
      localStorage.setItem('recebidas', JSON.stringify(
        [...receivedIncomes, ...receivedIncome],
      ));
    },
    [incomes, receivedIncomes, selectIncome, receivedDate],
  );

  const editIncome = useCallback(
    (data) => {
      const updatedIncomes = incomes.map((income, index) => {
        if (index === selectIncome) {
          return { ...income, ...data };
        }
        return income;
      });
      setIncomes(updatedIncomes);
      localStorage.setItem('receitas', JSON.stringify(updatedIncomes));
    },
    [incomes, selectIncome],
  );

  const removeIncome = useCallback(
    () => {
      const updatedIncomes = incomes
        .filter((income) => incomes.indexOf(income) !== selectIncome);
      setIncomes(updatedIncomes);
      localStorage.setItem('receitas', JSON.stringify(updatedIncomes));
    },
    [incomes, selectIncome],
  );

  // Estado do ExpenseProvider
  const storedExpenses = JSON.parse(localStorage.getItem('despesas')) || [];
  const [expenses, setExpenses] = useState(storedExpenses);
  const [expensesIds, setExpensesIds] = useState(0);
  const [paidExpenses, setPaidExpenses] = useState([]);
  const [selectExpense, setSelectExpense] = useState('');
  const [paydDate, setPaydDate] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const amount = expenses.reduce((acc, expense) => acc + Number(expense.value), 0);
    setTotalExpenses(amount);
  }, [expenses]);

  const handleAddExpense = useCallback(
    (data) => {
      if (typeRegister === 'expense') {
        const newExpense = [
          ...expenses, { id: expensesIds, type: typeRegister, ...data },
        ];
        setExpenses(newExpense);
        setExpensesIds(expensesIds + 1);
        localStorage.setItem('despesas', JSON.stringify(newExpense));
      }
    },
    [typeRegister, expenses, expensesIds],
  );

  const handlePayExpense = useCallback(
    () => {
      const updatedExpenses = expenses.filter((expense) => expenses
        .indexOf(expense) !== selectExpense);

      const paidExpense = expenses.filter((expense) => expenses
        .indexOf(expense) === selectExpense);
      paidExpense.payDate = paydDate;

      setExpenses(updatedExpenses);
      setPaidExpenses((prev) => [...prev, paidExpense]);

      localStorage.setItem('despesas', JSON.stringify(updatedExpenses));
      localStorage.setItem('despesasPagas', JSON.stringify(
        [...paidExpenses, ...paidExpense],
      ));
    },
    [expenses, paidExpenses, selectExpense, paydDate],
  );

  const hundleEditExpense = useCallback(
    (data) => {
      const updatedExpenses = expenses.map((expense, index) => {
        if (index === selectExpense) {
          return { ...expense, ...data };
        }
        return expense;
      });

      setExpenses(updatedExpenses);
      localStorage.setItem('despesas', JSON.stringify(updatedExpenses));
    },
    [expenses, selectExpense],
  );

  const handleDeleteExpense = useCallback(
    () => {
      const updatedExpenses = expenses.filter((expense) => expenses
        .indexOf(expense) !== selectExpense);

      setExpenses(updatedExpenses);
      localStorage.setItem('despesas', JSON.stringify(updatedExpenses));
    },
    [expenses, selectExpense],
  );

  const store = useMemo(() => ({
    // Atualizações dos estados do HomeProvider
    typeRegister,
    setTypeRegister,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    showBalance,
    setShowBalance,
    theme,
    setTheme,
    categoryIcons,
    setCategoryIcons,
    incomes,
    receivedIncomes,
    totalIncomes,
    selectIncome,
    addIncome,
    receiveIncome,
    editIncome,
    removeIncome,
    setSelectIncome,
    setReceivedDate,
    expenses,
    setExpenses,
    paidExpenses,
    setPaidExpenses,
    selectExpense,
    setSelectExpense,
    paydDate,
    setPaydDate,
    totalExpenses,
    setTotalExpenses,
    handleAddExpense,
    handlePayExpense,
    hundleEditExpense,
    handleDeleteExpense,
    toggleTheme,
  }), [
    typeRegister, setTypeRegister,
    categories, setCategories,
    selectedCategory, setSelectedCategory,
    showBalance, setShowBalance,
    theme, setTheme,
    categoryIcons, setCategoryIcons,
    receivedIncomes, receiveIncome,
    selectIncome, setSelectIncome,
    incomes,
    totalIncomes,
    addIncome,
    editIncome,
    removeIncome,
    setReceivedDate,
    expenses, setExpenses,
    paidExpenses, setPaidExpenses,
    selectExpense, setSelectExpense,
    paydDate, setPaydDate,
    totalExpenses,
    handleAddExpense,
    handlePayExpense,
    hundleEditExpense,
    handleDeleteExpense,
    toggleTheme,
  ]);
  return (
    <Provider value={ store }>
      {children}
    </Provider>
  );
}

export default AppProvider;
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
