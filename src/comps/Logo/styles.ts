import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(() => ({
  position: `relative`,
  cursor: `pointer`,
  userSelect: `none`,
}));

export const StyledMessage = styled(Typography)(() => ({
  fontFamily: `'Poppins', sans-serif`,
  fontSize: `30px`,
  fontWeight: `600`,
}));
