import { AppBarProps as MuiAppBarProps } from '@mui/material';

export interface AppBarProps extends MuiAppBarProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AppBarClasses>;
}

export interface AppBarClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the main container. */
  container: string;
  /** Styles applied to the stack wrapping containers content. */
  containerStack: string;
  /** Styles applied to the stack wrapping buttons on the right. */
  menuStack: string;
  /** Styles applied to the logo. */
  logo: string;
}
