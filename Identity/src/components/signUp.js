import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';


// client side validation
const validate = (values) => {
  const errors = {};
  const requiredFields = ['email', 'password', 'password2'];
  requiredFields.forEach((field) => {
    if (!values[field] || values[field].trim() === '') {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  if (values.password && values.password2 && values.password !== values.password2) {
    errors.password2 = 'Password does not match';
  }

  return errors;
};

class SignUp extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={TextField}
            floatingLabelText="Email"
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            component={TextField}
            floatingLabelText="Password"
          />
        </div>
        <div>
          <Field
            name="password2"
            type="password"
            component={TextField}
            floatingLabelText="Confirm Password"
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>clear values</button>
        </div>
      </form>
    );
  }
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default reduxForm({
  form: 'SignUpForm',
  validate
}, mapStateToProps, mapDispatchToProps)(SignUp);
