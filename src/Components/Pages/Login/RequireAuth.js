import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import {useLocation, Navigate} from 'react-router-dom'
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    if(loading){
        <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;