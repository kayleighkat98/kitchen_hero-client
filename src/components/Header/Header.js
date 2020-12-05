import React, { Component } from 'react';
import '../../styles/dist/Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';

class Header extends Component {
  static contextType = UserContext;
  handleLogoutClick = () => {
    this.context.processLogout();
  }
  //DEFINES NAV BAR W/ LOGOUT LINK
  renderLogoutLink() { 
    return (
      <div>
        <nav>
          <Link
            className='nav-item'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
          {' '}
          <Link to='/about' className='nav-item'>About</Link>
          {' '}
          <Link to='/kitchen' className='nav-item'>Kitchen</Link>
          {' '}
          <Link to='/add-ingredient' className='nav-item'>Add</Link>
          {' '}
          <Link to='/expired' className='nav-item'>Expired</Link>
          {' '}
          <Link to='/pantry' className='nav-item'>Pantry</Link>
        </nav>
      </div>
    );
  };
  //DEFINES NAV BAR W/ LOGIN LINK
  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className='nav-item'>Login</Link>
        {' '}
        <Link to='/register' className='nav-item'>Sign up</Link>
        {' '}
        <Link to='/about' className='nav-item'>About</Link>
      </nav>
    );
  };
  render() {
    return (
      <header className="header-container">
        <h1 className="header center">
        {TokenService.hasAuthToken()
          ? <Link to='/kitchen'>Kitchen-Hero</Link>
          : <Link to='/'>Kitchen-Hero</Link>}
        </h1>
        <div className='nav'>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    )
  };
};
export default Header;