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
    <div className="col-xl-4 col-lg-6 p-1">
      <div
        className="card shadow-sm rounded-3 border border-dark border-1"
        // style={ {
        //   background: 'linear-gradient(180deg, rgba(173,0,0,1) 10%, rgba(98,0,0,1) 100%)',
        // } }
      >
        <div className="card-body">
          <ExpenseDetails expense={ expense } />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-1">
              <p
                className="mb-1 ms-3 me-1 text-dark"
              >
                {' '}
                Status
                :
              </p>
              <ExpenseBadge expense={ expense } />
            </div>
            <div className="me-4">
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
