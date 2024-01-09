import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

import logo from '../assets/logo.png';

import '../styles/pages/Login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const { isLogged } = useContext(AuthContext);
  console.log(isLogged);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
    localStorage.setItem('email', data.email);
    if (isLogged) {
      navigate('/my-finance-app/home');
    }
  };

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-3">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={ { borderRadius: '1rem' } }>
              <div className="login-card-body p-2 text-center">
                <div
                  className="mb-md-0 d-flex mt-md-0 pb-0"
                  style={ { flexDirection: 'column', alignItems: 'center' } }
                >
                  <h1 className="tittle">Vamos poupar Juntos?</h1>
                  <p
                    className="text-white-50 mb-0"
                    style={ { fontSize: 'clamp(0.5em, 0.6em + 1vw, 1em)' } }
                  >
                    Uma solução intuitiva e descomplicada para iniciar o monitoramento eficiente de suas finanças,
                    garantindo que você nunca mais esqueça as datas de vencimento de seus boletos.
                  </p>
                  <img src={ logo } alt="logo" className="mb-2 mt-2" />

                  <form className="login-form-horizontal" onSubmit={ handleSubmit(onSubmit) }>
                    <div className="form-group">
                      <input
                        type="email"
                        className={
                          `form-control mb-0 ${errors.email ? 'is-invalid' : ''}`
                        }
                        placeholder="Username or Email"
                        { ...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        }) }
                      />
                      {errors.email
                      && <div className="login-invalid-feedback text-danger">{errors.email.message}</div>}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className={
                          `form-control mt-2 mb-0 ${errors.password ? 'is-invalid' : ''}`
                        }
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
                        <div className="login-invalid-feedback text-danger">{errors.password.message}</div>
                      )}
                    </div>

                    <p className="small mb-2 mt-0 pb-lg-0">
                      <a className="text-white-50" href="#!">Forgot password?</a>
                    </p>

                    <div
                      className="btn-container d-flex pb-lg-1"
                      style={ {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      } }
                    >
                      <button
                        className="glow-on-hover text-white-50"
                        type="submit"
                        onClick={ onSubmit }
                      >
                        <span>Login</span>
                      </button>
                      <button
                        className="glow-on-hover text-white-50 m-1 mb-2"
                        type="submit"
                        onClick={ () => navigate('/my-finance-app/register') }
                      >
                        <span>Criar Conta</span>
                      </button>
                    </div>
                  </form>
                  {/* <p className='text-white-50'>Dont have an account? </p> */}

                  <div className="d-flex justify-content-center text-center mt-0 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
