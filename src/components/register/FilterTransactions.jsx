import React, { useCallback, useContext, useEffect, useState } from 'react';
import { addDays, parse } from 'date-fns';
import AppContext from '../../contexts/AppContext';

function FilterTransactions() {
  const { incomes, expenses, typeRegister } = useContext(AppContext);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactions] = useState([...incomes, ...expenses]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showMessage, setShowMessage] = useState('');
  const [order, setOrder] = useState('');

  const applyFilter = useCallback(() => {
    const mn = {
      sevenDays: -7,
      fifteenDays: -15,
      thirtyDays: -30,
      sixtyDays: -60,
      threeMonths: -90,
      sixMonths: -180,
      oneYear: -365,
    };

    if (!selectedFilter) {
      setFilteredTransactions([]);
      return;
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
    });

    // Ordena as transações por data de forma ascendente ou descendente
    const sortedData = filteredData.sort((a, b) => {
      const dateA = parse(a.date, PT_BR, new Date());
      const dateB = parse(b.date, PT_BR, new Date());

      if (order === 'asc') {
        return dateA - dateB;
      } if (order === 'desc') {
        return dateB - dateA;
      }
      return 0;
    });
    setFilteredTransactions(sortedData);
    setShowMessage(
      filteredData.length === 0 && selectedFilter ? 'Nenhuma transação encontrada' : '',
    );
  }, [selectedFilter, transactions, typeRegister, order]);

  useEffect(() => {
    if (order) applyFilter();
  }, [applyFilter, order]);

  const setOrderTransaction = useCallback(
    (value) => {
      setOrder(value);
    },
    [],
  );

  return (

    <div
      className="my-2 container text-center d-flex flex-column align-items-center gap-2"
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
      {!order && (
        <div className="col d-flex flex-row  gap-2 mt-1">
          <button
            onClick={ applyFilter }
            className="btn btn-sm btn-primary"
          >
            Aplicar Filtro
          </button>
        </div>
      )}
      <div
        className="container d-flex flex-column border my-2 overflow-auto gap-1"
        style={ { height: '45vh' } }
      >
        {showMessage && <p>Nenhuma transação encontrada.</p>}
        {filteredTransactions.length > 0 && (
          <div className="d-flex flex-column text-center text-muted my-2 fw-bold gap-2">
            {`Transações encontradas: ${filteredTransactions.length}`}

            <div className="d-flex flex-row justify-content-center gap-2">
              Ordenar por datas:
              <button
                className="btn btn-sm btn-primary"
                value="asc"
                onClick={ () => setOrderTransaction('asc') }
              >
                Recentes
              </button>
              ou
              <button
                className="btn btn-sm btn-primary"
                value="desc"
                onClick={ () => setOrderTransaction('desc') }
              >
                Antigas
              </button>
            </div>
            <div className="d-flex flex-row gap-2 justify-content-center">
              Valor total das receitas: R$
              <div className="text-success">
                {filteredTransactions
                  .filter((transaction) => transaction.type === 'income')
                  .reduce((acc, cur) => acc + Number(cur.value), 0)}
              </div>
            </div>
            <div className="d-flex flex-row gap-2 justify-content-center">
              Valor total das despesas: R$
              <div className="text-danger">
                {filteredTransactions
                  .filter((transaction) => transaction.type === 'expense')
                  .reduce((acc, cur) => acc + Number(cur.value), 0)}
              </div>
            </div>
          </div>

        )}
        {filteredTransactions.map((transaction) => (
          <div
            key={ Math.random() }
            className="border border-dark p-2 mb-1 rounded-1 fw-bold text-muted"
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
