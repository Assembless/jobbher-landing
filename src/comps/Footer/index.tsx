// Dependencies scoped imports
import React from 'react';
import { Box, Container, IconButton, Link } from '@mui/material';
import { useTheme } from '@emotion/react';
import { sectionsMap, TLink, TSection } from './linksMap';

// Project scoped imports

// Module scoped imports
import {
  StyledRoot,
  StyledIcon,
  StyledLinkTxt,
  StyledMainWrapper,
  StyledSectionTitle,
  StyledSubtitle,
  StyledTitle,
  StyledTitleWithSocialBox,
  StyledLinkBox,
  StyledSocialIconsBox,
  StyledSectionBox,
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
            </StyledSocialIconsBox>
          </StyledTitleWithSocialBox>
        </StyledMainWrapper>
      </Container>
    </StyledRoot>
  );
};

export default Footer;
