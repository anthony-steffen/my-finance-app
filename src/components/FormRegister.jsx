import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import HomeContext from '../contexts/HomeContext';
// import { Link } from 'react-router-dom';

function FormRegister() {
  const { formData, setFormData } = useContext(HomeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue('description', formData.description);
    setValue('value', formData.value);
    setValue('paymentMethod', formData.paymentMethod);
    setValue('category', formData.category);
    setValue('payer', formData.payer);
    setValue('receiver', formData.receiver);
    setValue('date', formData.date);
  }, [formData, setValue]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    setFormData(data);
    localStorage.setItem('formData', JSON.stringify(data));
    console.log(data);
  };

  return (
    <form
      className="form-register col-md-7 col-lg-7 col-xl-4"
      onSubmit={ errors ? handleSubmit(onSubmit) : null }
    >
      {/* <label htmlFor="description" className="form-label mb-0">Descrição</label> */}
      <input
        type="text"
        id="description"
        className="form-control"
        placeholder="Descrição"
        aria-describedby="passwordHelpBlock"
        // Descrição com no mínimo 3 e no máximo 25 caracteres, apenas letra e espaço
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
            message: 'Insira apenas letras',
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
        onChange={ (e) => setFormData({ ...formData, value: e.target.value }) }
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
        {errors.value && <span>{errors.value.message}</span>}
      </div>

      {/* <label htmlFor="paymentMethod" className="form-label mb-0">Método de pagamento</label> */}
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        style={ { width: '350px', height: '40px' } }
        onChange={ (e) => setFormData({ ...formData, paymentMethod: e.target.value }) }
        { ...register('paymentMethod', {
          required: 'Método de pagamento é obrigatório',
        })
        }
      >
        <option defaultValue>Selecione um método de pagamento</option>
        <option value="1">Dinheiro</option>
        <option value="2">Cartão de crédito</option>
        <option value="3">Cartão de débito</option>
        <option value="4">Pix</option>
      </select>

      {/* <label htmlFor="category" className="form-label">Categoria</label> */}
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        style={ { width: '350px', height: '40px' } }
        onChange={ (e) => setFormData({ ...formData, category: e.target.value }) }
        { ...register('category', {
          required: 'Categoria é obrigatória',
        })
        }
      >
        <option defaultValue>Selecione uma categoria</option>
        <option value="1">Alimentação</option>
        <option value="2">Educação</option>
        <option value="3">Lazer</option>
        <option value="4">Saúde</option>
        <option value="5">Transporte</option>
      </select>

      <input
        type="text"
        id="payer"
        className="form-control payer"
        placeholder="Pagador"
        aria-describedby="payerHelpBlock"
        onChange={ (e) => setFormData({ ...formData, payer: e.target.value }) }
      />
      <div id="payerHelpBlock" className="form-text mt-0 mb-3">
        Ex: Seu nome, nome da empresa.
      </div>

      <input
        type="text"
        id="receiver"
        className="form-control"
        placeholder="Beneficiário"
        aria-describedby="receiverHelpBlock"
        onChange={ (e) => setFormData({ ...formData, receiver: e.target.value }) }
      />
      <div id="receiverHelpBlock" className="form-text mt-0 mb-3">
        Ex: Seu nome, nome da empresa.
      </div>

      <label htmlFor="date" className="form-label mb-0 text-white">Data</label>
      <input type="date" id="date" className="form-control date" />

      <button
        type="click"
        className="btn btn-primary mt-3"
      >
        Salvar
      </button>

    </form>
  );
}

export default FormRegister;
