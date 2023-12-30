import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';


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
    navigate('/dashboard');
  };

  return (
    <section className="vh-100 gradient-custom">
    <div className="container py-4 h-100">
      <div className="row d-flex justify-content-center h-100">
        <div className="col-11 col-md-8 col-lg-6 col-x1-">
          <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-3 mt-md-3 pb-2">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-4">Please enter your login and password!</p>
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
                      className="form-control form-control-xl"
                      placeholder='E-mail or Username'
                      />
                      {errors.email && <span>{errors.email.message}</span>}
                      {/* <label className="form-label" htmlFor="typeEmailX">Email</label> */}
                  </div>
    
                  <div className="form-outline form-white mb-0">
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
  
                <p className="small mb-4 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
  
                <button 
                className="btn btn-lg px-5 glow-on-hover" 
                type="submit"
                >         
                  Login
                </button>
                </form>
  
                <div className="d-flex justify-content-center text-center mt-0 pt-1">
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>
  
              </div>
  
              <div>
                <p className="mb-0">Dont have an account? </p>
                <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
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