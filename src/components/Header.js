import React, { Component } from 'react';
import '../styles/dist/Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import UserContext from '../contexts/UserContext';

class Header extends Component {
  static contextType = UserContext;
  //nav when logged in
  renderLogoutLink() { 
    return (
      <nav>
        <Link to='/login' className='link' onClick={()=>this.context.processLogout()}>Logout</Link>
        {' '}
        <Link to='/about' className='link'>About</Link>
        {' '}
        <Link to='/kitchen' className='link'>Kitchen</Link>
        {' '}
        <Link to='/add-ingredient' className='link'>Add</Link>
        {' '}
        <Link to='/expired' className='link'>Expired</Link>
        {' '}
        <Link to='/pantry' className='link'>Pantry</Link>
      </nav>
    );
  };
  //nav when logged out 
  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className='link'>Login</Link>
        {' '}
        <Link to='/register' className='link'>Sign up</Link>
        {' '}
        <Link to='/about' className='link'>About</Link>
      </nav>
    );
  };
  render() {
    return (
      <header>
        <h1>
          {TokenService.hasAuthToken()
            ? <Link to='/kitchen'>Kitchen-Hero</Link>
            : <Link to='/'>Kitchen-Hero</Link>
          }
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()
        }
      </header>
    )
  };
};
export default Header;