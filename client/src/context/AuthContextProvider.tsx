import React, { useReducer, createContext, useState } from 'react'

interface Props {
    children: React.ReactNode;
}
const AuthContext = createContext({})


export const AuthContextProvider: React.FC<Props> = ({ children }) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext