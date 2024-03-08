import React, { useContext, useState } from 'react';
import { addDays, parse } from 'date-fns';
import AppContext from '../../contexts/AppContext';

function FilterTransactions() {
  const { incomes, expenses, typeRegister } = useContext(AppContext);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactions] = useState([...incomes, ...expenses]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showMessage, setShowMessage] = useState('');
  const [order, setOrder] = useState('');
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
    const PT_BR = 'dd/MM/yyyy';
    const filteredData = transactions.filter((transaction) => {
      const transactionDate = parse(transaction.date, PT_BR, new Date());

      const isTypeMatch = typeRegister ? transaction.type === typeRegister : true;

      return (
        transactionDate >= filteredDate
        && transactionDate <= currentDate
        && isTypeMatch
      );
    })
      .sort((a, b) => {
        // Ordena por data da mais recente para a mais antiga
        const dateA = parse(a.date, PT_BR, new Date());
        const dateB = parse(b.date, PT_BR, new Date());

        if (order === 'asc') {
          return dateA - dateB;
        }
        if (order === 'desc') {
          return dateB - dateA;
        }
        return 0;
      });
    setFilteredTransactions(filteredData);
    setShowMessage(
      filteredData.length === 0 && selectedFilter ? 'Nenhuma transação encontrada' : '',
    );
  };

  const setAscOrder = () => {
    setOrder('asc');
    applyFilter(); // Aplica a ordenação imediatamente
  };

  const setDescOrder = () => {
    setOrder('desc');
    applyFilter(); // Aplica a ordenação imediatamente
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
          <div className="d-flex flex-column text-center text-muted my-2 fw-bold gap-2">
            {`Transações encontradas: ${filteredTransactions.length}`}
            <div className="d-flex flex-row justify-content-center gap-2">
              Ordenar por:
              <button
                className="btn btn-sm btn-primary"
                onClick={ setAscOrder }
              >
                Crescente
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={ setDescOrder }
              >
                Decrescente
              </button>
            </div>
          </div>

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
