import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { LogInButton } from '../LogInButton/LogInButton';
import { Container, Icons, LocationIcon, LogoBox } from './TopBar.style';

export const TopBar: FC = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Container>
          <LogoBox>
            <LocationIcon />
            <Typography>GEApp</Typography>
          </LogoBox>
          <Icons>
            <Box>
              <LogInButton />
            </Box>
            <Box>
              <LanguageSelector />
            </Box>
          </Icons>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
