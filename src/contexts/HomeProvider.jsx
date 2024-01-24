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
  const storedIncomes = JSON.parse(localStorage.getItem('receitas')) || [];
  const storedExpenses = JSON.parse(localStorage.getItem('despesas')) || [];
  const storedpaidExpenses = JSON.parse(localStorage.getItem('despesasPagas')) || [];

  // const [transaction, setTransaction] = useState(initialTransaction);
  const [categories, setCategories] = useState(categoriesJson);
  const [typeRegister, setTypeRegister] = useState('');
  const [categoryIcons, setCategoryIcons] = useState(Icons);
  const [incomes, setIncomes] = useState(storedIncomes);
  const [expenses, setExpenses] = useState(storedExpenses);
  const [incomesIds, setIncomesIds] = useState(0);
  const [expensesIds, setExpensesIds] = useState(0);
  const [paidExpenses, setpaidExpenses] = useState(storedpaidExpenses);
  const [SelectExpense, setSelectExpense] = useState('');
  const [paydDate, setPaydDate] = useState('');

  // const updatedExpenses = expenses.filter((expense) => expenses.indexOf(expense) !== SelectExpense);
  // const paidExpense = expenses.filter((expense) => expenses.indexOf(expense) === SelectExpense);
  // paidExpense.payDate = paydDate;

  // console.log(SelectExpense);
  // console.log(paydDate);
  // console.log('Novo array sem a despesa selecionada', updatedExpenses);
  // console.log('Despesa selecionada', paidExpense);

  const handleTransaction = useCallback(
    (data) => {
      if (typeRegister === 'income') {
        const newIncome = [
          ...incomes, { id: incomesIds, type: typeRegister, ...data },
        ];
        setIncomes(newIncome);
        setIncomesIds(incomesIds + 1);

        localStorage.setItem('receitas', JSON.stringify(newIncome));
      } else if (typeRegister === 'expense') {
        const newExpense = [
          ...expenses, { id: expensesIds, type: typeRegister, ...data },
        ];
        setExpenses(newExpense);
        setExpensesIds(expensesIds + 1);
        localStorage.setItem('despesas', JSON.stringify(newExpense));
      }
    },
    [typeRegister, incomes, expenses, incomesIds, expensesIds],
  );

  const handlePayExpense = useCallback(
    () => {
      const updatedExpenses = expenses
        .filter((expense) => expenses.indexOf(expense) !== SelectExpense);

      const paidExpense = expenses
        .filter((expense) => expenses.indexOf(expense) === SelectExpense);
      paidExpense.payDate = paydDate;

      setExpenses(updatedExpenses);
      setpaidExpenses((prev) => [...prev, paidExpense]);

      // Atualiza o localStorage
      localStorage.setItem('despesas', JSON.stringify(updatedExpenses));
      localStorage.setItem('despesasPagas', JSON.stringify(
        [...paidExpenses, ...paidExpense],
      ));
    },
    [expenses, paidExpenses, SelectExpense, paydDate],
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
    paidExpenses,
    setpaidExpenses,
    handlePayExpense,
    expensesIds,
    setExpensesIds,
    incomesIds,
    setIncomesIds,
    SelectExpense,
    setSelectExpense,
    paydDate,
    setPaydDate,
  }), [
    typeRegister, setTypeRegister,
    categories, setCategories,
    categoryIcons, setCategoryIcons,
    incomes, setIncomes,
    expenses, setExpenses,
    paidExpenses, setpaidExpenses,
    expensesIds, setExpensesIds,
    incomesIds, setIncomesIds,
    SelectExpense, setSelectExpense,
    paydDate, setPaydDate,
    handleTransaction,
    handlePayExpense,
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
