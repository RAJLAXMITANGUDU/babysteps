import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            
            const decodedUser  = JSON.parse(atob(token.split('.')[1])); 
            setUser (decodedUser );
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            const { token } = response.data;

            localStorage.setItem('jwtToken', token);

            const decodedUser  = JSON.parse(atob(token.split('.')[1]));
            setUser (decodedUser );
        } catch (error) {
            console.error('Login failed:', error);
            throw error; 
        }
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setUser (null);
    };

    const value = {
        user,
        loading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
