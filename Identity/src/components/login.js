import React from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Login component
export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Paper>
          <Tabs>
            <Tab label="Login">
            </Tab>
            <Tab label="Signup">
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}
