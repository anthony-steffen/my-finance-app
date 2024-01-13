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

  // Novo navegador para rotas
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

  console.log(isValid);
  console.log(registeredUsers);

  const onRegister = (data) => {
    const isUserExist = registeredUsers.some(
      (user) => user.email === data.email
      && user.username === data.username && user.phone === data.phone,
    );
    const isEmailExist = registeredUsers.some((user) => user.email === data.email);
    const isUsernameExist = registeredUsers
      .some((user) => user.username === data.username);
    const isPhoneExist = registeredUsers.some((user) => user.phone === data.phone);

    // Se o usuário já estiver cadastrado, exibe um alerta e retorna
    if (!isValid) {
      return;
    }
    if (isUserExist) {
      toast('username already exists');
      return;
    }
    if (isEmailExist) {
      toast('Email already exists');
      return;
    }
    if (isUsernameExist) {
      toast('Username already exists');
      return;
    }
    if (isPhoneExist) {
      toast('Phone already exists');
      return;
    }

    // Registra o novo usuário se ele não estiver cadastrado
    const newUser = [...registeredUsers, data];
    setRegisteredUsers(newUser);

    localStorage.setItem('registeredUsers', JSON.stringify(
      [...registeredUsers, newUser],
    ));
    reset();
    const timeOut = 4000;
    toast.success('Sucesso! Redirecionado você para a página Login', { autoClose: 3000 });
    setTimeout(() => {
      navigate('/my-finance-app');
    }, timeOut);
  };

  // Estilização do botão
  const flexBoxColumn = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="vh-100 gradient-custom">
      <ToastContainer />
      <div className="container">
        <div className="row d-flex justify-content-center pt-2">
          <div className="col-12 col-md-12 col-lg-9 col-xl-8">
            <div className="form-container mt-2">
              <h3 className="title">Register</h3>

              <form
                className="form-horizontal"
                onSubmit={ handleSubmit(onRegister) }
              >
                <div className="form-group">
                  <input
                    type="text"
                    className={ `form-control mb-3 ${errors.username ? 'is-invalid' : ''}` }
                    placeholder="Username"
                    { ...register('username', {
                      required: 'Username is required',
                    }) }
                  />
                  {errors.username && (
                    <div className="register-invalid-feedback text-danger">{errors.username.message}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className={ `form-control mb-3 ${errors.email ? 'is-invalid' : ''}` }
                    placeholder="Email"
                    { ...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    }) }
                  />
                  {errors.email
                  && <div className="register-invalid-feedback text-danger">{errors.email.message}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className={ `form-control mb-3 ${errors.password ? 'is-invalid' : ''}` }
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
                    <div className="register-invalid-feedback text-danger">{errors.password.message}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className={
                      `form-control mb-3 ${errors.confirmPassword ? 'is-invalid' : ''}`
                    }
                    placeholder="Confirm Password"
                    { ...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: (value) => value === getValues('password')
                      || 'Passwords do not match',
                    }) }
                  />
                  {errors.confirmPassword && (
                    <div className="register-invalid-feedback text-danger">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <MaskedInput
                    type="text"
                    mask="+55(99)99999-9999"
                    maskChar="_" // Caractere de preenchimento, opcional
                    alwaysShowMask // Mostrar a máscara mesmo que o campo esteja vazio, opcional
                    className={ `form-control mb-3 ${errors.phone ? 'is-invalid' : ''}` }
                    placeholder="Phone Number"
                    { ...register('phone', {
                      required: 'Phone Number is required',
                      pattern: {
                        value: /^\+55\(\d{2}\)\d{5}-\d{4}$/,
                        message: 'Invalid phone number',
                      },
                    }) }
                  />
                  {errors.phone && (
                    <div className="register-invalid-feedback text-danger">{errors.phone.message}</div>
                  )}
                </div>

                <div className="button mt-4" style={ flexBoxColumn }>
                  <button
                    type="submit"
                    className="glow-on-hover mb-3"
                    style={ { height: '50px', width: '200px' } }
                  >
                    <span>{ ButtonText }</span>
                  </button>

                  <span className="signin-link mb-2 text-center">
                    Already have an account? Click here to
                    {' '}
                    <a href="/my-finance-app">Login</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
