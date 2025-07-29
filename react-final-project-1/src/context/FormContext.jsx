import React from 'react'
import { createContext, useState } from 'react';

export const FormContext = createContext(false);

export default function FormContextProvider({children}) {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(!login);
    }

  return (
    <FormContext.Provider value={{ login, handleLogin }}>
        {children}
    </FormContext.Provider>
  )
}