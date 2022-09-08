import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  color: theme.palette.background.default,
  height: `320px`,
  padding: `40px 0`,
  background:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[90]
      : theme.palette.primary.shade?.[50],

  [theme.breakpoints.down(`md`)]: {
    height: `auto`,
  },
}));

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  display: `flex`,
  justifyContent: `space-between`,
  maxWidth: `1000px`,
  height: `100%`,

  [theme.breakpoints.down(`md`)]: {
    flexDirection: `column`,
  },
}));

export const StyledTitleWithSocialBox = styled(Box)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[30]
      : theme.palette.primary.shade?.[100],
  fontSize: `48px`,
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[90]
      : theme.palette.primary.shade?.[10],
}));

export const StyledSocialIconsBox = styled(Box)(({ theme }) => ({
  marginTop: `24px`,
  display: `flex`,
  gap: `16px`,

  [theme.breakpoints.down(`md`)]: {
    marginBottom: `32px`,
  },
}));

export const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  color:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[90]
      : theme.palette.primary.shade?.[100],
  fontSize: `35px`,
}));

export const StyledSectionBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(`md`)]: {
    marginBottom: `24px`,
  },
}));

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[90]
      : theme.palette.primary.shade?.[10],
  marginBottom: `12px`,
  fontWeight: 700,
  marginLeft: `6px`,
  [theme.breakpoints.down(`md`)]: {
    marginLeft: 0,
  },
}));

export const StyledLinkBox = styled(Box)(({ theme }) => ({
  cursor: `pointer`,
  padding: `4px 6px`,
  borderRadius: `4px`,
  transition: `255ms ease`,
  width: `fit-content`,

  '&:hover': {
    background:
      theme.palette.mode === `dark`
        ? theme.palette.primary.shade?.[90]
        : theme.palette.primary.shade?.[40],
  },

  [theme.breakpoints.down(`md`)]: {
    paddingLeft: 0,
  },
}));

export const StyledLinkTxt = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === `dark`
      ? theme.palette.primary.shade?.[90]
      : theme.palette.primary.shade?.[100],
  fontWeight: 400,
}));
