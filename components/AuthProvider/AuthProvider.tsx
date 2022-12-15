import { FC, ReactNode, useEffect, useState } from 'react';
import { AuthContext, AuthContextType } from '../../context/AuthContext';
import { getAuthenticatedUser } from '../../services/authentication/authenticationService';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<
    'checking' | 'authenticated' | 'unauthenticated'
  >('checking');

  useEffect(() => {
    if (authStatus === 'checking') {
      getAuthenticatedUser()
        .then((_user) => {
          setAuthStatus('authenticated');
        })
        .catch(() => {
          setAuthStatus('unauthenticated');
        });
    }
  }, [authStatus]);

  const logOut = () => setAuthStatus('unauthenticated');

  const authContext: AuthContextType = { authStatus, logOut };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
