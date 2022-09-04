import { Components, PaletteOptions } from '@mui/material';
import { ProjectTheme, themeOptions } from './theme';

export const componentOverrides = (
  palette: PaletteOptions,
): Components<ProjectTheme> => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        minHeight: `100vh`,
      },
      '#__next': {
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        border: `1px solid ${palette[`neutral-variant`]?.shade?.[90]}`,
        boxShadow: `none`,
        '&:first-of-type': {
          borderRadius: `0px`,
        },
        '&:last-of-type': { borderRadius: `0px` },
        '&:not(&:first-of-type)': {
          borderTop: `none`,
          borderBottom: `none`,
        },
        '&:not(&:last-of-type)': {
          borderTop: `none`,
          borderBottom: `none`,
        },
        '&.Mui-expanded': {
          borderRadius: `14px`,
          borderTop: `1px solid ${
            palette[`neutral-variant`]?.shade?.[90]
          } !important`,
          borderBottom: `1px solid ${
            palette[`neutral-variant`]?.shade?.[90]
          } !important`,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        padding: `11px`,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      multiline: {
        borderRadius: `40px`,

        '& textarea': {
          padding: `20px`,
        },
      },
      notchedOutline: {
        transition: `border-color 155ms ease`,
        borderColor:
          palette.mode === `dark`
            ? palette[`neutral-variant`]?.shade?.[30]
            : palette[`neutral-variant`]?.shade?.[80],
        '&:hover': {
          borderColor:
            palette.mode === `dark`
              ? palette[`neutral-variant`]?.shade?.[20]
              : palette[`neutral-variant`]?.shade?.[70],
        },
      },
      root: {
        padding: `0 10px`,
        borderRadius: `100px`,
        backgroundColor: palette.background?.default,
        transition: `border-color 155ms ease`,
        borderColor:
          palette.mode === `dark`
            ? palette[`neutral-variant`]?.shade?.[10]
            : palette[`neutral-variant`]?.shade?.[80],
        '&:hover': {
          borderColor:
            palette.mode === `dark`
              ? palette[`neutral-variant`]?.shade?.[20]
              : palette[`neutral-variant`]?.shade?.[70],
        },
      },
      input: {
        color:
          palette.mode === `dark`
            ? palette.primary?.shade?.[95]
            : palette.primary?.shade?.[20],
        fontSize: `14px`,
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderColor:
          palette.mode === `dark`
            ? palette[`neutral-variant`]?.shade?.[20]
            : palette[`neutral-variant`]?.shade?.[80],
        backgroundColor: palette.background?.default,
        color:
          palette.mode === `dark`
            ? palette[`neutral-variant`]?.shade?.[80]
            : palette[`neutral-variant`]?.shade?.[20],
        borderRadius: `77px`,
        minWidth: `90px`,
        minHeight: `40px`,

        fontSize: `16px`,

        '&.Mui-selected': {
          backgroundColor:
            palette.mode === `dark`
              ? palette[`neutral-variant`]?.shade?.[10]
              : palette[`neutral-variant`]?.shade?.[95],
          borderColor: palette.primary?.shade?.[50],
          color:
            palette.mode === `dark`
              ? palette.primary?.shade?.[50]
              : palette.primary?.shade?.[40],
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: `40px`,
        boxShadow: `none`,

        '&:hover': {
          boxShadow: `none`,
        },
        '&:active': {
          boxShadow: `none`,
        },
        '&:focus': {
          boxShadow: `none`,
        },
      },
      containedSecondary: {
        backgroundColor:
          palette.mode === `dark`
            ? palette[`neutral-variant`]?.shade?.[20]
            : palette.primary?.shade?.[95],

        color:
          palette.mode === `dark`
            ? palette[`neutral-variant`]?.shade?.[80]
            : palette.primary?.shade?.[30],

        '&:hover': {
          backgroundColor:
            palette.mode === `dark`
              ? palette[`neutral-variant`]?.shade?.[30]
              : palette.primary?.shade?.[80],
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontSize: `16px`,
      },
    },
  },
});
