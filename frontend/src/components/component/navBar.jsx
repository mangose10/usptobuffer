import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link} from "react-router-dom";


class navBar extends Component {

  render(){
    return (      
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="/">
          Patent App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
         <Nav.Link className="active" as={Link} to="/home" >  Home </Nav.Link> 
          <Nav.Link  as={Link} to="/Patents">Patents</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          {roleSpecific(this.props.loginStat)}
          {inOrOut(this.props.loginStat)}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
function inOrOut(login) {
  //console.log(this.props.loginStat)
  if (login){
    return (<Nav.Link as={Link} to="/Logout">Logout</Nav.Link>);
  }else{
    return (<Nav.Link as={Link} to="/Log">Login</Nav.Link>
    );
  }
  
}

function roleSpecific(auth) {
  if (!auth['auth']){
    return;
  }
  if (auth['role'] === "annotator"){
    return (<Nav.Link as={Link} to="/Profile">Profile</Nav.Link>);
  }else if (auth['role'] === "admin"){
    return (
      <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
    );
  }
}

export default navBar;
