import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
class RegistrationPage extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
    };
    handleRegistrationSuccess = () => {//REDIRECT TO LOGIN UPON SUCCESSFULL REGISTRATION
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