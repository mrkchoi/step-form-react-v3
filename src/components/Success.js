import React, { Component } from "react";
import { Menu, Header } from "semantic-ui-react";

class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu inverted>
          <Menu.Item name="Multistep React form" />
        </Menu>
        <Header as="h1" textAlign="center">
          Success.
          <br /> Thanks for the submission!
        </Header>
      </React.Fragment>
    );
  }
}

export default Success;
