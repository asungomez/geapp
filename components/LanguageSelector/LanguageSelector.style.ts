import MUILanguageIcon from '@mui/icons-material/Language';
import { styled } from '@mui/system';

type AvatarProps = {
  src: string;
};
export const Avatar = styled('div')<AvatarProps>(({ theme, src }) => ({
  backgroundImage: `url(${src})`,
  width: theme.spacing(3),
  height: theme.spacing(3),
  borderRadius: '50%',
  backgroundSize: 'cover',
}));

export const LanguageIcon = styled(MUILanguageIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
