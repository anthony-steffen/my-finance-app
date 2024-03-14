import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

import '../../styles/components/Lists.css';
import Avatar from '../../assets/pb02.png';
import ModalToDeleteExpense from './ModalToDeleteExpense';
import ModalToEditExpense from './ModalToEditExpense';
import ModalToPayExpense from './ModalToPayExpense';
import ExpenseBadge from './ExpenseBadge';

function BillsToPay() {
  const { expenses, theme, setSelectExpense } = useContext(AppContext);

  if (expenses.length === 0) {
    return (
      <div className={ `card-body bg-${theme} py-1 px-2  rounded-3` }>
        <img
          src={ Avatar }
          className="col-5 col-xl-5 mx-auto d-block mb-1 rounded-2"
          alt="..."
        />
        <h5
          className={
            `my-1 card-title text-center text-${theme === 'light' ? 'dark' : 'light'}`
          }
          style={ { fontSize: 'clamp(1em, 1em + 1vw, 1.1em)' } }
        >
          Contas a pagar.
        </h5>
        <p
          className={
            `card-text text-center text-${theme === 'light' ? 'dark' : 'light'}`
          }
        >
          Ajudamos você a lembrar de todas as suas contas.
          Adicione-as e fique tranquilo.
        </p>
      </div>

    );
  }
  return (
    <section
      className={ `
      row row-expense py-1 mb-1 rounded-1
      ${theme === 'light' ? 'bg-light border' : 'bg-dark'} 
      ` }
      style={ {
        width: '100%',
        margin: 'auto',
        border: 'none',
        // height: '25vh',
      } }
    >
      <h5
        className={ `
        text-danger d-flex align-items-center mb-2
        justify-content-start ms-3 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
          textShadow: '1px 0px 0px black',
        } }
      >
        Contas a pagar
      </h5>
      {expenses.map((expense, index) => (
        <div
          key={ index }
          className="col-xl-4 col-lg-6 py-1"
        >
          <div
            className="card shadow-sm"
          >
            <div className="card-body d-flex flex-column">
              <p className="category fw-bold text-muted mb-1">
                {expense.description}
              </p>
              <p className="value fw-bold text-muted mb-1">
                {`Valor R$: ${expense.value}`}
              </p>
              <p className="due fw-bold text-muted mb-1">
                {`Vencimento: ${expense.date}`}
              </p>
              <div className="d-flex justify-content-end align-items-center">
                <ExpenseBadge expense={ expense } />
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#billsToPayModal"
                  onClick={ () => setSelectExpense(index) }
                >
                  Pagar
                </button>
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#editExpenseModal"
                  onClick={ () => setSelectExpense(index) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn glow-on-hover text-white btn-sm me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteExpenseModal"
                  onClick={ () => setSelectExpense(index) }
                >
                  Excluir
                </button>
                <ModalToPayExpense />
                <ModalToEditExpense />
                <ModalToDeleteExpense />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BillsToPay;
