import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import IncomeContext from './IncomeContext';

const { Provider } = IncomeContext;
function IncomeProvider({ children }) {
  const storedIncomes = JSON.parse(localStorage.getItem('receitas')) || [];
  const storedReceivedIncomes = JSON.parse(localStorage.getItem('recebidas')) || [];
  const [incomes, setIncomes] = useState(storedIncomes);
  const [receivedIncomes, setReceivedIncomes] = useState(storedReceivedIncomes);
  const [incomesIds, setIncomesIds] = useState(0);
  const [selectIncome, setSelectIncome] = useState('');
  const [receivedDate, setReceivedDate] = useState('');
  const [totalIncomes, setTotalIncomes] = useState(0);

  useEffect(() => {
    const amount = incomes.reduce((acc, income) => acc + Number(income.value), 0);
    setTotalIncomes(amount);
  }, [incomes]);

  // console.log(totalIncomes);

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

  const store = useMemo(() => ({
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
  }), [
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
  ]);
  return (
    <Provider value={ store }>
      {children}
    </Provider>
  );
}

export default IncomeProvider;

IncomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
