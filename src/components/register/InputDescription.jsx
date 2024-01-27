import React from 'react';
import PropTypes from 'prop-types';

function inputDescription({ register }) {
  return (
    <input
      type="text"
      id="description"
      className="form-control"
      placeholder="Descrição"
      aria-describedby="descriptiondHelpBlock"
      { ...register('description', {
        required: 'Descrição é obrigatória',
        minLength: {
          value: 3,
          message: 'Mínimo de 3 caracteres',
        },
        maxLength: {
          value: 30,
          message: 'Máximo de 30 caracteres',
        },
        pattern: {
          value: /^[a-zA-Z\s]+$/,
          message: 'Apenas letras',
        },
      }) }
    />
  );
}

export default inputDescription;

inputDescription.propTypes = {
  register: PropTypes.func.isRequired,
};
