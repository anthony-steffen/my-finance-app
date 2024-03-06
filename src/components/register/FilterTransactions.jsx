import React, { useContext, useState } from 'react';
import { addDays, addMonths, addYears } from 'date-fns';
import AppContext from '../../contexts/AppContext';

function FilterTransactions() {
  const { incomes, expenses } = useContext(AppContext);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const mn = {
    sevenDays: -7,
    fifteenDays: -15,
    thirtyDays: -30,
    sixtyDays: -60,
    threeMonths: -90,
    sixMonths: -180,
    oneYear: -365,
  };
  function handleApplyFilter(filter) {
    setFilteredTransactions(filter);
    const today = new Date();
    let dateFilter = today;
    switch (filter) {
    case '7d':
      dateFilter = addDays(today, mn.sevenDays);
      break;
    case '15':
      dateFilter = addDays(today, mn.fifteenDays);
      break;
    case '30d':
      dateFilter = addDays(today, mn.thirtyDays);
      break;
    case '60d':
      dateFilter = addDays(today, mn.sixtyDays);
      break;
    case '3m':
      dateFilter = addDays(today, mn.threeMonths);
      break;
    case '6m':
      dateFilter = addDays(today, mn.sixMonths);
      break;
    case '1y':
      dateFilter = addDays(today, mn.oneYear);
      break;
    default:
      dateFilter = addDays(today, mn.oneDay);
    }

    const filteredIncomes = incomes
      .filter((income) => new Date(income.date) >= dateFilter);
    const filteredExpenses = expenses
      .filter((expense) => new Date(expense.date) >= dateFilter);
    setFilteredTransactions([...filteredIncomes, ...filteredExpenses]);
  }

  console.log(filteredTransactions);

  return (
    <div className="filter-buttons d-flex flex-row justify-content-between gap-1 my-3">
      <button type="button" onClick={ () => handleApplyFilter('7d') }>
        7 dias
      </button>
      <button type="button" onClick={ () => handleApplyFilter('15d') }>
        15 dias
      </button>
      <button type="button" onClick={ () => handleApplyFilter('30d') }>
        30 dias
      </button>
      <button type="button" onClick={ () => handleApplyFilter('60d') }>
        60 dias
      </button>
      <button type="button" onClick={ () => handleApplyFilter('3m') }>
        3 meses
      </button>
      <button type="button" onClick={ () => handleApplyFilter('6m') }>
        6 meses
      </button>
      <button type="button" onClick={ () => handleApplyFilter('1y') }>
        1 ano
      </button>
      <button type="button">Personalizado</button>
      <div className="transactions">
        {filteredTransactions.map((transaction) => (
          <div key={ Math.random() }>
            <p>
              {transaction.type === 'expense' ? 'Despesa' : 'Receita'}
              {' '}
              -
              {' '}
              {transaction.date}
              {' '}
              -
              {' '}
              {transaction.value}
              {' '}
              -
              {' '}
              {transaction.category}
            </p>
          </div>
        ))}
      </div>
    </div>

  );
}
export default FilterTransactions;
