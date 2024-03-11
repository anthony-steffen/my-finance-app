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
          value: /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.,:;()-]+[a-zA-ZÀ-ÖØ-öø-ÿ]+[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.,:;()-]*$/,
          message: 'Apenas letras e números(Ex: João Silva 123)',
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
