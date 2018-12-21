import React, { Component } from "react";
import { Header, Menu, Form, Button } from "semantic-ui-react";

class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;
    const {
      values: { firstName, lastName, email }
    } = this.props;

    return (
      <React.Fragment>
        <Menu inverted>
          <Menu.Item name="Multistep React form" />
        </Menu>
        <Header as="h4">Enter your user details</Header>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={handleChange("firstName")}
              value={firstName}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={handleChange("lastName")}
              value={lastName}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={handleChange("email")}
              value={email}
            />
          </Form.Field>
          <Button color="blue" type="submit" onClick={this.continue}>
            Continue
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default UserDetails;
