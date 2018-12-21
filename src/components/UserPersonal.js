import React, { Component } from "react";
import { Header, Menu, Form, Button } from "semantic-ui-react";

class UserPersonal extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange } = this.props;
    const {
      values: { occupation, city, bio }
    } = this.props;

    return (
      <React.Fragment>
        <Menu inverted>
          <Menu.Item name="Multistep React form" />
        </Menu>
        <Header as="h4">Enter your personal details</Header>
        <Form>
          <Form.Field>
            <label>Occupation</label>
            <input
              placeholder="Occupation"
              onChange={handleChange("occupation")}
              value={occupation}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City"
              onChange={handleChange("city")}
              value={city}
            />
          </Form.Field>
          <Form.Field>
            <label>Bio</label>
            <input
              placeholder="A short bio"
              onChange={handleChange("bio")}
              value={bio}
            />
          </Form.Field>
          <Button basic color="black" type="submit" onClick={this.back}>
            Back
          </Button>
          <Button color="blue" type="submit" onClick={this.continue}>
            Continue
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default UserPersonal;
