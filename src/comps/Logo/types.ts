import { BoxProps } from '@mui/material';

export interface LogoProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LogoClasses>;
}

export interface LogoClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
