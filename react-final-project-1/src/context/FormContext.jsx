import React from 'react'
import { createContext, useState } from 'react';

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {
    const [login, setLogin] = useState(sessionStorage.getItem("login") || false);

    const handleLogin = (value) => {
        setLogin(value);
        sessionStorage.setItem("login", value);
    }

  return (
    <FormContext.Provider value={{ login, handleLogin }}>
        {children}
    </FormContext.Provider>
  )
}