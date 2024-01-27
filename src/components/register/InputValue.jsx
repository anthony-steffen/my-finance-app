import React from 'react';
import PropTypes from 'prop-types';

function InputValue({ register }) {
  return (
    <input
      type="text"
      id="value"
      className="form-control"
      placeholder="Valor"
      aria-describedby="valueHelpBlock"
      { ...register('value', {
        required: 'Valor é obrigatório',
        pattern: {
          value: /^[1-9]\d*(\.\d{1,2})?$/,
          message: 'Insira um valor válido (Ex: 1 ou 1.00)',
        },
      })
      }
    />
  );
}

export default InputValue;
InputValue.propTypes = {
  register: PropTypes.func.isRequired,
};
