import { BoxProps, ContainerProps } from '@mui/material';

export interface PageProps extends BoxProps {
  /**
   * Children displayed under the message.
   */
  children: React.ReactNode;
  /**
   * Title provided to the <title> tag.
   */
  title: string;
  /**
   * Description provided to the <meta> tag.
   */
  description?: string;
  /**
   * Hides the appbar.
   */
  hideAppBar?: boolean;
  /**
   * Hides the appbar.
   */
  hideFooter?: boolean;
  /**
   * Disables the container wrapping children.
   */
  disableContainer?: boolean;
  /**
   * Disables the container gutters.
   */
  disableGutters?: ContainerProps['disableGutters'];
  /**
   * The container props.
   */
  containerProps?: ContainerProps;
  /**
   * Denies access for the list of user types provided.
   */
  denyAccess?: ('anonymous' | 'authorized')[];
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PageClasses>;
}

export interface PageClasses {
  /** Styles applied to the root element. */
  root: string;
}
