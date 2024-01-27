import propTypes from 'prop-types';

function InputPayer({ register }) {
  return (
    <input
      type="text"
      id="payer"
      className="form-control payer"
      placeholder="Pagador"
      aria-describedby="payerHelpBlock"
      { ...register('payer', {
        required: 'Pagador é obrigatório',
        pattern: {
          value: /^[a-zA-Z\s]+$/,
          message: 'Insira apenas letras',
        },
      })
      }
    />
  );
}

export default InputPayer;
InputPayer.propTypes = {
  register: propTypes.func.isRequired,
};
