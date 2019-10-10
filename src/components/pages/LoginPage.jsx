import React from 'react';
import { LoginScreen, View, LoginScreenTitle, ListInput, ListButton, BlockFooter, Page, Navbar, Block, BlockTitle, List, ListItem, Button } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginScreenOpened: false,
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <Page>
        <Navbar title="Login Screen"></Navbar>
        <Block>
          <p>Welcome to login start</p>
        </Block>

        <Block>
          <Button raised large fill loginScreenOpen=".demo-login-screen">Log In</Button>
        </Block>

        <LoginScreen className="demo-login-screen" opened={this.state.loginScreenOpened} onLoginScreenClosed={() => {this.setState({loginScreenOpened : false})}}>
          <Page loginScreen>
            <LoginScreenTitle>Framework7</LoginScreenTitle>
            <List form>
              <ListInput
                label="Username"
                type="text"
                placeholder="Your username"
                value={this.state.username}
                onInput={(e) => {
                  this.setState({ username: e.target.value});
                }}
              />
              <ListInput
                label="Password"
                type="password"
                placeholder="Your password"
                value={this.state.password}
                onInput={(e) => {
                  this.setState({ password: e.target.value});
                }}
              />
            </List>
            <List>
              <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
              <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
            </List>
          </Page>
        </LoginScreen>
      </Page>
    )
  }
  signIn() {
    const self = this;
    const app = self.$f7;

    app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
      app.loginScreen.close();
    });
  }
};
  



