import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext);
    const  location = useLocation()
    console.log(user)
    if(loading){
        return <h2>loading</h2>
    }
    if(user && user.uid){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;