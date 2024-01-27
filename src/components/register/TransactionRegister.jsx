/* eslint-disable react/jsx-max-depth */
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { format, addDays } from 'date-fns';

import { IoMdClose } from 'react-icons/io';
import HomeContext from '../../contexts/HomeContext';
import ExpenseContext from '../../contexts/ExpenseContext';
import InputDescription from './InputDescription';
import InputValue from './InputValue';
import InputPayment from './InputPayment';
import InputCategories from './InputCategories';
import InputSubCategories from './InputSubCategories';
import InputPayer from './InputPayer';
import InputReceiver from './InputReceiver';
import InputDate from './InputDate';

function TransactionRegister() {
  // Estados do contexto
  const { handleTransaction } = useContext(ExpenseContext);
  const { typeRegister, setTypeRegister } = useContext(HomeContext);
  const { categories } = useContext(HomeContext);

  // Estados locais
  const [ButtonText, setButtonText] = useState('Salvar');
  const [selectedCategory, setSelectedCategory] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (!typeRegister) {
      toast.error('Selecione um tipo de registro', { autoClose: 2000 });
      return;
    }
    // Formata a data para o formato 'PT-BR' e adiciona 1 dia
    data.date = format(addDays(new Date(data.date), 1), 'dd/MM/yyyy');
    const formatValue = parseFloat(data.value).toFixed(2);
    data.value = formatValue;

    handleTransaction(data);
    reset();
    setButtonText('Novo Registro');
    setSelectedCategory('');
    setTypeRegister('');
  };

  return (
    <>
      <ToastContainer />
      <form
        className="form-register col-9 col-lg-5 col-xl-4"
        onSubmit={ handleSubmit(onSubmit) }
      >
        <InputDescription register={ register } />
        <div id="payerHelpBlock" className="form-text mt-0 mb-1">
          Ex: nome de quem paga.
          {errors.payer
          && <p className="text-danger text-danger mb-1">{errors.payer.message}</p>}
        </div>

        <InputValue register={ register } />
        <div id="valueHelpBlock" className="form-text mb-1 mt-0">
          {errors.value
          && <p className="text-danger text-danger mb-1">{errors.value.message}</p>}
        </div>

        <InputPayment register={ register } />

        <InputCategories register={ register } />

        <InputSubCategories
          register={ register }
          categories={ categories }
          selectedCategory={ selectedCategory }
        />

        <InputPayer register={ register } />
        <div id="payerHelpBlock" className="form-text mt-0 mb-1">
          Ex: nome de quem paga.
          {errors.payer
          && <p className="text-danger text-danger mb-1">{errors.payer.message}</p>}
        </div>

        <InputReceiver register={ register } />
        <div id="receiverHelpBlock" className="form-text mt-0 mb-1">
          {errors.receiver
          && <p className="text-danger text-danger mb-1">{errors.receiver.message}</p>}
          Ex: Nome de quem recebe.
        </div>

        <InputDate register={ register } />
      </form>
      <div
        className="save-menu w-100 d-flex flex-row justify-content-evenly
          align-items-center mt-3"
      >
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={ () => setTypeRegister('income') }
          />
          <label className="form-check-label text-dark " htmlFor="flexRadioDefault1">
            Receita
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={ () => setTypeRegister('expense') }
          />
          <label className="form-check-label text-dark " htmlFor="flexRadioDefault2">
            Despesa
          </label>
        </div>
        <button
          type="click"
          className="btn btn-sm btn-primary"
          onClick={ handleSubmit(onSubmit) }
        >
          {ButtonText}
        </button>
        <IoMdClose
          type="button"
          // className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className="text-danger"
          style={ { borderRadius: '50%', width: '35px', height: '35px' } }
        />
      </div>
    </>
  );
}
export default TransactionRegister;
