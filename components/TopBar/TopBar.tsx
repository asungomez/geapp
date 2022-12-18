import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container, Icons, LocationIcon, LogoBox } from './TopBar.style';

export const TopBar: FC = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Container>
          <LogoBox>
            <LocationIcon />
            <Typography>Geapp</Typography>
          </LogoBox>
          <Icons>
            <Box>
              <UserMenu />
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
