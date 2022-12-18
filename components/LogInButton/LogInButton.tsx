import { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import GoogleIcon from '@mui/icons-material/Google';
import { logIn } from '../../services/authentication/authenticationService';
import { LoadingButton } from '../LoadingButton/LoadingButton';

export const LogInButton: FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const clickHandler = () => {
    setLoading(true);
    logIn()
      .then((_credentials) => {
        setLoading(false);
      })
      .catch((_error) => {
        setLoading(false);
      });
  };

  return (
    <LoadingButton
      variant="outlined"
      color="inherit"
      startIcon={<GoogleIcon />}
      onClick={clickHandler}
      loading={loading}
    >
      {t('log-in')}
    </LoadingButton>
  );
};
