import PropTypes from 'prop-types';

function ExpenseBadge({ expense }) {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const typeBadge = 'badge rounded-pill';
  const successBadge = `${typeBadge} text-bg-success`;
  const warningBadge = `${typeBadge} text-bg-warning`;
  const dangerBadge = `${typeBadge} text-bg-danger`;

  if (expense.date === currentDate) {
    return (
      <div className="div-badge w-100">
        <span className={ warningBadge }>
          Vence hoje!
        </span>
      </div>
    );
  } if (expense.date < currentDate) {
    return (
      <div className="div-badge w-100">
        <span className={ dangerBadge }>
          Vencido
        </span>
      </div>
    );
  }
  return (
    <div className="div-badge w-100">
      <span className={ successBadge }>
        A vencer
      </span>
    </div>
  );
}

export default ExpenseBadge;
ExpenseBadge.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
