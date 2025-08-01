import React from 'react'
import { createContext, useState } from 'react';

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {
    const [login, setLogin] = useState(false);

    const handleLogin = (value) => {
        setLogin(value);
    }

  return (
    <FormContext.Provider value={{ login, handleLogin }}>
        {children}
    </FormContext.Provider>
  )
}