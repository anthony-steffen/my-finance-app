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
  const [income, setIncome] = useState(initialIncomeTransaction);
  const [expense, setExpense] = useState(initialExpenseTransaction);

  // useEffect(() => {
  //   localStorage.setItem('transactions', JSON.stringify(transaction));
  // }, [transaction]);

  // const newUser = [...registeredUsers, data];
  //     setRegisteredUsers(newUser);
  //     localStorage.setItem('registeredUsers', JSON.stringify(newUser));
  //     reset();
  //     const timeOut = 4000;
  //     showToast('Sucesso! Redirecionando você para a página Login');
  //     setTimeout(() => navigate('/my-finance-app'), timeOut);

  const handleTransaction = useCallback(
    (data) => {
      if (typeRegister === 'income') {
        const newIncome = [
          ...income, { id: income.length + 1, type: typeRegister, ...data },
        ];
        setIncome(newIncome);
        localStorage.setItem('Receita', JSON.stringify(newIncome));
      } else if (typeRegister === 'expense') {
        const newExpense = [
          ...expense, { id: expense.length + 1, type: typeRegister, ...data },
        ];
        setExpense(newExpense);
        localStorage.setItem('Despesa', JSON.stringify(newExpense));
      }
    },
    [typeRegister, income, expense],
  );

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    income,
    setIncome,
    expense,
    setExpense,
    handleTransaction,

  }), [
    typeRegister,
    setTypeRegister,
    categories,
    setCategories,
    categoryIcons,
    setCategoryIcons,
    income,
    setIncome,
    expense,
    setExpense,
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
