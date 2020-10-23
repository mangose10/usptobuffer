import React, { Component } from "react";
import { Link} from "react-router-dom";

class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: "",
      pass: "",
    };
    this.handleEChange = this.handleEChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePChange = (e) => {
    this.setState({ pass: e.target.value });
  };

  authUser = async (e) => {
    e.preventDefault();

    const usrAuth = {
      email: this.state.email,
      pass: this.state.pass,
    };
    console.log(usrAuth);
    const response = await fetch("/auth/auth-usr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: usrAuth }),
    });
    const body = await response.text();

    if (body === "true") {
      this.props.history.push("/");
      window.location.reload(false);
    }
  };

  render() {
    return (
      <div className = "d-flex justify-content-center " >
      <div className="login-box">
        <div className="login-logo">
          
            <b>Login</b>

        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form
              method="post"
              onSubmit={this.authUser}
            >
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.handleEChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handlePChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <p  className="mb-1">
              <Link to="#">
                I forgot my password
              </Link>
            </p>
            <p className="mb-0">
              <Link
                to="#"
                className="text-center"
              >
                Register
              </Link>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      </div>
    );
  }
}

export default Login;


