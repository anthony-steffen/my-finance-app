/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import ModalToDeleteIncome from './ModalToDeleteIncome';
import ModalToEditIncome from './ModalToEditIncome';
import ModalToReceiveIncome from './ModalToReceiveIncome';
import IncomeBadge from './IncomeBadge';

import Avatar from '../../assets/pb03.png';

function Income() {
  const { incomes, theme, setSelectIncome } = useContext(AppContext);

  if (incomes.length === 0) {
    return (
      <div className={ `card-body bg-${theme} py-1 px-2 my-1 rounded-3` }>
        <img
          src={ Avatar }
          className="col-5 col-xl-5 mx-auto d-block mb-1 rounded-2"
          alt="..."
        />
        <h5
          className={
            `card-title text-center text-${theme === 'light' ? 'dark' : 'light'}`
          }
          style={ { fontSize: 'clamp(1em, 1em + 1vw, 1.1em)' } }
        >
          Recebimentos.
        </h5>
        <p
          className={
            `card-text text-center text-${theme === 'light' ? 'dark' : 'light'}`
          }
        >
          Visualize o resumo das suas receitas.
          <br />
          Click no botão + para adicionar.
        </p>
      </div>
    );
  }
  return (
    <section
      className={ `
      row row-expense 
      ${theme === 'light' ? 'bg-light' : 'bg-dark '}
      ` }
      style={ {
        width: '100%',
        margin: 'auto',
        border: 'none',
        paddingBottom: '9rem',
      } }
    >
      <h5
        className={ `
        text-success d-flex align-items-center pt-1
        justify-content-start ms-3 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
        } }
      >
        Receitas
      </h5>
      {incomes.map((income, index) => (
        <div
          key={ index }
          className="col-12 col-md-2 col-xl-2 p-1"
        >
          <div
            className="card shadow-sm"
          >
            <div className="card-body d-flex flex-column py-2">
              <p className="category fw-bold text-muted mb-0">
                {income.description}
              </p>
              <p className="value fw-bold text-muted mb-0">
                {`Valor R$: ${income.value}`}
              </p>
              <p className="due fw-bold text-muted mb-0">
                {`Vencimento: ${income.date}`}
              </p>
              <div className="d-flex justify-content-end align-items-center me-4">
                <IncomeBadge income={ income } />
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#IncomeToReceiveModal"
                  onClick={ () => setSelectIncome(index) }
                >
                  Receber
                </button>
                <button
                  type="button"
                  className="btn btn-sm glow-on-hover text-white me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#editIncomeModal"
                  onClick={ () => setSelectIncome(index) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteIncomeModal"
                  onClick={ () => setSelectIncome(index) }
                >
                  Excluir
                </button>
                <ModalToDeleteIncome />
                <ModalToEditIncome />
                <ModalToReceiveIncome />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Income;
