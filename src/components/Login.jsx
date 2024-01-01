import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

import logo from '../assets/logo.png';


import '../styles/Login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  const onSubmit = (data) => {
    login(data);
    localStorage.setItem('email', data.email);
    navigate('/home');
    
  };

  return (
    <section className="vh-90 gradient-custom">
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-center h-100">
        <div className="col-12 col-md-12 col-lg-7 col-x1-">
          <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
            <div className="card-body p-4 text-center" style={{height: "100vh"}}>
  
              <div className="mb-md-1 d-flex mt-md-1 pb-1" style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
  
                {/* <h2 className="fw-bold mb-2 text-uppercase">Login</h2> */}
                <h3 className='mt-3 mb-4'>Vamos poupar Juntos?</h3>
                <p className="text-white-50 mb-1" style={{fontSize: "clamp(0.5em, 0.6em + 1vw, 1.3em)"}}>
                  Uma solução intuitiva e descomplicada para iniciar o monitoramento eficiente de suas finanças, 
                  garantindo que você nunca mais esqueça as datas de vencimento de seus boletos.
                  
                  {/* Nosso aplicativo oferece uma abordagem fácil e prática,  */}
                  {/* permitindo que você organize suas receitas, despesas e mantenha-se no controle financeiro com facilidade. 
                  Simplifique sua vida financeira e evite atrasos desnecessários com nossa plataforma amigável e eficaz. */}
                  </p>
                <img src={logo} alt="logo" style={{display:"flex", width: "40%", borderRadius:"50%"}} className="mb-3 mt-3"/>
                {/* <p className="text-white-50 mb-3">Please enter your login and password!</p> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline form-white mb-3">
                      <input
                        type="email" 
                        name="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      id="typeEmailX" 
                      className="form-control form-control-x2"
                      placeholder='E-mail or Username'
                      />
                      {errors.email && <span>{errors.email.message}</span>}
                      {/* <label className="form-label" htmlFor="typeEmailX">Email</label> */}
                  </div>
    
                  <div className="form-outline form-white mb-1">
                    <input required
                    type="password"
                    name='password'
                    id="typePasswordX" 
                    className="form-control form-control-xl"
                    placeholder='Password'
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                      }
                      })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    {/* <label className="form-label" htmlFor="typePasswordX">Password</label> */}
                  </div>
  
                <p className="small mb-2 mt-2 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                <div className="btn-container d-flex p-0 mb-0 pb-lg-1" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <button 
                  className="btn btn-lg  m-1 mb-1 glow-on-hover" 
                  type="submit"
                  >         
                    Criar Conta
                  </button>

                  <button 
                  className="btn btn-lg m-2 glow-on-hover"
                  type="submit"
                  >         
                    Login
                  </button>
                </div>
                </form>
  
                <div className="d-flex justify-content-center text-center mt-0 pt-1">
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>
  
              </div>
  
              <div>
                {/* <p className="mb-0">Dont have an account? </p> */}
                {/* <a href="#!" className="text-white-50 fw-bold">Sign Up</a> */}
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Login