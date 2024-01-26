import PropTypes from 'prop-types';

function ExpenseDetails({ expense }) {
  return (
    <div className="d-flex flex-column ms-3">
      <p className="category fw-bold mb-0">{expense.description}</p>
      <p className="value text-muted mb-0">
        Valor:
        R$
        {expense.value}
      </p>
      <p className="due text-muted mb-2">
        Vencimento:
        {' '}
        {expense.date}
      </p>
    </div>
  );
}

export default ExpenseDetails;

ExpenseDetails.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
