import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // 1. Инициализируем состояние, загружая токен из localStorage
    const [authToken, setAuthToken] = useState(() => {
        return localStorage.getItem('token');
    });

    // 2. Используем useEffect, чтобы сохранять токен в localStorage при каждом его изменении
    useEffect(() => {
        if (authToken) {
            localStorage.setItem('token', authToken);
        } else {
            localStorage.removeItem('token');
        }
    }, [authToken]);

    // Функция для входа в систему (получения и сохранения токена)
    const login = (token) => {
        setAuthToken(token);
    };

    // Функция для выхода из системы (удаления токена)
    const logout = () => {
        setAuthToken(null);
    };

    const value = {
        authToken,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};