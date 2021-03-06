import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PriveteRoute = ({children , ...rest}) => {
    const [loggedIn]= useContext(UserContext)
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
        loggedIn.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PriveteRoute;