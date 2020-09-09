import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ePantryPage.css';
import Header from '../Header';
import SignOut from '../SignOut';

class ePantryPage extends Component {



    render() {
        return(
            <div className='container'>
               <div className='head'>
                   <Header/>
                   <SignOut/>
               </div>
               <Link to='/add-ingredient'><button>ADD MORE</button></Link>
               <Link to='/kitchen'>Back to Kitchen</Link>
               <ul className='epantry-list'>
                    <li>
                        <div className='head'>
                            <Link to='/edit-ingredient'><button>Edit</button></Link>
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
                        <Link to='/edit-ingredient'><button>Edit</button></Link>
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
                            <Link to='/edit-ingredient'><button>Edit</button></Link>
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

export default ePantryPage