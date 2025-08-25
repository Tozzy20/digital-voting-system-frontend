import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // 1. Инициализируем состояние, загружая токен из localStorage
    const [authToken, setAuthToken] = useState(() => {
        return localStorage.getItem('token');
    });

    const [user, setUser] = useState(null)

    // 2. Используем useEffect, чтобы сохранять токен в localStorage при каждом его изменении
     useEffect(() => {
        if (authToken) {
            localStorage.setItem('token', authToken);
            try {
                // Декодируем токен
                const decodedToken = jwtDecode(authToken);
                // Сохраняем нужные данные в состоянии user
                setUser({
                    userId: decodedToken.user_id,
                    roleId: decodedToken.role_id,
                });
            } catch (error) {
                console.error('Ошибка декодирования токена:', error);
                // Если токен невалидный, очищаем его
                setAuthToken(null);
                localStorage.removeItem('token');
            }
        } else {
            localStorage.removeItem('token');
            // Если токен отсутствует, очищаем и данные пользователя
            setUser(null);
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
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};