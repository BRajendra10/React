import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { FormContext } from '../context/FormContext'

function PrivateRoutes({ children }) {
    const { login } = useContext(FormContext);

    if(login) {
        return children
    }else{
        return <Navigate to={"/login"} />;
    }
}

export default PrivateRoutes