import * as React from 'react';
import type { NextPage } from 'next';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Page from '../comps/Page';

const Home: NextPage = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down(`lg`));

  React.useEffect(() => {
    window.FB.XFBML.parse();
  }, []);
  return (
    <Page
      title="Project Hardwork"
      disableContainer
      containerProps={{ style: !isSmDown ? { paddingLeft: 0 } : undefined }}
    >
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          minHeight: `calc(85vh - 103.5px)`,
        }}
      >
        <Box sx={{ paddingBottom: `103.5px` }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: `84px`,
              color: theme.palette.primary.shade?.[50],
              marginBottom: `16px`,
            }}
          >
            Ny{` `}
            <Typography
              variant="h1"
              variantMapping={{ h1: `span` }}
              sx={{
                fontSize: `84px`,
                color: theme.palette.primary.shade?.[30],
              }}
            >
              jobboard
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: `28px`,
              color: theme.palette.primary.shade?.[50],
              textAlign: `center`,
            }}
          >
            Vi kommer snart
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: `18px`,
            color: theme.palette.primary.shade?.[50],
            textAlign: `center`,
          }}
        >
          Vi er i gang med å lage en ny jobbportal for deg som er på utkikk
          etter jobb eller arbeidsgiver som er på utkikk etter arbeidskraft.
        </Typography>
        <Typography
          sx={{
            fontSize: `28px`,
            color: theme.palette.primary.shade?.[50],
            textAlign: `center`,
          }}
        >
          For nå kan du følge oss på
        </Typography>
        <Box>
          <Facebook url="https://www.facebook.com/groups/1234709237267932" />
          <div
            className="fb-group"
            data-href="https://www.facebook.com/groups/1234709237267932"
            data-width="280"
            data-show-metadata="false"
          >
            <blockquote
              cite="https://www.facebook.com/groups/1234709237267932"
              className="fb-xfbml-parse-ignore"
            >
              Jobb her i Oslo
            </blockquote>
          </div>
        </Box>
      </Box>
    </Page>
  );
};

const Facebook = ({ url }: { url: string }) => (
  <div
    className="fb-page"
    data-href={url}
    data-tabs="timeline"
    data-width=""
    data-height="400px"
    data-small-header="true"
    data-adapt-container-width="true"
    data-hide-cover="true"
    data-show-facepile="false"
  >
    <a href={url}>Facebook</a>
  </div>
);

export default Home;
