import React from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';

import SignUp from './signUp';

// Login component
export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Paper zDepth={2} rounded={true}>
          <Tabs>
            <Tab label="Login">
            </Tab>
            <Tab label="Sign Up">
              <SignUp />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}
