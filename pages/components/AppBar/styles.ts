import { styled, ButtonBase, AppBar } from '@mui/material';

export const StyledRoot = styled(AppBar)(() => ({
  backgroundColor: `transparent`,
  boxShadow: `none`,
}));

export const StyledAvatarButton = styled(ButtonBase)(() => ({
  borderRadius: `100px`,
}));
