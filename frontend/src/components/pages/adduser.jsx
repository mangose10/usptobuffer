import React, { Component } from "react";
import { Button } from "react-bootstrap";

class adduser extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      pass: "",
      role: "",
    };
  }

  makeUser = async (e) => {
    e.preventDefault();

    const usrAuth = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.pass,
      role: this.state.role,
    };

    const response = await fetch("/api/make-usr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: usrAuth }),
    });
    const body = await response.text();

    console.log(body);
  };

  handleNChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleRChange = (e) => {
    this.setState({ role: e.target.value });
  };

  handleEChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePChange = (e) => {
    this.setState({ pass: e.target.value });
  };

  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="register-box">
          <div className="register-logo">
            <b>Add User</b>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new user</p>
              <form onSubmit={this.makeUser}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    onChange={this.handleNChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
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
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    onChange={this.handleRChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* /.col */}
                  <div className="col-4">
                    <Button
                      type="submit"
                      className="btn btn-primary btn-block"
                      style={{ padding: "3%" }}
                    >
                      Add
                    </Button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

export default adduser;
