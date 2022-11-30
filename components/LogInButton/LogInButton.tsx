import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import GoogleIcon from '@mui/icons-material/Google';

export const LogInButton: FC = () => {
  const { t } = useTranslation();

  return (
    <Button variant="outlined" color="inherit" startIcon={<GoogleIcon />}>
      {t('log-in')}
    </Button>
  );
};
