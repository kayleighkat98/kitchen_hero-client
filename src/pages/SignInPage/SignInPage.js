import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';


class SignInPage extends Component {


    render() {
        return(
            <div className='container'>
               <NavBar/>
               <Header/>
               <form className='sign-in'>
                   <ul className='wrapper'>
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
                            {/* <input type='submit'  value='submit'/> */}
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

export default SignInPage