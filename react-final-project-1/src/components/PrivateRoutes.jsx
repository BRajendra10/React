import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { FormContext } from '../context/FormContext'

function PrivateRoutes({ children }) {
    const { login } = useContext(FormContext);

    if(login) {
        return <Navigate to={"/products"} />
    }else{
        return <Navigate to={"/login"} />
    }

  return children;
}

export default PrivateRoutes