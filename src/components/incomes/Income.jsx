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
      <div
        className="card text-center bg-light col-xl-7 my-3 mx-auto"
      >
        <div
          className="img-container"
        >
          <img
            src={ Avatar }
            className="col-12 col-md-6 col-xl-3 mx-auto d-block mb-1 rounded-3"
            alt="..."
          />
        </div>
        <div className={ `card-body bg-${theme} py-4 px-2 mb-1 rounded-3` }>
          <h5
            className={
              `card-title text-center text-${theme === 'light' ? 'dark' : 'light'}`
            }
          >
            Recebimentos?
          </h5>
          <p className={ `text-${theme === 'light' ? 'dark' : 'light'}` }>
            Aqui, lhe mostraremos o resumo das suas receitas.
            <br />
            Click no botão + para adicionar.
          </p>
        </div>
      </div>
    );
  }
  return (
    <section
      className={ `
      row row-income py-3 my-1 ${theme === 'light' ? 'bg-light border' : 'bg-dark'} 
      ` }
      style={ {
        width: '100%',
        margin: 'auto',
      } }
    >
      <h5
        className={ `
        text-success d-flex align-items-center mb-1
        justify-content-start ms-3 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
        } }
      >
        Receitas
      </h5>
      {incomes.map((income, index) => (
        <div
          key={ index }
          className="col-xl-4 col-lg-6 mb-1 p-2"
        >
          <div
            className="card shadow-sm"
          >
            <div className="card-body d-flex flex-column">
              <p className="category fw-bold text-muted mb-1">
                {income.description}
              </p>
              <p className="value fw-bold text-muted mb-1">
                {`Valor R$: ${income.value}`}
              </p>
              <p className="due fw-bold text-muted mb-1">
                {`Vencimento: ${income.date}`}
              </p>
              <div className="d-flex justify-content-end align-items-center">
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
