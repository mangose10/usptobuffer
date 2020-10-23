import React, { Component } from "react";
import ViewPatent from "./components/pages/viewPatent"; // viewpatent
import Home from "./components/pages/home"; // home
import Login from "./components/pages/login"; // login
import Setting from "./components/pages/settings"; // profile
import Profile from "./components/pages/profile"; // profile
import NavBar from "./components/component/navBar"; // navbar
import Dashboard from "./components/component/dashboard"; //dashboard
import ViewUser from "./components/pages/viewUser"; //View Users
import AddUser from "./components/pages/adduser"; //Add User
import AddPatent from "./components/pages/addpatent"; //Add Patent
import { Switch, Route } from "react-router-dom";
import "./styles/custom.scss"; 
import Logout from "./components/pages/logout";

class App extends Component {

  constructor() {
    super();

    this.state = {
      auth: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ auth: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/auth/get-auth-status');
    const body = await response.json();  

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(){
    return (
      <div>
        <NavBar loginStat={this.state.auth}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Patents" component={() => <ViewPatent auth={this.state.auth}/>} />
          <Route path="/Settings" component={Setting} />
          <Route path="/Profile"  component={() => <Profile auth={this.state.auth}/>} />
          <Route exact path="/Dashboard"  component={() => <Dashboard auth={this.state.auth}/>} />
          <Route path="/Dashboard/AddUser" component={() => <AddUser auth={this.state.auth}/>} />
          <Route path="/Dashboard/ViewUser" component={() => <ViewUser auth={this.state.auth}/>} />
          <Route path="/Dashboard/AddPatent" component={() => <AddPatent auth={this.state.auth}/>} />
          <Route path="/Log" component={Login} />
          <Route path="/Logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;

