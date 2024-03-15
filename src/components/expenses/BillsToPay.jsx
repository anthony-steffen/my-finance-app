import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

import '../../styles/components/Lists.css';
import Avatar from '../../assets/pb01.png';
import ModalToDeleteExpense from './ModalToDeleteExpense';
import ModalToEditExpense from './ModalToEditExpense';
import ModalToPayExpense from './ModalToPayExpense';
import ExpenseBadge from './ExpenseBadge';

function BillsToPay() {
  const { expenses, theme, setSelectExpense } = useContext(AppContext);

  if (expenses.length === 0) {
    return (
      <div className="mx-auto w-100 mt-1 mb-2" style={ { width: '18rem' } }>
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
            Contas a pagar.
          </h5>
          <p
            className={ `
          text-center m-0 ${theme === 'light' ? 'text-dark' : 'text-white'}
          ` }
          >
            Ajudo você a lembrar de todas as suas contas. Adicione-as e fique tranquilo.
          </p>
        </div>
      </div>
    );
  }
  return (
    <section
      className={ `
      row row-expense pb-2
      ${theme === 'light' ? 'bg-light border-dark' : 'bg-dark border-black'}
      border-bottom border-5
      ` }
      style={ {
        width: '100%',
        margin: 'auto',
        border: 'black',

      } }
    >
      <h5
        className={ `
        text-danger d-flex align-items-center my-2
        justify-content-start ms-3 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textShadow: '1px 0px 0px black',
        } }
      >
        Contas a pagar
      </h5>
      {expenses.map((expense, index) => (
        <div
          key={ index }
          className="col-xl-3 col-lg-6"
        >
          <div
            className="card shadow-sm mb-1"
          >
            <div className="card-body d-flex flex-column py-2">
              <p className="category fw-bold text-muted mb-0">
                {expense.description}
              </p>

              <p className="value fw-bold text-muted mb-0">
                {`Valor R$: ${expense.value}`}
              </p>
              <p className="due fw-bold text-muted mb-0">
                {`Vencimento: ${expense.date}`}
              </p>
              <div className="d-flex justify-content-end align-items-center me-4">
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
