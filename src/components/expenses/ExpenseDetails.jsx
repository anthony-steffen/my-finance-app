import PropTypes from 'prop-types';

function ExpenseDetails({ expense }) {
  return (
    <div className="d-flex flex-column ms-3 gap-2 mb-3">
      <p
        className="category fw-bold mb-0 text-dark"
      >
        {expense.description}
        {' '}
      </p>
      {/* "category fw-bold mb-0 text">{expense.description} */}
      <p className="value fw-bold mb-0 text-dark">
        Valor:
        R$
        {expense.value}
      </p>
      <p className="date fw-bold mb-0 text-dark ">
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
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
