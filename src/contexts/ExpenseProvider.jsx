import { useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseContext from './ExpenseContext';
import HomeContext from './HomeContext';

const { Provider } = ExpenseContext;

function ExpenseProvider({ children }) {
// Busca as despesas no localStorage e caso não exista, retorna um array vazio
  const storedExpenses = JSON.parse(localStorage.getItem('despesas')) || [];
  const storedpaidExpenses = JSON.parse(localStorage.getItem('despesasPagas')) || [];

  // Busca o tipo de registro no contexto Home
  const { typeRegister, setTypeRegister } = useContext(HomeContext);

  const [expenses, setExpenses] = useState(storedExpenses);
  const [expensesIds, setExpensesIds] = useState(0);
  const [totalExpenses] = useState(
    storedExpenses.reduce((acc, expense) => acc + Number(expense.value), 0),
  );
  const [paidExpenses, setpaidExpenses] = useState(storedpaidExpenses);
  const [selectExpense, setSelectExpense] = useState('');
  const [paydDate, setPaydDate] = useState('');

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
      const updatedExpenses = expenses
        .filter((expense) => expenses.indexOf(expense) !== selectExpense);

      const paidExpense = expenses
        .filter((expense) => expenses.indexOf(expense) === selectExpense);
      paidExpense.payDate = paydDate;

      setExpenses(updatedExpenses);
      setpaidExpenses((prev) => [...prev, paidExpense]);

      // Atualiza o localStorage
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
          return {
            ...expense,
            description: data.description,
            value: data.value,
            paymentMethod: data.paymentMethod,
            category: data.category,
            subCategory: data.subCategory,
            payer: data.payer,
            receiver: data.receiver,
            date: data.date,
          };
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
      const updatedExpenses = expenses
        .filter((expense) => expenses.indexOf(expense) !== selectExpense);

      setExpenses(updatedExpenses);
      localStorage.setItem('despesas', JSON.stringify(updatedExpenses));
    },
    [expenses, selectExpense],
  );

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    expenses,
    totalExpenses,
    setExpenses,
    selectExpense,
    setSelectExpense,
    paydDate,
    setPaydDate,
    handleAddExpense,
    handlePayExpense,
    hundleEditExpense,
    handleDeleteExpense,
  }), [
    typeRegister, setTypeRegister,
    expenses, setExpenses,
    totalExpenses,
    selectExpense, setSelectExpense,
    paydDate, setPaydDate,
    handleAddExpense,
    handlePayExpense,
    hundleEditExpense,
    handleDeleteExpense,
  ]);

  return <Provider value={ store }>{children}</Provider>;
}

export default ExpenseProvider;
ExpenseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
