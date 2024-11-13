import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a Context for Auth
const AuthContext = createContext();

// Custom Hook to use Auth Context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return React.useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useState({
        accessToken: null,
        csrfToken: null,
    });

    // Load tokens from sessionStorage (or other preferred storage)
    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        const csrfToken = sessionStorage.getItem('csrfToken');

        if (accessToken && csrfToken) {
            setAuthState({
                accessToken,
                csrfToken
            });
        } else {
            navigate('/login');  // Redirect to login if no token
        }
    }, [navigate]);

    const login = (response) => {
        const { accessToken, csrfToken } = response
        setAuthState({ accessToken, csrfToken });

        // Store tokens in sessionStorage for persistence        
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('csrfToken', csrfToken);
    };

    const updateCsrfToken = (newCsrfToken) => {
        setAuthState((prevState) => ({
            ...prevState,
            csrfToken: newCsrfToken
        }));
        sessionStorage.setItem('csrfToken', newCsrfToken);
    };


    const logout = () => {
        setAuthState({
            accessToken: null,
            csrfToken: null
        });
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('csrfToken');
        navigate('/login');  // Redirect to login
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout, updateCsrfToken }}>
            {children}
        </AuthContext.Provider>
    );
};
