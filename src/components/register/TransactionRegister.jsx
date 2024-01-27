import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { format, addDays } from 'date-fns';

import HomeContext from '../../contexts/HomeContext';
import ExpenseContext from '../../contexts/ExpenseContext';

function TransactionRegister() {
  // Estados do contexto
  const { typeRegister, setTypeRegister, handleTransaction } = useContext(ExpenseContext);
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
        className="form-register col-md-7 col-lg-7 col-xl-4"
        onSubmit={ handleSubmit(onSubmit) }
      >
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
        <div id="descriptionHelpBlock" className="form-text mb-1 mt-0">
          Ex: Salário, Aluguel, Mercado.
          {errors.description
        && <p className="text-danger text-danger mb-1">{errors.description.message}</p>}
        </div>

        <input
          type="text"
          id="value"
          className="form-control"
          placeholder="Valor"
          aria-describedby="valueHelpBlock"
          { ...register('value', {
            required: 'Valor é obrigatório',
            pattern: {
              value: /^[1-9]\d*(\.\d{1,2})?$/,
              message: 'Insira um valor válido (Ex: 1 ou 1.00)',
            },
          })
          }
        />
        <div id="valueHelpBlock" className="form-text mb-1 mt-0">
          Ex: Números positivos.
          {errors.value
          && <p className="text-danger text-danger mb-1">{errors.value.message}</p>}
        </div>

        <select
          className="form-select mb-2"
          aria-label="Default select example"
          { ...register('paymentMethod', {
            required: 'Método de pagamento é obrigatório',
          })
          }
        >

          <option defaultValue>Método de pagamento</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
          <option>Pix</option>
        </select>

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
        <div id="payerHelpBlock" className="form-text mt-0 mb-1">
          Ex: Seu nome, nome da empresa.
          {errors.payer
          && <p className="text-danger text-danger mb-1">{errors.payer.message}</p>}
        </div>

        <input
          type="text"
          id="receiver"
          className="form-control"
          placeholder="Beneficiário"
          aria-describedby="receiverHelpBlock"
          { ...register('receiver', {
            required: 'Beneficiário é obrigatório',
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Insira apenas letras',
            },
          })
          }
        />
        <div id="receiverHelpBlock" className="form-text mt-0 mb-1">
          {errors.receiver
          && <p className="text-danger text-danger mb-1">{errors.receiver.message}</p>}
          Ex: Seu nome, nome da empresa.
        </div>

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
        <button type="submit" className="btn btn-primary mt-3">
          {ButtonText}
        </button>

      </form>
    </>
  );
}

export default TransactionRegister;
