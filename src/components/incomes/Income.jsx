/* eslint-disable react/jsx-max-depth */
// import { useContext } from 'react';
// import HomeContext from '../../contexts/HomeContext';
// import Avatar from '../../assets/w.png';

function Income() {
  // const { theme } = useContext(HomeContext);
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
      <div className="col-xl-4 col-lg-6 mb-1 p-">
        <div className="card shadow-sm rounded-2 border border-2 border-black">
          <div className="card-body">
            <div className="d-flex flex-column gap-2">
              <p className="category fw-bold text-muted">Aluguel</p>
              <p className="value fw-bold text-muted">Valor R$:1.000</p>
              <p className="due fw-bold text-muted">Vencimento: 16/06/1983</p>
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
      <div className="col-xl-4 col-lg-6 mb-1 p-">
        <div className="card shadow-sm rounded-3 border border-2 border-black ">
          <div className="card-body">
            <div className="d-flex flex-column gap-2">
              <p className="category fw-bold text-muted">Aluguel</p>
              <p className="value fw-bold text-muted">Valor R$:1.000</p>
              <p className="due fw-bold text-muted">Vencimento: 16/06/1983</p>
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
      <div className="col-xl-4 col-lg-6 mb-1 p-">
        <div className="card shadow-sm rounded-3 border border-2 border-black ">
          <div className="card-body">
            <div className="d-flex flex-column gap-2">
              <p className="category fw-bold text-muted">Aluguel</p>
              <p className="value fw-bold text-muted">Valor R$:1.000</p>
              <p className="due fw-bold text-muted">Vencimento: 16/06/1983</p>
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

    </section>
  );
}

export default Income;
