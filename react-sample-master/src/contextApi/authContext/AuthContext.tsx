import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import type { UserProps } from './type';

interface AuthContextProvider {
    children: React.ReactNode;
}

interface AuthContextProps {
    user: UserProps;
    login: (data: UserProps) => void;
    logOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    user: {
        data: null,
        isOnBoard: false,
    },
    login: (data: any) => {},
    logOut: () => {},
});

export const AuthProvider = ({ children }: AuthContextProvider): React.ReactElement => {
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    const login = (data: any): void => {
        setUser(data);
    };

    const logOut = (): void => {
        setUser(null);
        navigate('/', { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logOut,
        }),
        [user],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
    return useContext(AuthContext);
};
