import React, { useContext } from 'react';
import propTypes from 'prop-types';
import HomeContext from '../../contexts/HomeContext';

function InputCategories({ register }) {
  const { categories, setSelectedCategory } = useContext(HomeContext);
  return (
    <select
      className="form-select mb-2"
      aria-label="categoria"
      { ...register('category', {
        required: 'Categoria é obrigatória',
      })
      }
      onChange={ (e) => setSelectedCategory(e.target.value) }
    >
      <option defaultValue>Selecione uma Categoria</option>
      {categories.map((category) => (
        <option key={ category.id }>{category.name}</option>
      ))}
    </select>
  );
}

export default InputCategories;
InputCategories.propTypes = {
  register: propTypes.func.isRequired,
};
