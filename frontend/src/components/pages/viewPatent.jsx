import React, { Component } from "react";
import PatView from "../component/patView";
import { Button, Form } from "react-bootstrap";
//const regex = /(<([^>]+)>)/ig;

class viewPatent extends Component {

  constructor() {
    super();



    this.state = {
      auth: "",
      role: "",
      pat: "",
      post: "",
      responseToPost:""
    };
  }

  labels = async (e) => {
    e.preventDefault();

    const labelResponse = {
      email: this.props.auth.email,
      role: this.state.role,
      pat: this.state.pat,
      responseToPost: this.state.responseToPost,
      
    };
    console.log(labelResponse)

    const response = await fetch("/api/label-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: labelResponse }),
    });
    const body = await response.text();

    console.log(body);
  };

  postLabel = () => {
    console.log("submit");
  };
  nextPost = () => {
    console.log("next");
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ pat: res }))
      .catch((err) => console.log(err));
      this.setState({
       responseToPost:
       {
        MachineLearning: "Yes", 
        ActiveLearning:"Yes"
      },})
      
  }


  callApi = async () => {
    const response = await fetch("/api/get-pat-data");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleMLChange = (e) => {
    let currentState = this.state.responseToPost;
    currentState.MachineLearning = e.target.value;
    this.setState({responseToPost: currentState});
  };

  handleALChange = (e) => {
    let currentState = this.state.responseToPost;
    currentState.ActiveLearning = e.target.value;
    this.setState({responseToPost:currentState});
  };


  render() {
    return (
      this.state.pat && (
        <div>
          <PatView pat={this.state.pat} />

          <Form className="container mt-5" onSubmit={this.labels}>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Is this a Machine Learning Patent?</Form.Label>
              <Form.Control as="select" size="sm" custom onChange={this.handleMLChange}>
                <option >Yes</option>
                <option >No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Is this a Active Learning Patent?</Form.Label>
              <Form.Control as="select" size="sm" custom onChange={this.handleALChange}>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" size="lg" >
              {" "}
              Submit
            </Button>
          </Form>

          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              size="lg"
              className="mr-3"
              handleClick={this.nextPost}
            >
              {" "}
              Next
            </Button>
          </div>
        </div>
      )
    );
  }
}

export default viewPatent;
