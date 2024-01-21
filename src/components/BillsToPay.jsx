/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import HomeContext from '../contexts/HomeContext';

import '../styles/components/Lists.css';
import ModalToPay from './ModalToPay';

function BillsToPay() {
  const { expenses } = useContext(HomeContext);
  const [badgeClasses, setBadgeClasses] = useState([]);
  const [badgeTexts, setBadgeTexts] = useState([]);

  // Obtém a data atual em formato DD/MM/YYYY
  const currentDate = new Date().toLocaleDateString('pt-BR');

  useEffect(() => {
    // Interage sobre o array de despesas e define as classes e textos dinâmicos
    const updatedBadgeClasses = expenses.map((expense) => {
      const badgeClass = [];
      if (expense.date === currentDate) {
        badgeClass.push('badge rounded-pill text-bg-warning');
      } else if (expense.date < currentDate) {
        badgeClass.push('badge rounded-pill text-bg-danger');
      } else {
        badgeClass.push('badge rounded-pill text-bg-success');
      }
      return badgeClass;
    });

    const updatedBadgeTexts = expenses.map((expense) => {
      const dynamicText = [];
      if (expense.date === currentDate) {
        dynamicText.push('Vence hoje!');
      } else if (expense.date < currentDate) {
        dynamicText.push('Vencido');
      } else {
        dynamicText.push('A vencer');
      }
      return dynamicText;
    });
    // Define as classes e textos dinâmicos atualizados nos estados
    setBadgeClasses(updatedBadgeClasses);
    setBadgeTexts(updatedBadgeTexts);
  }, [currentDate, expenses]);

  return (
    <section className="row pb-4 w-100">
      <h5 className="title text-center mt-3 mb-2">Contas a pagar</h5>
      {expenses.map((expense, index) => (
        <div className="col-xl-4 col-lg-6 mb-1" key={ index }>
          <div className="card">
            <div className="card-body">
              <div className="d-flex  flex-column">
                <div className="ms-3">
                  <p className="category fw-bold mb-0">{expense.description}</p>
                  <p className="value text-muted mb-0">
                    R$
                    {' '}
                    {expense.value}
                  </p>
                  <p className="due text-muted mb-0">
                    {' '}
                    Vencimento:
                    {' '}
                    {expense.date}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-1">
                      <p className="mb-1">status:</p>
                      <span className={ `${badgeClasses[index]}` }>
                        {' '}
                        { badgeTexts[index] }
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#billsToPayModal"
                    >
                      Pagar Conta
                    </button>
                  </div>
                  <ModalToPay index={ index } />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BillsToPay;
