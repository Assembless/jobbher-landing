// Dependencies scoped imports
import React from 'react';
import { Box, Container, IconButton, Link, useTheme } from '@mui/material';

// Project scoped imports

// Module scoped imports
import {
  StyledRoot,
  StyledIcon,
  StyledMainWrapper,
  StyledSubtitle,
  StyledTitle,
  StyledTitleWithSocialBox,
  StyledSocialIconsBox,
} from './styles';
import { FooterProps } from './types';

/**
 * @module Organism
 * @description Footer component.
 */
const Footer = ({ sx, classes, ...rootProps }: FooterProps) => {
  const theme = useTheme();
  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <Container maxWidth="xl" sx={{ height: `100%` }}>
        <StyledMainWrapper>
          <StyledTitleWithSocialBox>
            <Box>
              <StyledTitle variant="h1">Spar tid</StyledTitle>
              <StyledSubtitle variant="h2">
                Her er din neste jobb
              </StyledSubtitle>
            </Box>
            <StyledSocialIconsBox>
              <Link href="https://www.facebook.com/JobbHer.no">
                <IconButton /* sx={{ padding: 0 }} */>
                  <StyledIcon icon={[`fab`, `facebook`]} />
                </IconButton>
              </Link>
              <Link href="https://linkedin.com/company/jobb-her-no">
                <IconButton>
                  <StyledIcon
                    sx={{ color: theme.palette.primary.shade?.[40] }}
                    icon={[`fab`, `linkedin`]}
                  />
                </IconButton>
              </Link>
              <Link href="https://twitter.com/JOBBHER_NO">
                <IconButton /* sx={{ padding: 0 }} */>
                  <StyledIcon
                    sx={{ color: theme.palette.primary.shade?.[40] }}
                    icon={[`fab`, `twitter`]}
                  />
                </IconButton>
              </Link>
            </StyledSocialIconsBox>
          </StyledTitleWithSocialBox>
        </StyledMainWrapper>
      </Container>
    </StyledRoot>
  );
};

export default Footer;
