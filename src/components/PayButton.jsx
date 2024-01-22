// import PropTypes from 'prop-types';

function PayButton() {
  return (
    <button
      type="button"
      className="btn btn-primary btn-sm me-2"
      data-bs-toggle="modal"
      data-bs-target="#billsToPayModal"
    >
      Pagar Conta
    </button>
  );
}

export default PayButton;

// PayButton.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
