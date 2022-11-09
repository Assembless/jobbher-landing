import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(() => ({
  position: `relative`,
  cursor: `pointer`,
  userSelect: `none`,
}));

export const StyledImg = styled(`img`)(() => ({
  height: 30,
}));
