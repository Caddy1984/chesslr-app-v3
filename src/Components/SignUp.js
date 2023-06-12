import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text">Login</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text">
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text">
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="remember-me" className="text">
                    <span>Remember me</span> 
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </span>
                  </label>
                  <div id="password-reset">
                    <a href="#" className="text">
                      I forgot my password
                    </a>
                  </div>
                  <br />

                  <Link to="/lobby">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-md"
                      value="submit"
                    >
                      Submit
                    </button>
                  </Link>

                  {/* <input
                    type="submit"
                    name="submit"
                    className="btn btn-md"
                    value="submit"
                  /> */}
                </div>
                <div id="register-link">
                  Don't have an account?
                  <a href="#" className="text">
                    {" "}
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
