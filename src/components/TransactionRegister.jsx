import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import HomeContext from '../contexts/HomeContext';

function TransactionRegister() {
  const { addTransaction, categories } = useContext(HomeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [ButtonText, setButtonText] = useState('Salvar');
  const [selectedCategory, setSelectedCategory] = useState('');

  const onSubmit = (data) => {
    addTransaction(data);
    reset();
    setButtonText('Nova Transação');
    setSelectedCategory('');
  };

  return (
    <form
      className="form-register col-md-7 col-lg-7 col-xl-4"
      onSubmit={ errors ? handleSubmit(onSubmit) : null }
    >
      <input
        type="text"
        id="description"
        className="form-control"
        placeholder="Descrição"
        aria-describedby="passwordHelpBlock"
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
      <div id="passwordHelpBlock" className="form-text mb-3 mt-0">
        Ex: Salário, Aluguel, Mercado.
        {errors.description
        && <p className="text-danger">{errors.description.message}</p>}
      </div>

      <input
        type="number"
        id="value"
        className="form-control"
        placeholder="Valor"
        aria-describedby="valueHelpBlock"
        style={ { width: '150px', height: '35px' } }
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

      <select
        className="form-select mb-3"
        aria-label="Default select example"
        style={ { width: '350px', height: '40px' } }
        { ...register('paymentMethod', {
          required: 'Método de pagamento é obrigatório',
        })
        }
      >

        <option defaultValue>Selecione um método de pagamento</option>
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
        <option>Pix</option>
      </select>

      <select
        className="form-select mb-3"
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
        className="form-select mb-3"
        aria-label="Sub-categoria"
        style={ { width: '350px', height: '40px' } }
        { ...register('sub-category', {
          required: 'Sub-categoria é obrigatória',
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
      <div id="payerHelpBlock" className="form-text mt-0 mb-3">
        Ex: Seu nome, nome da empresa.
        {errors.payer
          && <span className="text-danger">{errors.payer.message}</span>}
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
      <div id="receiverHelpBlock" className="form-text mt-0 mb-3">
        {errors.receiver
          && <span className="text-danger">{errors.receiver.message}</span>}
        Ex: Seu nome, nome da empresa.
      </div>

      <label htmlFor="date" className="form-label mb-0 text-white">Data</label>
      <input
        type="date"
        id="date"
        className="form-control date"
        { ...register('date', {
          required: 'Data é obrigatória',
        })
        }
      />
      <button type="click" className="btn btn-primary mt-3">
        {ButtonText}
      </button>

    </form>
  );
}

export default TransactionRegister;
