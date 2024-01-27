import propTypes from 'prop-types';
import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';

function InputSubCategories({ register }) {
  const { categories, selectedCategory } = useContext(HomeContext);
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
