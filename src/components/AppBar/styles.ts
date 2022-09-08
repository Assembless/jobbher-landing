import { styled, ButtonBase, AppBar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledRoot = styled(AppBar)(() => ({
  backgroundColor: `transparent`,
  boxShadow: `none`,
}));

export const StyledAvatarButton = styled(ButtonBase)(() => ({
  borderRadius: `100px`,
}));
