// Dependencies scoped imports
import { Container, IconButton, Stack, Toolbar, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// Project scoped imports
import Logo from '../Logo';

// Module scoped imports
import { StyledIcon, StyledRoot } from './styles';
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
      <Toolbar>
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
            >
              <Link href="https://www.facebook.com/JobbHer.no">
                <IconButton /* sx={{ padding: 0 }} */>
                  <StyledIcon
                    sx={{ color: theme.palette.primary.shade?.[40] }}
                    icon={[`fab`, `facebook`]}
                  />
                </IconButton>
              </Link>
              {/* <Link href="http://google.com"> */}
              <IconButton disabled>
                <StyledIcon
                  sx={{ color: theme.palette[`neutral-variant`].shade?.[70] }}
                  icon={[`fab`, `linkedin`]}
                />
              </IconButton>
              {/* </Link> */}
              {/* <Link href="http://google.com"> */}
              <IconButton /* sx={{ padding: 0 }} */ disabled>
                <StyledIcon
                  sx={{ color: theme.palette[`neutral-variant`].shade?.[70] }}
                  icon={[`fab`, `twitter`]}
                />
              </IconButton>
              {/* </Link> */}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </StyledRoot>
  );
};

export default AppBar;
