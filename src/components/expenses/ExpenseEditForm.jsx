import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import { format, parse } from 'date-fns';

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
      className="form-editToPay"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <label htmlFor="Descrição" className="text-dark">
        Descrição

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
          })
          }
        />
      </label>
      <div id="descriptionHelpBlock" className="form-text mb-0 mt-0">
        {errors.description
                  && <p className="text-danger mb-2">{errors.description.message}</p>}
      </div>

      <label htmlFor="value" className="text-dark">
        Valor
        <input
          type="text"
          id="value"
          className="form-control"
          placeholder="Valor"
          aria-describedby="valueHelpBlock"
          { ...register('value', {
            required: 'Valor é obrigatório',
            pattern: {
              value: /^(?!0\.00$)\d+(\.\d{1,2})?$/,
              message: 'Apenas números positivos',
            },
          })
          }
        />
      </label>
      <div id="valueHelpBlock" className="form-text mb-0 mt-0">
        {errors.value
                  && <p className="text-danger mb-2">{errors.value.message}</p>}
      </div>

      <label htmlFor="date" className="text-dark">Método de pagamento</label>
      <select
        className="form-select form-control mb-2"
        id="paymentMethod"
        aria-describedby="paymentMethodHelpBlock"
        { ...register('paymentMethod', {
          required: 'Método de pagamento é obrigatório',
        })
        }
      >
        <option defaultValue="">
          {
            expenseSelected ? expenseSelected.paymentMethod
              : 'Método de pagamento'
          }
        </option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <div id="paymentMethodHelpBlock" className="form-text mb-0 mt-0" />

      <label htmlFor="date" className="text-dark">
        Pagador

        <input
          type="text"
          id="payer"
          className="form-control payer"
          placeholder="Pagador"
          aria-describedby="payerHelpBlock"
          { ...register('payer', {
            required: 'Pagador é obrigatório',
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Insira apenas letras',
            },
          })
          }
        />
      </label>
      <div id="payerHelpBlock" className="form-text mb-0 mt-0">
        {errors.payer
                  && <p className="text-danger mb-2">{errors.payer.message}</p>}
      </div>
      <label htmlFor="date" className="text-dark">
        Beneficiário

        <input
          type="text"
          id="receiver"
          className="form-control receiver"
          placeholder="Recebedor"
          aria-describedby="receiverHelpBlock"
          { ...register('receiver', {
            required: 'Recebedor é obrigatório',
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Insira apenas letras',
            },
          })
          }
        />
      </label>
      <div id="receiverHelpBlock" className="form-text mb-0 mt-0">
        {errors.receiver
                  && <p className="text-danger mb-2">{errors.receiver.message}</p>}
      </div>

      <label htmlFor="category" className="text-dark">Categoria</label>
      <select
        className="form-select form-control mb-2 "
        id="category"
        aria-describedby="categoryHelpBlock"
        { ...register('category', {
          required: 'Categoria é obrigatória',
        })
        }
      >
        <option defaultValue="">
          {
            expenseSelected ? expenseSelected.category
              : 'Categoria'
          }
        </option>
        <option value="Alimentação">Alimentação</option>
        <option value="Educação">Educação</option>
        <option value="Lazer">Lazer</option>
        <option value="Saúde">Saúde</option>
        <option value="Transporte">Transporte</option>
        <option value="Trabalho">Trabalho</option>
      </select>

      <label htmlFor="subCategory" className="text-dark">Subcategoria</label>
      <select
        className="form-select form-control mb-2 "
        id="subCategory"
        aria-describedby="subCategoryHelpBlock"
        { ...register('subCategory', {
          required: 'Subcategoria é obrigatória',
        })
        }
      >
        <option defaultValue="">
          {
            expenseSelected ? expenseSelected.subCategory
              : 'Subcategoria'
          }
        </option>
        <option value="Alimentação">Alimentação</option>
        <option value="Educação">Educação</option>
        <option value="Lazer">Lazer</option>
        <option value="Saúde">Saúde</option>
        <option value="Transporte">Transporte</option>
        <option value="Trabalho">Trabalho</option>
      </select>

      <label htmlFor="date" className="text-dark">Data</label>
      <input
        type="date"
        id="date"
        className="form-control date"
        { ...register('date', {
          required: 'Data é obrigatória',
        })
        }
      />
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
