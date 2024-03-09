import { parse, isToday, isPast } from 'date-fns';
import PropTypes from 'prop-types';

function ExpenseBadge({ expense }) {
  const expenseDate = parse(expense.date, 'dd/MM/yyyy', new Date());

  const typeBadge = 'badge rounded-pill';
  const successBadge = `${typeBadge} text-bg-success`;
  const warningBadge = `${typeBadge} text-bg-warning`;
  const dangerBadge = `${typeBadge} text-bg-danger`;

  if (isToday(expenseDate)) {
    return (
      <div className="div-badge w-100">
        <span className={ warningBadge }>
          Vence hoje!
        </span>
      </div>
    );
  } if (isPast(expenseDate)) {
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
