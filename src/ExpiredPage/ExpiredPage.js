import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ExpiredPage.css';
import Header from '../Header';
import SignOut from '../SignOut';

class ExpiredPage extends Component {



    render() {
        return(
            <div className='container'>
               <div className='head'>
                   <Header/>
                   <SignOut/>
               </div>
               <Link to='/kitchen'>Back to Kitchen</Link>
               <ul className='Expired-list'>
                    <li>
                        <div className='head'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                        <div className='center'>
                            <h4>Title</h4>
                            <p>Quantity:</p>
                            <p>Expiration Date:</p>
                        </div>

                    </li>
                    <li>
                        <div className='head'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                        <div className='center'>
                            <h4>Title</h4>
                            <p>Quantity:</p>
                            <p>Expiration Date:</p>
                        </div>

                    </li>
                    <li>
                        <div className='head'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                        <div className='center'>
                            <h4>Title</h4>
                            <p>Quantity:</p>
                            <p>Expiration Date:</p>
                        </div>

                    </li>
               </ul>
            </div>
        );
    }
}

export default ExpiredPage