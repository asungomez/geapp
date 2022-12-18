import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogInButton } from '../LogInButton/LogInButton';
import { LogOutButton } from '../LogOutButton/LogOutButton';

export const UserMenu: FC = () => {
  const { authStatus } = useAuth();

  switch (authStatus) {
    case 'checking':
      return <CircularProgress color="inherit" size={20} />;
    case 'authenticated':
      return <LogOutButton />;
    case 'unauthenticated':
      return <LogInButton />;
  }
};
