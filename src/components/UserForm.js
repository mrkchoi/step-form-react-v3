import React, { Component } from "react";
import UserDetails from "./UserDetails";
import UserPersonal from "./UserPersonal";
import Confirm from "./Confirm";
import Success from "./Success";
import "semantic-ui-css/semantic.min.css";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  nextStep = e => {
    const { step } = this.state;
    e.preventDefault();
    this.setState({
      step: step + 1
    });
  };

  prevStep = e => {
    const { step } = this.state;
    e.preventDefault();
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const values = this.state;
    // const { firstName, lastName, email, occupation, city, bio } = values;

    switch (step) {
      default:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserPersonal
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
