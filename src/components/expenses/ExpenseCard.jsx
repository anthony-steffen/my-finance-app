/* eslint-disable react/jsx-max-depth */

import PropTypes from 'prop-types';
import { useContext } from 'react';
import ModalToPay from './ModalToPay';
// import ExpenseDetails from './ExpenseDetails';
import ExpenseBadge from './ExpenseBadge';
import ExpenseContext from '../../contexts/ExpenseContext';
import ModalToEdit from './ModalToEdit';
import ModalToDelete from './ModalToDelete';

function ExpenseCard({ expense, index }) {
  const { setSelectExpense } = useContext(ExpenseContext);

  return (
    <div className="col-xl-4 col-lg-6 mb-1 p-1">
      <div className="card shadow-sm rounded-3 border border-dark border-1">
        <div className="card-body">
          <div className="d-flex flex-column gap-2">
            <p className="category fw-bold text-muted">
              { expense.description}
            </p>
            <p className="value fw-bold text-muted">
              { `Valor R$: ${expense.value}` }
            </p>
            <p className="due fw-bold text-muted">
              { `Vencimento: ${expense.date}` }
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
            </div>

            <ModalToPay index={ index } />
            <ModalToEdit />
            <ModalToDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;
ExpenseCard.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
