import React, { Component } from 'react';
import './Login.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';

class SignUpPage extends Component {


    render() {
        return(
            <div className='container'>
               <NavBar/>
               <Header/>
               <form className='sign-up'>
                   <ul className='wrapper'>
                        <li className='form-row'>
                            <label>
                                First Name:
                                <input type='text' name='first-name'/>
                            </label> 
                        </li>
                        <li className='form-row'>
                            <label>
                                Last Name:
                                <input type='text' name='last-name'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            <label>
                                Email:
                                <input type='text' name='email'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            <label>
                                Password:
                                <input type='password' name='password'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            <label>
                                Confirm Password:
                                <input type='password' name='passwored'/>
                            </label>
                        </li>
                        <li className='form-row'>
                            {/* <input type='submit' value='submit'/> */}
                            <Link to='/kitchen'>
                                Submit
                            </Link>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default SignUpPage