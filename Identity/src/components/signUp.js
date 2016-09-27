import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

// Signup component
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  // validate email

  handleEmailChange() {

  }

  handlePasswordChange() {

  }

  handleConfirmPasswordChange() {

  }

  submitSignUp() {

  }

  closeNotification() {

  }

  render() {
    const emailError = '';
    const passwordError = '';
    const open = true;
    const message = 'snackbar message';

    return (
      <div className="signup">
        <TextField
          className="email-field"
          onChange={this.handleEmailChange}
          floatingLabelText="Email"
          errorText={emailError}
        />
        <Divider />
        <TextField
          className="password-field"
          type="password"
          onChange={this.handlePasswordChange}
          floatingLabelText="Password"
        />
        <Divider />
        <TextField
          className="password-field"
          type="password"
          onChange={this.handleConfirmPasswordChange}
          floatingLabelText="Re-enter Password"
          errorText={passwordError}
        />
        <Divider />
        <RaisedButton
          className="signup-submit"
          onClick={this.submitSignUp}
          label="Sign Up"
          primary={true}
        />
        <Snackbar
          open={open}
          message={message}
          autoHideDuration={3000}
          onRequestClose={this.closeNotification}
        />
      </div>
    );
  }
}
