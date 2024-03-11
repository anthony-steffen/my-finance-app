import propTypes from 'prop-types';

function InputReceiver({ register }) {
  return (
    <input
      type="text"
      id="receiver"
      className="form-control"
      placeholder="Beneficiário"
      aria-describedby="receiverHelpBlock"
      { ...register('receiver', {
        required: 'Beneficiário é obrigatório',
        pattern: {
          value: /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.,:;()-]+[a-zA-ZÀ-ÖØ-öø-ÿ]+[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.,:;()-]*$/,
          message: 'Insira apenas letras',
        },
      })
      }
    />
  );
}

export default InputReceiver;
InputReceiver.propTypes = {
  register: propTypes.func.isRequired,
};
