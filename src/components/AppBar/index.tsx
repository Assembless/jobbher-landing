// Dependencies scoped imports
import React from 'react';
import { Container, IconButton, Stack, Toolbar, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Project scoped imports
import Logo from '../Logo';

// Module scoped imports
import { StyledRoot } from './styles';
import { AppBarProps } from './types';

/**
 * @module Organisms
 * @description The primary app bar displayed above content.
 */
const AppBar = ({ sx, classes, ...rootProps }: AppBarProps) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <StyledRoot
      position="static"
      sx={sx}
      className={classes?.root}
      color="transparent"
      {...rootProps}
    >
      <Toolbar disableGutters>
        <Container maxWidth={false} className={classes?.container}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={classes?.containerStack}
          >
            <Logo className={classes?.logo} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
              className={classes?.menuStack}
            />
          </Stack>
        </Container>
      </Toolbar>
    </StyledRoot>
  );
};

export default AppBar;
