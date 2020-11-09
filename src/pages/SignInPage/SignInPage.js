import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
class SignInPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };
  handleLoginSuccess = () => {//REDIRECTS PAGE UPON SUCCESSFULL LOGIN
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/kitchen';//DEFINE WHAT PAGE TO RENDER UPON LOGIN
    history.push(destination);//REDIRECT PAGE
  };
  render() {
    return(
      <div className='container'>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </div>
    );
  };
};

export default SignInPage;