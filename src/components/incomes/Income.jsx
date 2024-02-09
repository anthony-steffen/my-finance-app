/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';

function Income() {
  const { theme } = useContext(HomeContext);
  return (
    <section className="row row-income pb-4 pt-5">
      <h5
        className={ `
        title-income text-${theme === 'light' ? 'dark' : 'white'} 
        mt-3 mb-2 d-flex align-items-center justify-content-start gap-2 ms-3
        ` }
        style={ { width: '90%', margin: 'auto' } }
      >

        Receitas
      </h5>
      <div className="col-xl-4 col-lg-6 mb-1 p-1">
        <div className="card shadow-sm rounded-3 border border-dark border-1">
          <div className="card-body">
            <div className="d-flex flex-column ms-1 me-1 gap-2 mb-1">
              <p className="category fw-bold text-muted mb-0">Aluguel</p>
              <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
              <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
              <span
                className="col-xl-3 col-lg-6 mb-1 p-1 badge rounded-pill text-bg-success"
              >
                Recebido
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  // data-bs-toggle="modal"
                  // data-bs-target="#billsToPayModal"
                  // onClick={ () => setSelectExpense(index) }
                >
                  Receber
                </button>
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  // data-bs-toggle="modal"
                  // data-bs-target="#editExpenseModal"
                  // onClick={ () => setSelectExpense(index) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  // data-bs-toggle="modal"
                  // data-bs-target="#deleteExpenseModal"
                  // onClick={ () => setSelectExpense(index) }
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1 p-1">
        <div className="card shadow-sm rounded-3 border border-dark border-1">
          <div className="card-body">
            <div className="d-flex flex-column ms-1 me-1 gap-2 mb-3">
              <p className="category fw-bold text-muted mb-0">Aluguel</p>
              <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
              <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
              <span
                className="col-xl-3 col-lg-6 mb-1 p-1 badge rounded-pill text-bg-success"
              >
                Recebido
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1 p-1">
        <div className="card shadow-sm rounded-3 border border-dark border-1">
          <div className="card-body">
            <div className="d-flex flex-column ms-1 mb-3">
              <p className="category fw-bold text-muted mb-0">Aluguel</p>
              <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
              <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
              <span
                className="col-xl-3 col-lg-6 mb-1 p-1 badge rounded-pill text-bg-success"
              >
                Recebido
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1 p-1">
        <div className="card shadow-sm rounded-3 border border-dark border-1">
          <div className="card-body">
            <div className="d-flex flex-column ms-1 mb-3">
              <p className="category fw-bold text-muted mb-0">Aluguel</p>
              <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
              <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
              <span
                className="col-xl-3 col-lg-6 mb-1 p-1 badge rounded-pill text-bg-success"
              >
                Recebido
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1 p-1">
        <div className="card shadow-sm rounded-3 border border-dark border-1">
          <div className="card-body">
            <div className="d-flex flex-column ms-1 mb-3">
              <p className="category fw-bold text-muted mb-0">Aluguel</p>
              <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
              <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
              <span
                className="col-xl-3 col-lg-6 mb-1 p-1 badge rounded-pill text-bg-success"
              >
                Recebido
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1 p-1">
        <div className="card shadow-sm rounded-3 border border-dark border-1">
          <div className="card-body">
            <div className="d-flex flex-column ms-1 mb-3">
              <p className="category fw-bold text-muted mb-0">Aluguel</p>
              <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
              <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
              <span
                className="col-xl-3 col-lg-6 mb-1 p-1 badge rounded-pill text-bg-success"
              >
                Recebido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Income;
