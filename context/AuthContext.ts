import { createContext, useContext } from 'react';

export type AuthContextType = {
  authStatus: 'checking' | 'authenticated' | 'unauthenticated';
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  authStatus: 'checking',
  logOut: () => {},
});

export const useAuth = () => useContext(AuthContext);
