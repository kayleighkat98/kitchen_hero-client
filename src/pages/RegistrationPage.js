import React, { Component } from 'react';
import RegistrationForm from '../components/RegistrationForm';
class RegistrationPage extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
    };
    handleRegistrationSuccess = () => {//REDIRECT TO LOGIN UPON SUCCESSFUL REGISTRATION
    const { history } = this.props;
    history.push('/login')
    };
    render() {
        return(
            <div className='container'>
               <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
            </div>
        );
    };
};

export default RegistrationPage;