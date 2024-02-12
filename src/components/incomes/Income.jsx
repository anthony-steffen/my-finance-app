/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';
import IncomeContext from '../../contexts/IncomeContext';

import ModalToDeleteIncome from './ModalToDeleteIncome';
import ModalToEditIncome from './ModalToEditIncome';
import ModalToReceiveIncome from './ModalToReceiveIncome';

import Avatar from '../../assets/pb03.png';

function Income() {
  const { incomes } = useContext(IncomeContext);
  const { theme } = useContext(HomeContext);
  const { setSelectIncome } = useContext(IncomeContext);

  if (incomes.length === 0) {
    return (
      <div
        className="card text-center bg-light mt-3 mb-3 col-xl-7 mx-auto"
      >
        <div
          className="img-container"
        >
          <img
            src={ Avatar }
            className="
            col-12 col-md-6 col-xl-3 mx-auto d-block my-1 rounded-2

            "
            alt="..."
          />
        </div>
        <div className={ `card-body bg-${theme} py-3 px-2` }>
          <h5
            className={
              `card-title text-center text-${theme === 'light' ? 'dark' : 'light'}`
            }
          >
            Recebimentos, e agora?
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
      className="row row-expense pb-4 py-3 my-4"
      style={ { backgroundColor: 'white' } }
    >
      <h5
        className={ `
        text-success d-flex align-items-center mb-3
        justify-content-start ms-3 mb-1 gap-2 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
          // textShadow: '0px 1px 0px black',
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
            className="card shadow-sm rounded-2 border border-2 border-black"
          >
            <div className="card-body">
              <div className="d-flex flex-column gap-2">
                <p className="category fw-bold text-muted">
                  {income.description}
                </p>
                <p className="value fw-bold text-muted">
                  {`Valor R$: ${income.value}`}
                </p>
                <p className="due fw-bold text-muted">
                  {`Vencimento: ${income.date}`}
                </p>
                <div className="d-flex justify-content-end align-items-center">
                  <div className="div-badge w-100">
                    <span
                      className="p-1 badge rounded-pill text-bg-warning"
                    >
                      Vence Hoje!
                    </span>
                  </div>
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
                    className="btn glow-on-hover text-white btn-sm me-1"
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
        </div>
      ))}
    </section>
  );
}

export default Income;
