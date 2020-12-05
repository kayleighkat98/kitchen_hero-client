import React, { Component } from 'react';
import { Input, Label, Required } from './Form';
import AuthApiService from '../services/auth-api-service';
import UserContext from '../contexts/UserContext';
import Button from './Button';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  };
  static contextType = UserContext;//DEFINES OUR CONTEXT
  state = { error: null };
  firstInput = React.createRef();//USED TO FOCUS ON INPUT FIELD
  handleSubmit = ev => {//PROCESSES LOGGING IN
    ev.preventDefault();
    const { username, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postLogin({//POST FETCH WITH INPUT VALUES
      username: username.value,
      password: password.value,
    }).then(res => {//SETS BEARER TOKEN
      username.value = ''
      password.value = ''
      this.context.processLogin(res.authToken)
      this.props.onLoginSuccess()
    }).then(()=>{
      window.location.reload(true);//REFRESH PAGE
    }).catch(res => {
      this.setState({ error: res.error })
    });
  };
  componentDidMount() {
    this.firstInput.current.focus();//FOCUS ON INPUT
  };
  render() {
    const { error } = this.state;
    return (
      <form
        className='LoginForm login-form form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className="form-line">
          <Label htmlFor='login-username-input'>
            Username
            <Required/>
          </Label>
          <Input
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            placeholder='Demo) guest'
            required
          />
        </div>
        <div className="form-line">
          <Label htmlFor='login-password-input'>
            Password
            <Required/>
          </Label>
          <Input
            id='login-password-input'
            name='password'
            type='password'
            placeholder='Demo) Password!1'
            required
          />
        </div>
        <div className="form-line">
          <Button type='submit'>
            Login
          </Button>
        </div>
      </form>
    );
  };
};

export default LoginForm;
