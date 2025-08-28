// AuthProvider.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
// import { setupApiInterceptors } from './api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => {
        return localStorage.getItem('token');
    });
    const [user, setUser] = useState(null);

    // Этот useEffect запускается только один раз при монтировании компонента
    useEffect(() => {
        const logout = () => {
            setAuthToken(null);

        };
        // Передаем функцию logout в наш API-файл
        // setupApiInterceptors(logout);
    }, []);

    useEffect(() => {
        if (authToken) {
            localStorage.setItem('token', authToken);
            try {
                const decodedToken = jwtDecode(authToken);
                setUser({
                    userId: decodedToken.user_id,
                    roleId: decodedToken.role_id,
                });
            } catch (error) {
                console.error('Ошибка декодирования токена:', error);
                setAuthToken(null);
                localStorage.removeItem('token');
            }
        } else {
            localStorage.removeItem('token');
            setUser(null);
        }
    }, [authToken]);

    const login = (token) => {
        setAuthToken(token);
    };

    const value = {
        authToken,
        user,
        login,
        logout: () => {
            setAuthToken(null);
            navigate('/');
        },
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};