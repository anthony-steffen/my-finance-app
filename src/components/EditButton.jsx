import PropTypes from 'prop-types';

function EditButton({ onClick }) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-sm me-2"
      data-bs-toggle="modal"
      data-bs-target="#modalToEditExpense"
      onClick={ onClick }
    >
      Editar Conta
    </button>
  );
}

export default EditButton;
EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
