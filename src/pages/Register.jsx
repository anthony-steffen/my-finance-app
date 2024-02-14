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
    return registeredUsers.some(
      (user) => user.email === data.email
        && user.username === data.username
        && user.phone === data.phone,
    );
  };

  // Função para exibir toasts
  const toastTimeOut = 3000;
  const showToast = (message, type = 'success', duration = toastTimeOut) => {
    toast[type](message, { autoClose: duration });
  };

  // Função para lidar com o registro do usuário
  const handleUserRegistration = (data) => {
    if (!isValid) return;

    if (isUserExists(data)) {
      showToast('Usuário já cadastrado', 'error');
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
    <section className="register-container vh-100 gradient-custom">
      <ToastContainer />
      <div
        className="register-card col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 mt-3"
      >
        <h4 className="title text-white text-center mt-3">Register</h4>

        <form
          className="d-flex flex-column justify-content-center align-items-center gap-3"
          onSubmit={ handleSubmit(handleUserRegistration) }
        >
          <div className="col-9">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              { ...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }) }
            />
            {errors.email && (
              <div className="register-invalid-feedback text-danger ps-1">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              { ...register('username', {
                required: 'Username is required',
              }) }
            />
            {errors.username && (
              <div className="register-invalid-feedback text-danger ps-1">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="col-9">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              { ...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              }) }
            />
            {errors.password && (
              <div className="register-invalid-feedback text-danger ps-1">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="col-9">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              { ...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === getValues('password')
                      || 'Passwords do not match',
              }) }
            />
            {errors.confirmPassword && (
              <div className="register-invalid-feedback text-danger ps-1">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <div className="col-9">
            <label htmlFor="phone" className="form-label text-white">Phone Number</label>
            <MaskedInput
              type="text"
              id="phone"
              mask="+55(99)99999-9999"
              maskChar="_" // Caractere de preenchimento, opcional
              alwaysShowMask // Mostrar a máscara mesmo que o campo esteja vazio, opcional
              className="form-control"
              { ...register('phone', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^\+55\(\d{2}\)\d{5}-\d{4}$/,
                  message: 'Invalid phone number',
                },
              }) }
            />
            {errors.phone && (
              <div className="register-invalid-feedback text-danger ps-1">
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
              style={ { height: '50px', width: '200px' } }
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
