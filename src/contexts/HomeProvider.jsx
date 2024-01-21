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
  const [paidExpenses, setpaidExpenses] = useState(storedpaidExpenses);

  const handleTransaction = useCallback(
    (data) => {
      if (typeRegister === 'income') {
        const newIncome = [
          ...incomes, { id: incomes.length + 1, type: typeRegister, ...data },
        ];
        setIncomes(newIncome);
        localStorage.setItem('receitas', JSON.stringify(newIncome));
      } else if (typeRegister === 'expense') {
        const newExpense = [
          ...expenses, { id: expenses.length + 1, type: typeRegister, ...data },
        ];
        setExpenses(newExpense);
        localStorage.setItem('despesas', JSON.stringify(newExpense));
      }
    },
    [typeRegister, incomes, expenses],
  );

  const handlePayExpense = useCallback(
    (index) => {
      // Remove a despesa do array de despesas e adiciona no array de despesas pagas
      // Atribui a data atual à despesa paga
      const updatedExpenses = [...expenses];
      const paidExpense = updatedExpenses.splice(index, 1)[0];
      paidExpense.paidDate = new Date().toLocaleDateString('pt-BR');

      setExpenses(updatedExpenses);
      setpaidExpenses((prevPaidExpenses) => [...prevPaidExpenses, paidExpense]);

      // Atualiza o localStorage
      localStorage.setItem('despesas', JSON.stringify(updatedExpenses));
      localStorage.setItem('despesasPagas', JSON.stringify(
        [...paidExpenses, paidExpense],
      ));
    },
    [expenses, paidExpenses],
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
    paidExpenses,
    setpaidExpenses,
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
