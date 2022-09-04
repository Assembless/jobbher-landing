// Dependencies scoped imports
import React from 'react';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Project scoped imports
import AppBar from '../AppBar';
import Footer from '../Footer';

// Module scoped imports
import { StyledRoot } from './styles';
import { PageProps } from './types';

/**
 * @module Templates
 * @description A wrapper used for every page to set title etc.
 */
const Page = ({
  sx,
  classes,
  children,
  title,
  description,
  hideAppBar,
  hideFooter,
  disableContainer,
  disableGutters,
  containerProps,
  denyAccess,
  ...rootProps
}: PageProps) => {
  const router = useRouter();

  const currentRoute = router.pathname;

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main
        style={{ minHeight: `100vh`, display: `flex`, flexDirection: `column` }}
      >
        {!hideAppBar && <AppBar />}
        {/* <Suspense fallback={<CircularProgress />}>{children}</Suspense> */}
        <Box flex={1}>
          <Container
            maxWidth={disableContainer ? false : `xl`}
            disableGutters={disableGutters}
            {...containerProps}
          >
            {children}
          </Container>
        </Box>
        <Footer />
      </main>
    </StyledRoot>
  );
};

export default Page;
