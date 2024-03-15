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
        className="mx-auto w-100 mt-1 mb-2"
        style={ {
          width: '18rem',
          paddingBottom: '8rem',
        } }
      >
        <div
          className={ `
        col-xl-5 mx-auto card-body p-2 rounded-3
        ${theme === 'light' ? 'bg-white' : 'bg-dark'}
        ` }
        >
          <img
            src={ Avatar }
            className="card-img-top rounded-2"
            alt="..."
            style={ {
              width: '100%',
              height: '15vh',
              // objectFit: 'cover',
            } }
          />
          <h5
            className={ `
          card-text text-center my-1 ${theme === 'light' ? 'text-dark' : 'text-white'}
          ` }
          >
            Recebimentos.
          </h5>
          <p
            className={ `
          text-center m-0 ${theme === 'light' ? 'text-dark' : 'text-white'}
          ` }
          >
            Aqui eu mostrarei o resumo das suas receitas.
            Clique no botão + para começar.
          </p>
        </div>
      </div>
    );
  }
  return (
    <section
      className={ `
      row row-expense pb-2 border-bottom border-5 border-black
      ${theme === 'light' ? 'bg-light' : 'bg-dark '}
      ` }
      style={ {
        width: '100%',
        margin: 'auto',
        border: 'none',
        marginBottom: '5rem',
        // paddingBottom: '8rem',
      } }
    >
      <h5
        className={ `
        text-success d-flex align-items-center my-2
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
          className="col-xl-3 col-lg-6"
        >
          <div
            className="card shadow-sm mb-1"
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
