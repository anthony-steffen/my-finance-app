/* eslint-disable react/jsx-max-depth */

import PropTypes from 'prop-types';
import { useContext } from 'react';
import ModalToPay from './ModalToPay';
import ExpenseDetails from './ExpenseDetails';
import ExpenseBadge from './ExpenseBadge';
import ExpenseContext from '../../contexts/ExpenseContext';
import ModalToEdit from './ModalToEdit';

function ExpenseCard({ expense, index }) {
  const { setSelectExpense } = useContext(ExpenseContext);

  return (
    <div className="col-xl-4 col-lg-6 mb-1 p-1">
      <div className="card shadow-sm rounded-3 border border-dark border-1">
        <div className="card-body">
          <div className="d-flex flex-column ms-3 gap-2 mb-3">
            <p className="category fw-bold text-muted mb-0">Aluguel</p>
            <p className="value fw-bold text-muted mb-0">Valor R$:1.000</p>
            <p className="due fw-bold text-muted mb-0">Vencimento: 16/06/1983</p>
            <ExpenseBadge expense={ expense } />
            <div className="me-4">
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
                // data-bs-target="#billsToPayModal"
                // onClick={ () => setSelectExpense(index) }
              >
                Pagar
              </button>
            </div>
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
