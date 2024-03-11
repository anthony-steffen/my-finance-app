import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-input-mask';

import { ToastContainer, toast } from 'react-toastify';
import AuthContext from '../contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/pages/Register.css';

function Register() {
  const { registeredUsers, setRegisteredUsers } = useContext(AuthContext);

  // Novo navegador para rotas - react-router-dom
  const navigate = useNavigate();

  // Estado local para o texto do botão
  const [ButtonText, setButtonText] = useState('Salvar');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm();

  useEffect(() => (registeredUsers.length === 0
    ? setButtonText('Salvar') : setButtonText('Novo Registro')), [registeredUsers]);

  // Função para verificar se o usuário já existe
  const isUserExists = (data) => {
    const existingUser = registeredUsers.find(
      (user) => user.email === data.email
      || user.username === data.username
      || user.phone === data.phone,
    );

    return existingUser || null;
  };

  // Função para exibir toasts
  const toastTimeOut = 3000;
  const showToast = (message, type = 'success', duration = toastTimeOut) => {
    toast[type](message, { autoClose: duration });
  };

  // Função para lidar com o registro do usuário
  const handleUserRegistration = (data) => {
    if (!isValid) return;

    const existingUser = isUserExists(data);

    if (existingUser) {
      let errorMessage = 'Usuário já cadastrado.';

      if (existingUser.email === data.email) {
        errorMessage = 'Já existe um usuário cadastrado com este email.';
      } else if (existingUser.username === data.username) {
        errorMessage = 'Username indisponível.';
      } else if (existingUser.phone === data.phone) {
        errorMessage = 'Número de telefone já cadastrado.';
      }

      showToast(errorMessage, 'error');
    } else {
      const newUser = [...registeredUsers, data];
      setRegisteredUsers(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(newUser));
      reset();
      const timeOut = 4000;
      showToast('Sucesso! Redirecionando você para a página Login');
      setTimeout(() => navigate('/'), timeOut);
    }
  };

  return (
    <section
      className="
    gradient-custom vh-100 d-flex flex-column justify-content-start align-items-center
    "
    >
      <ToastContainer />
      <div
        className="col-11 col-md-8 col-lg-6 col-xl-3 p-4 rounded-3 mt-3"
        style={ {
          maxWidth: '400px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        } }
      >
        <h4 className="card-tittle text-white">Register</h4>

        <form
          className="
          w-100 d-flex flex-column justify-content-center align-items-center mt-2 gap-3"
          onSubmit={ handleSubmit(handleUserRegistration) }
        >
          <div className="col-11 col-xl-10">
            <input
              type="email"
              className="form-control text-center"
              placeholder="Email"
              { ...register('email', {
                required: 'Digite um e-mail válido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Enderço de e-mail inválido',
                },
              }) }
            />
            {errors.email && (
              <div className="register-invalid-feedback text-center text-danger ps-1">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="col-11 col-xl-10">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Username"
              { ...register('username', {
                required: 'Nome de usuário é obrigatório',
              }) }
            />
            {errors.username && (
              <div className="register-invalid-feedback text-center text-danger ps-1">
                {errors.username.message}
              </div>
            )}
          </div>

          <div className="col-11 col-xl-10">
            <input
              type="password"
              className="form-control text-center"
              placeholder="Password"
              { ...register('password', {
                required: 'Password é obrigatório',
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Deve conter números, letras maiúsculas e minúsculas',
                },
                minLength: {
                  value: 8,
                  message: 'Deve ter mais de 8 characters',
                },
              }) }
            />
            {errors.password && (
              <div className="register-invalid-feedback text-center text-danger ps-1">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="col-11 col-xl-10">
            <input
              type="password"
              className="form-control text-center"
              placeholder="Confirm Password"
              { ...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === getValues('password')
                      || 'Os passwords não são iguais',
              }) }
            />
            {errors.confirmPassword && (
              <div className="register-invalid-feedback text-center text-danger ps-1">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <div className="col-11 col-xl-10">
            <label htmlFor="phone" className="form-label text-white">Phone Number</label>
            <MaskedInput
              type="text"
              id="phone"
              mask="(99)99999-9999"
              maskChar="_" // Caractere de preenchimento, opcional
              alwaysShowMask // Mostrar a máscara mesmo que o campo esteja vazio, opcional
              className="form-control"
              { ...register('phone', {
                required: 'Número de telefone é obrigatório',
                // pattern: {
                //   value: /^\+55\(\d{2}\)\d{5}-\d{4}$/,
                //   message: 'Número de telefone inválido',
                // },
              }) }
            />
            {errors.phone && (
              <div className="register-invalid-feedback text-center text-danger ps-1">
                {errors.phone.message}
              </div>
            )}
          </div>
          <div
            className="
         d-flex justify-content-center align-items-center
          "
          >
            <button
              type="submit"
              className="glow-on-hover mt-1"
              style={ {
                height: '50px',
                width: '200px',
                fontSize: '1.2em',
              } }
            >
              { ButtonText }
            </button>

          </div>
          <p className="signin-link mb-2 text-center text-white">
            Already have an account?
            <br />
            {' '}
            Click here to
            {' '}
            <a href="/my-finance-app/#/">Login</a>
          </p>
        </form>
      </div>
    </section>
  );
}
export default Register;
