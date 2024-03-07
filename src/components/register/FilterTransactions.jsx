import React, { useContext, useState } from 'react';
import { addDays, parse } from 'date-fns';
import AppContext from '../../contexts/AppContext';

function FilterTransactions() {
  const { incomes, expenses, typeRegister } = useContext(AppContext);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactions] = useState([...incomes, ...expenses]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showMessage, setShowMessage] = useState('');
  console.log(typeRegister);

  const mn = {
    sevenDays: -7,
    fifteenDays: -15,
    thirtyDays: -30,
    sixtyDays: -60,
    threeMonths: -90,
    sixMonths: -180,
    oneYear: -365,
  };

  const applyFilter = () => {
    if (!selectedFilter) {
      setFilteredTransactions([]);
    }
    const currentDate = new Date();
    const filteredDate = addDays(currentDate, mn[selectedFilter]);

    const filteredData = transactions.filter((transaction) => {
      const transactionDate = parse(transaction.date, 'dd/MM/yyyy', new Date());

      const isTypeMatch = typeRegister ? transaction.type === typeRegister : true;

      return (
        transactionDate >= filteredDate
        && transactionDate <= currentDate
        && isTypeMatch
      );
    });
    setFilteredTransactions(filteredData);
    setShowMessage(
      filteredData.length === 0 && selectedFilter ? 'Nenhuma transação encontrada' : '',
    );
  };

  return (
    <div className="d-flex flex-row align-items-center">
      <div className="row d-flex gap-2">
        <button
          onClick={ () => setSelectedFilter('sevenDays') }
          className="btn btn-sm btn-primary rouded-pill"
        >
          7 dias
        </button>
        <button
          onClick={ () => setSelectedFilter('fifteenDays') }
        >
          15 dias
        </button>
        <button
          onClick={ () => setSelectedFilter('thirtyDays') }
        >
          30 dias
        </button>
        <button
          onClick={ () => setSelectedFilter('sixtyDays') }
        >
          60 dias
        </button>
      </div>
      <div className="row d-flex gap-2">
        <button
          onClick={ () => setSelectedFilter('threeMonths') }
        >
          3 meses
        </button>
        <button
          onClick={ () => setSelectedFilter('sixMonths') }
        >
          6 meses
        </button>
        <button
          onClick={ () => setSelectedFilter('oneYear') }
        >
          1 ano
        </button>
      </div>

      <div>
        <button onClick={ applyFilter }>Aplicar Filtro</button>
      </div>

      <div>
        {showMessage && <p>Nenhuma transação encontrada.</p>}
        {filteredTransactions.map((transaction) => (
          <div
            key={ Math.random() }
            className="border border p-2 m-2"
          >
            <p>
              { `
              ${transaction.type === 'expense' ? 'Despesa' : 'Receita'} -
              Valor: ${transaction.value} - 
              Data: ${transaction.date}
              `}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterTransactions;
