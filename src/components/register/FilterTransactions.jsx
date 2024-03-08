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

    <div
      className="
    my-2 container text-center
    d-flex flex-column align-items-center
    gap-2
    "
    >

      <div className="col d-flex flex-row  gap-2 my-2">
        <button
          onClick={ () => setSelectedFilter('sevenDays') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          7 dias
        </button>
        <button
          onClick={ () => setSelectedFilter('fifteenDays') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          15 dias
        </button>
        <button
          onClick={ () => setSelectedFilter('thirtyDays') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          30 dias
        </button>
        <button
          onClick={ () => setSelectedFilter('sixtyDays') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          60 dias
        </button>
      </div>

      <div className="col d-flex flex-row  gap-2">
        <button
          onClick={ () => setSelectedFilter('threeMonths') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          3 meses
        </button>
        <button
          onClick={ () => setSelectedFilter('sixMonths') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          6 meses
        </button>
        <button
          onClick={ () => setSelectedFilter('oneYear') }
          className="btn btn-sm btn-primary rounded-pill"
        >
          1 ano
        </button>
      </div>

      <div className="col d-flex flex-row  gap-2 mt-1">
        <button
          onClick={ applyFilter }
          className="btn btn-sm btn-primary"
        >
          Aplicar Filtro
        </button>
      </div>

      <div
        className="container d-flex flex-column border my-2 overflow-auto gap-1"
        style={ { height: '45vh' } }
      >
        {showMessage && <p>Nenhuma transação encontrada.</p>}
        {filteredTransactions.length > 0 && (
          <p className="text-center my-2 fw-bold text-muted">
            {`Transações encontradas: ${filteredTransactions.length}`}
          </p>
        )}
        {filteredTransactions.map((transaction) => (
          <div
            key={ Math.random() }
            className="border border p-2 mb-1 rounded-3 fw-bold text-muted"
          >
            <p className="m-0">
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
