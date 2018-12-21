import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/UserForm";

class App extends Component {
  render() {
    return <UserForm />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
