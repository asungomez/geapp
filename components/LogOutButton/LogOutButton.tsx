import { FC, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'next-i18next';
import { LoadingButton } from '../LoadingButton/LoadingButton';
import { logOut as logOutRequest } from '../../services/authentication/authenticationService';
import { useAuth } from '../../context/AuthContext';

export const LogOutButton: FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { logOut } = useAuth();
  const clickHandler = () => {
    setLoading(true);
    logOutRequest()
      .then(() => {
        setLoading(false);
        logOut();
      })
      .catch((_error) => {
        setLoading(false);
      });
  };
  return (
    <LoadingButton
      variant="outlined"
      color="inherit"
      startIcon={<LogoutIcon />}
      onClick={clickHandler}
      loading={loading}
    >
      {t('log-out')}
    </LoadingButton>
  );
};
