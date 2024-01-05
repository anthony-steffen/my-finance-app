import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import MaskedInput from 'react-input-mask';

import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../styles/pages/Register.css";

function Register() {
  const { register: contextRegister, registeredUsers } = useContext(AuthContext);


  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,

  } = useForm();

  // const notify = () => toast.success("Sucesso!");

  const onCreateAccount = async (data) => {
    // Verifica se o usuário já está cadastrado
    const isUserExist = registeredUsers.some(
      (user) => user.email === data.email && user.username === data.username && user.phone === data.phone
    );
    const isEmailExist = registeredUsers.some((user) => user.email === data.email);
    const isUsernameExist = registeredUsers.some((user) => user.username === data.username);
    const isPhoneExist = registeredUsers.some((user) => user.phone === data.phone);

    // Se o usuário já estiver cadastrado, exibe um alerta e retorna
    if (isUserExist) {
      toast('User already exists');
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
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };
    contextRegister(newUser);
    toast.success('Account created successfully, back to login page');
  };


    
// Estilização do botão
  const flexBoxColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <div className="vh-100 gradient-custom">
    <ToastContainer />  
      <div className="container">
        <div className="row d-flex justify-content-center pt-4">
            <div className="col-12 col-md-12 col-lg-9 col-xl-8">
              <div className="form-container">
                <h3 className="title">Register</h3>

<form className="form-horizontal" onSubmit={handleSubmit(onCreateAccount)}>
                <div className="form-group mb-4">
                  <label>Username</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    {...register('username', {
                      required: 'Username is required',
                    })}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username.message}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label>Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="form-group mb-4">
                  <label>Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must have at least 8 characters',
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password.message}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: (value) =>
                        value === getValues('password') || 'Passwords do not match',
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                  )}
                </div>

                <div className="form-group">
                    <label>Phone No.</label>
                    <MaskedInput
                      type="text"
                      mask="+55(99)99999-9999"
                      maskChar="_"  // Caractere de preenchimento, opcional
                      alwaysShowMask  // Mostrar a máscara mesmo que o campo esteja vazio, opcional
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      {...register('phone', {
                        required: 'Phone Number is required',
                        pattern: {
                          value: /^\+55\(\d{2}\)\d{5}-\d{4}$/,
                          message: 'Invalid phone number',
                        },
                      })}
                    />
                    {errors.phone && (
                    <div className="invalid-feedback">{errors.phone.message}</div>
                  )}
                  </div>

                <div className="button mt-5" style={flexBoxColumn}>
                  <button
                    type="submit"
                    className="glow-on-hover mb-2"
                    style={{ height: '50px', width: "200px" }}
                    // onClick={notify}
                  >
                    <span>Create Account</span>
                  </button>
                      {/* {accountCreated && (
                        toast.success('Account created successfully')
                      )} */}
    
                  <span className="signin-link mb-2 text-center">
                    Already have an account? Click here to <a href={'/my-finance-app'}>Login</a>
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
