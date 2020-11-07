import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import IngredientContext from '../contexts/IngredientContext';
import UserContext from '../contexts/UserContext';


export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext => <IngredientContext.Consumer>
            {ingredientContext =>
              !!userContext.user.id
                ? <Component {...componentProps} user={userContext} ingredients={ingredientContext}/>
                : (
                  <Redirect
                    to={{
                      pathname: userContext.user.idle ? '/login' : '/register',
                      state: { from: componentProps.location },
                    }}
                  />
                  )
            }
          </IngredientContext.Consumer>}
        </UserContext.Consumer>
      )}
    />
  )
};
