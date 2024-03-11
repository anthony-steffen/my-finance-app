import { parse, isToday, isPast } from 'date-fns';
import PropTypes from 'prop-types';

function IncomeBadge({ income }) {
  const incomeDate = parse(income.date, 'dd/MM/yyyy', new Date());
  const typeBadge = 'badge rounded-pill';
  const successBadge = `${typeBadge} text-bg-success`;
  const warningBadge = `${typeBadge} text-bg-warning`;
  const dangerBadge = `${typeBadge} text-bg-danger`;

  if (isToday(incomeDate)) {
    return (
      <div className="div-badge w-100">
        <span className={ warningBadge }>
          Hoje
        </span>
      </div>
    );
  } if (isPast(incomeDate)) {
    return (
      <div className="div-badge w-100">
        <span className={ dangerBadge }>
          Em atraso
        </span>
      </div>
    );
  }
  return (
    <div className="div-badge w-100">
      <span className={ successBadge }>
        A receber
      </span>
    </div>
  );
}

export default IncomeBadge;
IncomeBadge.propTypes = {
  income: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
