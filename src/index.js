import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/UserForm";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <UserForm />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
