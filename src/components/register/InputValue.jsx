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
          value: /^(?!0\d)([1-9]\d*|0)(\.\d{1,3})?$/,
          message: 'Apenas números válidos (Ex: 1 - 1.255 )',
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
