import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { FC } from 'react';

type LoadingButtonProps = ButtonProps & {
  children?: React.ReactNode;
  loading?: boolean;
};

export const LoadingButton: FC<LoadingButtonProps> = ({
  children,
  loading,
  ...buttonProps
}) => {
  const props: ButtonProps = {
    ...buttonProps,
    startIcon: loading ? (
      <CircularProgress color="inherit" size={20} />
    ) : (
      buttonProps.startIcon
    ),
    onClick: loading ? undefined : buttonProps.onClick,
  };
  return <Button {...props}>{children}</Button>;
};
