import propTypes from 'prop-types';

function InputDate({ register }) {
  return (
    <>
      <label htmlFor="date" className="form-label mb-0 text-dark ms-2">Data</label>
      <input
        type="date"
        id="date"
        className="form-control date"
        { ...register('date', {
          required: 'Data é obrigatória',
        })
        }
      />
    </>
  );
}

export default InputDate;
InputDate.propTypes = {
  register: propTypes.func.isRequired,
};
