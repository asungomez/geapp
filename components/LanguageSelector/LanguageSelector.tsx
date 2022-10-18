import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { FC, useState } from 'react';
import { Avatar, LanguageIcon } from './LanguageSelector.style';
import USFlag from '../../assets/images/us.png';
import ESFlag from '../../assets/images/es.png';
import { useRouter } from 'next/router';

const localeConfiguration: {
  [locale: string]: { flag: string; label: string };
} = {
  es: { flag: ESFlag.src, label: 'Español' },
  en: { flag: USFlag.src, label: 'English' },
};

export const LanguageSelector: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const togglePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((anchorEl) => (anchorEl ? null : event.currentTarget));
  };

  const closePopover = () => setAnchorEl(null);

  const changeLocale = (nextLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={togglePopover} id="language-selector-button">
        <LanguageIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'language-selector-button',
        }}
      >
        {locales?.map((localeItem) => (
          <MenuItem
            key={localeItem}
            selected={localeItem === locale}
            onClick={() => changeLocale(localeItem)}
          >
            <ListItemIcon>
              <Avatar src={localeConfiguration[localeItem].flag} />
            </ListItemIcon>
            <ListItemText>{localeConfiguration[localeItem].label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
