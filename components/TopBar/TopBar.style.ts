import { Box, Container as MUIContainer } from '@mui/material';
import { styled } from '@mui/system';
import MUILocationOnIcon from '@mui/icons-material/LocationOn';

export const Container = styled(MUIContainer)(({ theme }) => ({
  width: '100%',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Icons = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const LocationIcon = styled(MUILocationOnIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const LogoBox = styled(Box)(() => ({
  flexDirection: 'row',
  display: 'flex',
}));
