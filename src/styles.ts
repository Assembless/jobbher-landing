import { styled, AppBar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledRoot = styled(AppBar)(() => ({
  backgroundColor: `transparent`,
  boxShadow: `none`,
}));

export const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  color:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[90]
      : theme.palette.primary.shade?.[100],
  fontSize: `28px`,
}));
