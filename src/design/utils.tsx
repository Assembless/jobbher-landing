import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import React, { useMemo } from 'react';
import { getDesignTokens } from './theme';

const ColorModeContext = React.createContext<{
  colorMode: 'light' | 'dark';
  setColorMode: (colorMode: 'light' | 'dark') => void;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ colorMode: `light`, setColorMode: () => {} });

/** Returns the colorMode from closest context. */
export const useColorMode = () => React.useContext(ColorModeContext);

type ColorModeServiceProps = {
  children: React.ReactNode;
};

/**
 * The service remembers the prefered color mode and creates the theme for it.
 */
export const ColorModeService = ({ children }: ColorModeServiceProps) => {
  const prefersDark = useMediaQuery(`(prefers-color-scheme: dark)`);
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
    prefersDark ? `dark` : `light`,
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode],
  );

  const value = useMemo(
    () => ({ colorMode, setColorMode }),
    [colorMode, prefersDark],
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
