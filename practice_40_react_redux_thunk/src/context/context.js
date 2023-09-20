import React from 'react';

export const ThemeContext = React.createContext('light');

export const initialUserState = {
    name: 'Vasilij',
    status: 'active'
};

export const UserContext = React.createContext(initialUserState);