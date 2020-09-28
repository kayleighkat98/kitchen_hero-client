import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ExpiredPage.css';
import Header from '../Header/Header';
import SignOut from '../SignOut/SignOut';

class ExpiredPage extends Component {



    render() {
        return(
            <div className='container'>
               <div className='head'>
                   <Link to='/kitchen'>Back to Kitchen</Link>
                   

                   
               </div>
               <Header/>
               <ul className='Expired-list ingredient-list'>
                    <li className='ingredient'>
                        <div className='head'>
                            <Link to='/edit-ingredient/:ingredient_id'><button className='edit-button'>Edit</button></Link> 
                            <button className='delete-button'>Delete</button>
                        </div>

                        <div className='center'>
                            <h4>Title</h4>
                            <p>Quantity:</p>
                            <p>Expiration Date:</p>
                        </div>

                    </li>
                    <li className='ingredient'>
                        <div className='head'>
                            <button className='edit-button'>Edit</button>
                            <button className='delete-button'>Delete</button>
                        </div>

                        <div className='center'>
                            <h4>Title</h4>
                            <p>Quantity:</p>
                            <p>Expiration Date:</p>
                        </div>

                    </li>
                    <li className='ingredient'>
                        <div className='head'>
                            <button className='edit-button'>Edit</button>
                            <button className='delete-button'>Delete</button>
                        </div>

                        <div className='center'>
                            <h4>Title</h4>
                            <p>Quantity:</p>
                            <p>Expiration Date:</p>
                        </div>

                    </li>
               </ul>
               <SignOut/>
            </div>
        );
    }
}

export default ExpiredPage