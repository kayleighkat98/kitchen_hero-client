import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class SignInPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => { },
        },
      }
    
      handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/kitchen'
        history.push(destination)
      }
    
    render() {
         return(
            <div className='container'>
               <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
            </div>
        );
    }
}

export default SignInPage