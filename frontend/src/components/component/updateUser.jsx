import React, { Component } from 'react';

class UpdateUser extends Component {
  
  constructor() {
    super();
    console.log(this.props);
    
    this.state = {
      changed: false,
      name: '',
      email: '',
      pass: '',
      role: '',
    };
  }

  set() {
    this.setState({name: this.props.auth.name});
    this.setState({role: this.props.auth.role});
    this.setState({email: this.props.auth.email});
    this.setState({changed: true});
    console.log(this.state)
  }

  updateUser = async e => {
    e.preventDefault();
    
    const newVals = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.pass,
      role: this.state.role
    }

    const query = {
      email: this.props.auth.email
    }
    
    const response = await fetch('/api/update-usr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: {newVals: newVals, query:query} }),
    });
    const body = await response.text();
        
    console.log(body);
  };

  handleNChange = e => {
    this.setState({name: e.target.value});
  }

  handleRChange = e => {
    this.setState({role: e.target.value});
  }

  handleEChange = e => {
    this.setState({email: e.target.value});
  }

  handlePChange = e => {
    this.setState({pass: e.target.value});
  }

  render() {
    if (this.props.auth !== ""){
      if (!this.state.changed){
        this.set();
      }
      return (
        <form onSubmit={this.updateUser}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEChange} />
          </label>
          <label>
            Password:
            <input type="password" onChange={this.handlePChange} />
          </label>
          <label>
            Role:
            <input type="text" value={this.state.role} onChange={this.handleRChange} />
          </label>
          <input type="submit" value="Update" />
        </form>
      );
    }else{
      return (<div/>);
    }
  }
}

export default UpdateUser;