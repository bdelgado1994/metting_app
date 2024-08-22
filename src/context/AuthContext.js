import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://192.168.1.109:8000/api/v1/token/', {
                username,
                password,
            });
            const token = response.data.access;
            setToken(token);
            await AsyncStorage.setItem('userToken', token);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = async () => {
        setToken(null);
        await AsyncStorage.removeItem('userToken');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
