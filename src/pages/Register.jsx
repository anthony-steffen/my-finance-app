import "../styles/pages/register.css";

function Register() {

  const flexBoxColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <div className="row d-flex justify-content-center pt-4">
            <div className="col-12 col-md-12 col-lg-9 col-xl-8">
              <div className="form-container">
                <h3 className="title">Register</h3>

                <form className="form-horizontal">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control mt-2 mb-1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mt-2 mb-1">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mt-2 ">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <h4 className="sub-title">Personal Information</h4>
                  <div className="form-group mt-2">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label>City</label>
                    <select className="form-control">
                      <option value="paris">Paris</option>
                      <option value="new york">New York</option>
                    </select>
                  </div>
                  <div className="check-terms mb-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="check-label">I agree to the terms</span>
                  </div>
                  <div className="mt-3" style={ flexBoxColumn  }>
                  <button className="glow-on-hover mb-2" style={{height:"50px", flexBoxColumn} }>
                    <span>Create Account</span>
                  </button>
                  <span className="signin-link mb-2 text-center">
                    Already have an account? Click here to <a href="">Login</a>
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
