import PropTypes from 'prop-types';

function ExpenseBadge({ expense }) {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  if (expense.date === currentDate) {
    return <span className="badge rounded-pill text-bg-warning">Vence hoje!</span>;
  } if (expense.date < currentDate) {
    return <span className="badge rounded-pill text-bg-danger">Vencido</span>;
  }
  return <span className="badge rounded-pill text-bg-success">A vencer</span>;
}

export default ExpenseBadge;
ExpenseBadge.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
