import propTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

function InputSubCategories({ register }) {
  const { categories, selectedCategory } = useContext(AppContext);
  return (
    <select
      className="form-select mb-2"
      aria-label="Sub-categoria"
      { ...register('subCategory', {
        required: 'sub-categoria é obrigatória',
      })
      }
    >
      <option defaultValue>Sub-categoria</option>
      {categories
        .find((category) => category.name === selectedCategory)
        ?.subCategories.map((subCategory) => (
          <option key={ subCategory }>{subCategory}</option>
        ))}
    </select>
  );
}

export default InputSubCategories;
InputSubCategories.propTypes = {
  register: propTypes.func.isRequired,
};
