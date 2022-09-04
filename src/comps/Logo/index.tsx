// Dependencies scoped imports
import React from 'react';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';

// Project scoped imports

// Module scoped imports
import { StyledRoot, StyledMessage } from './styles';
import { LogoProps } from './types';

/**
 * @module Atoms
 * @description The logo used in app branding.
 */
const Logo = ({ sx, classes, ...rootProps }: LogoProps) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <StyledRoot
      sx={sx}
      className={classes?.root}
      onClick={() => router.replace(`/`)}
      {...rootProps}
    >
      <StyledMessage className={classes?.message} gutterBottom>
        <span style={{ color: theme.palette.primary.shade?.[50] }}>
          JOBBHER
        </span>
        <span style={{ color: theme.palette[`neutral-variant`].shade?.[70] }}>
          .no
        </span>
      </StyledMessage>
    </StyledRoot>
  );
};

export default Logo;
