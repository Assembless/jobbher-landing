import { Palette, PaletteOptions, ThemeOptions } from '@mui/material';
import { componentOverrides } from './overrides';

export type PaletteColorShade = Record<
  | '0'
  | '10'
  | '20'
  | '30'
  | '40'
  | '50'
  | '60'
  | '70'
  | '80'
  | '90'
  | '95'
  | '99'
  | '100',
  string
>;

/**
 * The base theme object.
 */
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: `#005CBD`,
      shade: {
        '0': `#000000`,
        '10': `#001A41`,
        '20': `#002E68`,
        '30': `#004493`,
        '40': `#005CBD`,
        '50': `#3375D7`,
        '60': `#5390F4`,
        '70': `#7AABFF`,
        '80': `#AAC7FF`,
        '90': `#D6E2FF`,
        '95': `#EBF0FF`,
        '99': `#FBFCFF`,
        '100': `#FFFFFF`,
      },
    },
    secondary: {
      main: `#2F3E44`,
      shade: {
        '0': `#000000`,
        '10': `#001F29`,
        '20': `#003543`,
        '30': `#004D61`,
        '40': `#006780`,
        '50': `#0082A1`,
        '60': `#009DC2`,
        '70': `#38B9DE`,
        '80': `#5DD5FB`,
        '90': `#B5EBFF`,
        '95': `#DBF5FF`,
        '99': `#F8FDFF`,
        '100': `#FFFFFF`,
      },
    },
    tertiary: {
      main: `#65745C`,
      shade: {
        '0': `#000000`,
        '10': `#022100`,
        '20': `#063900`,
        '30': `#1C520A`,
        '40': `#356A22`,
        '50': `#4D8438`,
        '60': `#669F4F`,
        '70': `#7FBA67`,
        '80': `#9AD680`,
        '90': `#B5F39A`,
        '95': `#CBFFAE`,
        '99': `#F6FFE9`,
        '100': `#FFFFFF`,
      },
    },
    error: {
      main: `#BA1B1B`,
      shade: {
        '0': `#000000`,
        '10': `#410001`,
        '20': `#680003`,
        '30': `#930006`,
        '40': `#BA1B1B`,
        '50': `#DD3730`,
        '60': `#FF5449`,
        '70': `#FF897A`,
        '80': `#FFB4A9`,
        '90': `#FFDAD4`,
        '95': `#FFEDE9`,
        '99': `#FCFCFC`,
        '100': `#FFFFFF`,
      },
    },
    neutral: {
      main: `#2F384B`,
      shade: {
        '0': `#000000`,
        '10': `#1B1B1D`,
        '20': `#2F3033`,
        '30': `#464649`,
        '40': `#5E5E61`,
        '50': `#77777A`,
        '60': `#919094`,
        '70': `#ACABAF`,
        '80': `#C7C6CA`,
        '90': `#E4E2E6`,
        '95': `#F2F0F4`,
        '99': `#FDFBFF`,
        '100': `#FFFFFF`,
      },
      contrastText: `#FFFFFF`,
    },
    'neutral-variant': {
      main: `#5C5E66`,
      shade: {
        '0': `#000000`,
        '10': `#1B1B1D`,
        '20': `#2D3037`,
        '30': `#44474F`,
        '40': `#5C5E66`,
        '50': `#74777F`,
        '60': `#8E9099`,
        '70': `#A9ABB4`,
        '80': `#C4C6D0`,
        '90': `#E0E2EC`,
        '95': `#EFF0FA`,
        '99': `#FDFBFF`,
        '100': `#FFFFFF`,
      },
      contrastText: `#FFFFFF`,
    },
    custom: {
      pink: {
        main: `#BC0049`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FCFCFC`,
          '95': `#FFEDEF`,
          '90': `#FFD9DF`,
          '80': `#FFB2C0`,
          '70': `#FF859F`,
          '60': `#FF4C7E`,
          '50': `#E61A61`,
          '40': `#BC0049`,
          '30': `#900036`,
          '20': `#670024`,
          '10': `#400013`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      green: {
        main: `#396A00`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#F8FFE6`,
          '95': `#D0FF9B`,
          '90': `#B8F47E`,
          '80': `#9DD765`,
          '70': `#83BB4D`,
          '60': `#699F35`,
          '50': `#50841B`,
          '40': `#396A00`,
          '30': `#275000`,
          '20': `#1A3700`,
          '10': `#0C2000`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      lightBlue: {
        main: `#006874`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#F2FEFF`,
          '95': `#CCF8FF`,
          '90': `#90F1FF`,
          '80': `#4FD8EB`,
          '70': `#22BCCE`,
          '60': `#009FB1`,
          '50': `#008392`,
          '40': `#006874`,
          '30': `#004F59`,
          '20': `#00363D`,
          '10': `#001F24`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      lightBrown: {
        main: `#875300`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FCFCFC`,
          '95': `#FFEEDC`,
          '90': `#FFDDB7`,
          '80': `#FFB85D`,
          '70': `#E69C38`,
          '60': `#C7821E`,
          '50': `#A96900`,
          '40': `#875300`,
          '30': `#663D00`,
          '20': `#482A00`,
          '10': `#2B1700`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      blue: {
        main: `#006497`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FBFCFF`,
          '95': `#E5F2FF`,
          '90': `#CAE6FF`,
          '80': `#8CCDFF`,
          '70': `#31B4FF`,
          '60': `#0099E3`,
          '50': `#007EBC`,
          '40': `#006497`,
          '30': `#004B73`,
          '20': `#003350`,
          '10': `#001E31`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      teal: {
        main: `#006D34`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#F3FFF2`,
          '95': `#C1FFCE`,
          '90': `#79FCA1`,
          '80': `#5CDF88`,
          '70': `#3AC26E`,
          '60': `#06A656`,
          '50': `#008943`,
          '40': `#006D34`,
          '30': `#005225`,
          '20': `#003918`,
          '10': `#00210B`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      darkPink: {
        main: `#B11E66`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FCFCFC`,
          '95': `#FFECF1`,
          '90': `#FFD9E5`,
          '80': `#FFB0CC`,
          '70': `#FF82B4`,
          '60': `#F4569A`,
          '50': `#D33B80`,
          '40': `#B11E66`,
          '30': `#8D004C`,
          '20': `#640034`,
          '10': `#3E001E`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      lightGreen: {
        main: `#536600`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FBFFD8`,
          '95': `#DFFE66`,
          '90': `#D1EF59`,
          '80': `#B6D33F`,
          '70': `#9BB722`,
          '60': `#819B00`,
          '50': `#698000`,
          '40': `#536600`,
          '30': `#3D4C00`,
          '20': `#2A3500`,
          '10': `#171E00`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      darkBrown: {
        main: `#9A4522`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FCFCFC`,
          '95': `#FFEDE6`,
          '90': `#FFDBCD`,
          '80': `#FFB598`,
          '70': `#F98F66`,
          '60': `#D9754E`,
          '50': `#BA5D38`,
          '40': `#9A4522`,
          '30': `#7B2E0C`,
          '20': `#5C1A00`,
          '10': `#380C00`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      purple: {
        main: `#6847C0`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FFFBFE`,
          '95': `#F6EDFF`,
          '90': `#E9DDFF`,
          '80': `#D0BDFF`,
          '70': `#B69BFF`,
          '60': `#9C7CF8`,
          '50': `#8161DB`,
          '40': `#6847C0`,
          '30': `#502CA7`,
          '20': `#380490`,
          '10': `#20005F`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
      deepOrange: {
        main: `#B22D00`,
        shade: {
          '100': `#FFFFFF`,
          '99': `#FCFCFC`,
          '95': `#FFEDE7`,
          '90': `#FFDACF`,
          '80': `#FFB49D`,
          '70': `#FF8B67`,
          '60': `#FF5722`,
          '50': `#DB3E03`,
          '40': `#B22D00`,
          '30': `#882000`,
          '20': `#601400`,
          '10': `#3C0800`,
          '0': `#000000`,
        },
        contrastText: `#FFFFFF`,
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getShade: () => {},
  },

  typography: {
    fontFamily: `'Inter', sans-serif`,
    // TODO: [PH-55] Sync MUI typography with Figma.
    h1: {
      fontSize: `32px`,
      fontWeight: `700`,
    },
    h2: {
      fontSize: `24px`,
      fontWeight: `600`,
    },
    h3: {
      fontSize: `18.7px`,
      fontWeight: `500`,
    },
    h4: {
      fontSize: `16px`,
      fontWeight: `500`,
    },
    h5: {
      fontSize: `13.3px`,
      fontWeight: `400`,
    },
    h6: {
      fontSize: `12.7px`,
      fontWeight: `400`,
    },
    body1: {
      fontSize: `12px`,
      fontWeight: `400`,
    },
    button: {
      fontSize: `12px`,
      fontWeight: `500`,
    },
    fontSize: 14,
    htmlFontSize: 16,
  },

  shape: {
    // ? Might need adjustments! Tested on Card.
    borderRadius: 20,
  },

  mixins: {
    toolbar: {
      height: `103.5px`,
    },
  },
};

/**
 * Light Palette Options
 * Apply design tokens here to override the default theme.
 */
const lightPaletteOptions: Partial<PaletteOptions> = {
  divider: `#E0E2EC`,
  background: {
    default: `#FAFCFE`,
    paper: `#FFFFFF`,
  },
  text: {
    primary: `#001A41`,
    secondary: `#002E68`,
    disabled: `#A9ABB4`,
  },
};

/**
 * Dark Palette Options
 * Apply design tokens here to override the default theme.
 */
const darkPaletteOptions: Partial<PaletteOptions> = {
  divider: `#3d3d3f`,
  background: {
    default: `#1B1B1D`,
    paper: `#1f1f1f`,
  },
  text: {
    primary: `#FFFFFF`,
    secondary: `#F3F3F3`,
    disabled: `#BDBDBD`,
  },
};

/**
 * Returns the theme object merged with the light or dark palette options.
 * @param mode
 * @returns Theme
 */
export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => {
  const typography = {
    ...themeOptions.typography,
    allVariants: {
      color: mode === `dark` ? `#FFF` : `#000`,
    },
  };

  const palette = {
    mode,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ...themeOptions.palette!,
    ...(mode === `light` ? lightPaletteOptions : darkPaletteOptions),
  };

  const components = componentOverrides(palette);

  /**
   * Returns a colors shade based on the theme mode.
   * @param color - The color design token. eg. 'primary', 'secondary' etc.
   * @param lightShade - The light shade.
   * @param darkShade - The dark shade.
   * @returns {String} color shade
   * @example
   * {
   *   ...
   *   backgroundColor: getShade('primary', 20, 40),
   *   color: getShade({ light: 'neutral', dark: 'tertiary' }, 10, 95),
   *   ...
   * }
   */
  const getShade = (
    color:
      | keyof Omit<Palette, 'mode' | 'getShade'>
      | Record<'light' | 'dark', keyof Omit<Palette, 'mode' | 'getShade'>>,
    lightShade: number,
    darkShade: number,
  ) => {
    const isDark = mode === `dark`;

    if (typeof color === `string`) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return palette[color]?.shade[!isDark ? lightShade : darkShade];
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return palette[color[mode]]?.shade[!isDark ? lightShade : darkShade];
  };

  palette.getShade = getShade;

  return {
    ...themeOptions,
    typography,
    palette,
    components,
  };
};

export type ProjectTheme = typeof themeOptions;
