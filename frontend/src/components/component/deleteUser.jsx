import React, { Component } from "react";

class DeleteUser extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
    };
  }

  delUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/del-usr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.email }),
    });
    const body = await response.text();

    console.log(body);
  };

  handleEChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.delUser}>
        <label>
          Email:
          <input type="text" onChange={this.handleEChange} />
        </label>
        <input type="submit" value="Delete" />
      </form>
    );
  }
}

export default DeleteUser;
