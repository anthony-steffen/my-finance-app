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
          value: /^[a-zA-Z\s]+$/,
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
