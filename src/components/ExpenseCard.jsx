/* eslint-disable react/jsx-max-depth */

import PropTypes from 'prop-types';
import { useContext } from 'react';
import ModalToPay from './ModalToPay';
import ExpenseDetails from './ExpenseDetails';
import ExpenseBadge from './ExpenseBadge';
import HomeContext from '../contexts/HomeContext';
import ModalToEdit from './ModalToEdit';

function ExpenseCard({ expense, index }) {
  const { setSelectExpense } = useContext(HomeContext);

  // console.log(ExpenseSelected);
  return (
    <div className="col-xl-4 col-lg-6 mb-1">
      <div className="card" id={ index }>
        <div className="card-body">
          <ExpenseDetails expense={ expense } />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-1">
              <p className="mb-1 ms-3">Status:</p>
              <ExpenseBadge expense={ expense } />
            </div>
            <div className="me-4">
              <button
                type="button"
                className="btn btn-primary btn-sm me-2"
                data-bs-toggle="modal"
                data-bs-target="#editExpenseModal"
                onClick={ () => setSelectExpense(index) }
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#billsToPayModal"
                onClick={ () => setSelectExpense(index) }
              >
                Pagar
              </button>
            </div>
            <ModalToPay index={ index } />
            <ModalToEdit />
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
