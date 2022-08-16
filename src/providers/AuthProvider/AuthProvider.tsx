import React from 'react';
import { AuthContextType, AuthProviderProps } from './interface';

export const AuthContext = React.createContext({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const login = React.useCallback(async () => {
    setLoading(true);
    console.log('login');
    setLoading(false);
    setIsAuthorized(true);
  }, []);

  const logout = React.useCallback(async () => {
    setIsAuthorized(false);
    console.log('logout');
  }, []);

  const register = React.useCallback(async () => {
    setLoading(true);
    setLoading(false);
    console.log('register')
    setIsAuthorized(true);
  }, []);

  return (
    <AuthContext.Provider value={{ loading, login, isAuthorized, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};