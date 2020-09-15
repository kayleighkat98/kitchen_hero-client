import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ePantryPage.css';
import Header from '../Header/Header';
import SignOut from '../SignOut/SignOut';
import ApiContext from '../ApiContext';


class ePantryPage extends Component {

    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = ApiContext

    render() {
        const { ingredients=[] } = this.context
        console.log(ingredients)
        return(
            <div className='epantry-page'>
                <Link to='/kitchen'>Back to Kitchen</Link>
               <div className='head'>
                   <Header/>

               </div>

               <Link to='/add-ingredient'><button>ADD MORE</button></Link>


                <ul className='epantry-list'>
                    {ingredients.map(ingredient =>
                        <li>

                            <div className='head'>
                                <Link to='/edit-ingredient/:ingredient_id'><button>Edit</button></Link>
                                <button>Delete</button>
                            </div>

                            <div className='center'>
                                <h4>Title</h4>
                                <p>Quantity:</p>
                                <p>Expiration Date:</p>
                            </div>

                        </li>    
                    )}      
                </ul>
                <SignOut/>
            </div>
        );
    }
}

export default ePantryPage