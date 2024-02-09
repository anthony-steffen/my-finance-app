import PropTypes from 'prop-types';

function ExpenseBadge({ expense }) {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const typeBadge = 'badge rounded-pill';
  const successBadge = `col-5 col-lg-5 col-xl-2 mb-1 p-1 ${typeBadge} text-bg-success`;
  const warningBadge = `col-5 col-lg-5 col-xl-2 mb-1 p-1 ${typeBadge} text-bg-warning`;
  const dangerBadge = `col-5 col-lg-5 col-xl-2 mb-1 p-1 ${typeBadge} text-bg-danger`;

  if (expense.date === currentDate) {
    return <span className={ warningBadge }>Vence hoje!</span>;
  } if (expense.date < currentDate) {
    return <span className={ dangerBadge }>Vencido</span>;
  }
  return <span className={ successBadge }>A vencer</span>;
}

export default ExpenseBadge;
ExpenseBadge.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
