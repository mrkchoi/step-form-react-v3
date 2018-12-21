import React, { Component } from "react";
import { Header, Menu, List, Button } from "semantic-ui-react";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    return (
      <React.Fragment>
        <Menu inverted>
          <Menu.Item name="Multistep React form" />
        </Menu>
        <Header as="h4">Confirm your information below</Header>
        <List celled>
          <List.Item>
            <List.Content>
              <List.Header>First Name</List.Header>
              {firstName}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Last Name</List.Header>
              {lastName}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Email</List.Header>
              {email}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Occupation</List.Header>
              {occupation}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>City</List.Header>
              {city}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Bio</List.Header>
              {bio}
            </List.Content>
          </List.Item>
        </List>
        <Button basic color="black" type="submit" onClick={this.back}>
          Back
        </Button>
        <Button color="blue" type="submit" onClick={this.continue}>
          Submit!
        </Button>
      </React.Fragment>
    );
  }
}

export default Confirm;
