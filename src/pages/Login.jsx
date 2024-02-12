import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
import AuthContext from '../contexts/AuthContext';

import logo from '../assets/logo.png';

import '../styles/pages/Login.css';

function Login() {
  const { registeredUsers } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const user = registeredUsers.find(
      (users) => users.email === data.email && users.password === data.password,
    );

    if (user) {
      // Usuário encontrado, redireciona para a rota desejada
      navigate('/home');
    } else {
      toast.error('Usuário não encontrado');
    }
  };

  return (
    <section className="login-container vh-100 gradient-custom">
      <div className=" login-card col-11 col-md-8 col-lg-5 col-xl-3 mt-3 py-3">
        <h4 className="tittle text-white">Vamos poupar Juntos?</h4>
        <p
          className="text-white-50 mb-0"
          style={ { fontSize: 'clamp(0.5em, 0.6em + 1vw, 1em)', textAlign: 'center' } }
        >
          Uma solução intuitiva e descomplicada para iniciar o monitoramento eficiente
          de suas finanças, garantindo que você nunca mais esqueça as datas
          de vencimento de seus boletos.
        </p>
        <img src={ logo } alt="logo" className="img-logo mb-2 mt-2" />

        <form
          className="login-form-horizontal"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="form-group">
            <input
              type="email"
              name="email"
              autoComplete="email"
              className={
                `form-control mb-0 ${errors.email ? 'is-invalid' : ''}`
              }
              placeholder="Username or Email"
              onChange={ (event) => setValue('email', event.target.value) }
              { ...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }) }
            />
            {errors.email && (
              <div
                className="login-invalid-feedback text-danger ms-2"
              >
                {errors.email.message}
              </div>
            )}

          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className={
                `form-control mt-0 mb-0 ${errors.password ? 'is-invalid' : ''}`
              }
              placeholder="Password"
              onChange={ (event) => setValue('password', event.target.value) }
              { ...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              }) }
            />
            {errors.password && (
              <div
                className="login-invalid-feedback text-danger ms-2"
              >
                {errors.password.message}
              </div>
            )}
            <a
              className="small mb-2 mt-0 text-white-50 text-center d-block"
              href="#!"
            >
              Forgot password?
            </a>
          </div>

          <div
            className="btn-container d-flex gap-1"
            style={ {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            } }
          >
            <button
              className="btn glow-on-hover text-white"
              type="submit"
              style={ { width: '100%', height: '40px' } }
            >
              Login
            </button>

            <button
              className="btn glow-on-hover text-white m-1 mb-2"
              type="submit"
              style={ { width: '100%', height: '40px' } }
              onClick={ () => navigate('/register') }
            >
              Criar Conta
            </button>

          </div>
        </form>

        <div className="d-flex justify-content-center text-center pt-1 gap-3">
          <a href="https://pt-br.facebook.com/login/device-based/regular/login/" target="_blank" className="text-white" aria-label="Facebook" rel="noreferrer">
            <BsFacebook className="facebook fs-4" />
          </a>
          <a href="https://www.linkedin.com/in/anthony-steffen-dev/" target="_blank" className="linkeding text-white" aria-label="Linkedin" rel="noreferrer">
            <BsLinkedin className="fs-4" />
          </a>
          <a href="https://www.instagram.com/_anthony.steffen_/" target="_blank" className="instagram text-white" aria-label="Instagram" rel="noreferrer">
            <BsInstagram className="fs-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Login;
