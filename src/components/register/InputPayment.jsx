import propTypes from 'prop-types';

function InputPayment({ register }) {
  return (
    <select
      className="form-select mb-2"
      aria-label="Default select example"
      { ...register('paymentMethod', {
        required: 'Método de pagamento é obrigatório',
      })
      }
    >
      <option defaultValue>Método de pagamento</option>
      <option>Dinheiro</option>
      <option>Cartão de crédito</option>
      <option>Cartão de débito</option>
      <option>Pix</option>
    </select>
  );
}

export default InputPayment;
InputPayment.propTypes = {
  register: propTypes.func.isRequired,
};
