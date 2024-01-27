import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import { format, parse } from 'date-fns';
import InputDescription from '../register/InputDescription';
import InputValue from '../register/InputValue';
import InputPayment from '../register/InputPayment';
import InputPayer from '../register/InputPayer';
import InputReceiver from '../register/InputReceiver';
import InputCategories from '../register/InputCategories';
import InputDate from '../register/InputDate';

function ExpenseEditForm({ expenseSelected, onSubmit }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (expenseSelected) {
      setValue('description', expenseSelected.description);
      setValue('value', expenseSelected.value);
      setValue('paymentMethod', expenseSelected.paymentMethod);
      setValue('category', expenseSelected.category);
      setValue('subCategory', expenseSelected.subCategory);
      setValue('payer', expenseSelected.payer);
      setValue('receiver', expenseSelected.receiver);
      const formatDate = format(
        parse(expenseSelected.date, 'dd/MM/yyyy', new Date()),
        'yyyy-MM-dd',
      );// Formata a data para o formato do input date
      setValue('date', formatDate);
    }
  }, [expenseSelected, setValue]);
  return (
    <form
      className="form-register col-9 col-lg-5 col-xl-4"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <p className="text-dark mb-1">
        Descrição
        <InputDescription register={ register } />
      </p>
      <div id="descriptionHelpBlock" className="form-text mb-0 mt-0">
        {errors.description
                  && <p className="text-danger mb-2">{errors.description.message}</p>}
      </div>

      <p className="text-dark mb-1">
        Valor
        <InputValue register={ register } />
      </p>
      <div id="valueHelpBlock" className="form-text mb-0 mt-0">
        {errors.value
                  && <p className="text-danger mb-2">{errors.value.message}</p>}
      </div>

      <p className="text-dark mb-1">Método de pagamento</p>
      <InputPayment register={ register } />
      <div id="paymentMethodHelpBlock" className="form-text mb-0 mt-0" />

      <p className="text-dark mb-1">
        Pagador
        <InputPayer register={ register } />
      </p>
      <div id="payerHelpBlock" className="form-text mb-0 mt-0">
        {errors.payer
                  && <p className="text-danger mb-2">{errors.payer.message}</p>}
      </div>
      <p className="text-dark mb-1">
        Beneficiário
        <InputReceiver register={ register } />
      </p>
      <div id="receiverHelpBlock" className="form-text mb-0 mt-0">
        {errors.receiver
                  && <p className="text-danger mb-2">{errors.receiver.message}</p>}
      </div>

      <p className="text-dark mb-1">
        Categoria
      </p>
      <InputCategories register={ register } />

      <InputDate register={ register } />
      <div id="dateHelpBlock" className="form-text mb-0 mt-0">
        {errors.date
                  && <p className="text-danger mb-2">{errors.date.message}</p>}
      </div>

      <div className="modal-footer d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default ExpenseEditForm;

ExpenseEditForm.propTypes = {
  expenseSelected: propTypes.shape({
    id: propTypes.number,
    description: propTypes.string,
    value: propTypes.string,
    paymentMethod: propTypes.string,
    category: propTypes.string,
    subCategory: propTypes.string,
    payer: propTypes.string,
    receiver: propTypes.string,
    date: propTypes.string,
  }).isRequired,
  onSubmit: propTypes.func.isRequired,
};
