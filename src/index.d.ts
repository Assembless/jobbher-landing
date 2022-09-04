import { PaletteColorShade } from './design/theme';

type CustomPaletteColor =
  | 'pink'
  | 'green'
  | 'lightBlue'
  | 'lightBrown'
  | 'blue'
  | 'teal'
  | 'darkPink'
  | 'lightGreen'
  | 'darkBrown'
  | 'purple'
  | 'deepOrange';

declare module '@mui/material/styles' {
  interface PaletteColor {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    shade?: PaletteColorShade;
  }
  interface SimplePaletteColorOptions {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    shade?: PaletteColorShade;
  }

  interface PaletteColorOptions {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    shade?: PaletteColorShade;
  }

  interface Palette {
    primary: PaletteColor;
    tertiary: PaletteColor;
    neutral: PaletteColor;
    'neutral-variant': PaletteColor;
    custom: Record<CustomPaletteColor, PaletteColor>;
    getShade: (
      color:
        | keyof Omit<Palette, 'mode' | 'getShade'>
        | Record<'light' | 'dark', keyof Omit<Palette, 'mode' | 'getShade'>>,
      lightShade: number,
      darkShade: number,
    ) => string;
  }
  interface PaletteOptions {
    primary: PaletteColor;
    tertiary: PaletteColor;
    neutral: PaletteColor;
    'neutral-variant': PaletteColor;
    custom: Record<CustomPaletteColor, PaletteColor>;
    getShade: (
      color:
        | keyof Omit<Palette, 'mode' | 'getShade'>
        | Record<'light' | 'dark', keyof Omit<Palette, 'mode' | 'getShade'>>,
      lightShade: number,
      darkShade: number,
    ) => string;
  }

  interface Theme {
    palette: Palette;
  }

  interface ThemeOptions {
    palette: Palette;
  }
}

declare global {
  interface Window {
    FB: any;
  }
}
