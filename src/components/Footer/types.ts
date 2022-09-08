import { BoxProps } from '@mui/material';

export interface FooterProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FooterClasses>;
}

export interface FooterClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
