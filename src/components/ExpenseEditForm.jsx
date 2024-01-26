import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
// import { format, parse } from 'date-fns';

function ExpenseEditForm({ expenseSelected, onSubmit }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  // console.log(expenseSelected.description);

  useEffect(() => {
    if (expenseSelected) {
      setValue('description', expenseSelected.description);
      setValue('value', expenseSelected.value);
      setValue('paymentMethod', expenseSelected.paymentMethod);
      setValue('category', expenseSelected.category);
      setValue('subCategory', expenseSelected.subCategory);
      setValue('payer', expenseSelected.payer);
      setValue('receiver', expenseSelected.receiver);
      setValue('date', expenseSelected.date);
    }
  }, [expenseSelected, setValue]);
  return (
    <form
      className="form-editToPay col-md-7 col-lg-7 col-xl-4"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <label htmlFor="Descrição" className="text-dark ms-1">Descrição</label>
      <input
        type="text"
        id="description"
        className="form-control"
        placeholder="Descrição"
        aria-describedby="descriptiondHelpBlock"
        defaultValue={ expenseSelected ? expenseSelected.description : '' }
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
      <div id="descriptionHelpBlock" className="form-text mb-3 mt-0">
        Ex: Salário, Aluguel, Mercado.
        {errors.description
                  && <p className="text-danger">{errors.description.message}</p>}
      </div>

      <label htmlFor="value" className="text-dark ms-1">Valor</label>
      <input
        type="number"
        id="value"
        className="form-control"
        placeholder="Valor"
        aria-describedby="valueHelpBlock"
        style={ { width: '150px', height: '35px' } }
        defaultValue={ expenseSelected ? expenseSelected.value : '' }
        { ...register('value', {
          required: 'Valor é obrigatório',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Insira apenas números',
          },
        })
        }
      />
      <div id="valueHelpBlock" className="form-text mb-3 mt-0">
        Ex: Números positivos.
        {errors.value
                  && <span className="text-danger">{errors.value.message}</span>}
      </div>

      <label htmlFor="date" className="text-dark ms-1">Método de pagamento</label>
      <select
        className="form-select"
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
      <div id="paymentMethodHelpBlock" className="form-text mb-3 mt-0">
        Ex: Dinheiro, Cartão de crédito, pix...
      </div>
      <label htmlFor="date" className="text-dark ms-1">De</label>
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
      <div id="payerHelpBlock" className="form-text mb-3 mt-0">
        Ex: Quem paga!
        {errors.payer
                  && <span className="text-danger">{errors.payer.message}</span>}
      </div>
      <label htmlFor="date" className="text-dark ms-1">Para</label>
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
      <div id="receiverHelpBlock" className="form-text mb-3 mt-0">
        Ex: Quem recebe!
        {errors.receiver
                  && <span className="text-danger">{errors.receiver.message}</span>}
      </div>

      <label htmlFor="category" className="text-dark ms-1">Categoria</label>
      <select
        className="form-select"
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

      <label htmlFor="subCategory" className="text-dark ms-1">Subcategoria</label>
      <select
        className="form-select"
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

      <label htmlFor="date" className="text-dark ms-1">Data</label>
      <input
        type="date"
        id="date"
        className="form-control date"
        { ...register('date', {
          required: 'Data é obrigatória',
        })
        }
      />
      <div id="dateHelpBlock" className="form-text mb-3 mt-0">
        Ex: Data do pagamento.
        {errors.date
                  && <span className="text-danger">{errors.date.message}</span>}
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
