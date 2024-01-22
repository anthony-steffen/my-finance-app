/* eslint-disable react/jsx-max-depth */

import PropTypes from 'prop-types';

// import { useContext } from 'react';

// import HomeContext from '../contexts/HomeContext';
import ModalToPay from './ModalToPay';
// import ModalToEditExpense from './ModalToEditExpense';
import ExpenseDetails from './ExpenseDetails';
import ExpenseBadge from './ExpenseBadge';
// import EditButton from './EditButton';
import PayButton from './PayButton';

function ExpenseCard({ expense, index }) {
  return (
    <div className="col-xl-4 col-lg-6 mb-1">
      <div className="card">
        <div className="card-body">
          <ExpenseDetails expense={ expense } />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-1">
              <p className="mb-1">Status:</p>
              <ExpenseBadge expense={ expense } />
            </div>
            <PayButton />
            <ModalToPay index={ index } />
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
