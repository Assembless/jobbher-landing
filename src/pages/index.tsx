import * as React from 'react';
import type { NextPage } from 'next';
import {
  Box,
  Container,
  IconButton,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-multi-carousel';
import Page from '../comps/Page';
import { facebookList, TFbEl } from '../fb';
import { StyledIcon } from '../styles';
import 'react-multi-carousel/lib/styles.css';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Page title="Jobb her: Fin din neste jobb" disableContainer disableGutters>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          height: `calc(100vh - 103.5px)`,
        }}
        component="section"
      >
        <Container maxWidth="xl" sx={{ height: `100%` }}>
          <Box
            sx={{ display: `flex`, flexDirection: `column`, height: `100%` }}
          >
            <Box
              sx={{
                display: `flex`,
                alignItems: `center`,
                flex: 1,
              }}
            >
              <Box sx={{ /* paddingBottom: `103px`, */ flex: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: `58px`, sm: `84px` },
                    color: theme.palette.primary.shade?.[50],
                    marginBottom: `8px`,
                  }}
                >
                  Ny{` `}
                  <Typography
                    variant="h1"
                    variantMapping={{ h1: `span` }}
                    sx={{
                      fontSize: { xs: `58px`, sm: `84px` },
                      color: theme.palette.primary.shade?.[30],
                    }}
                  >
                    jobbportal
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: `24px`, sm: `28px` },
                    color: theme.palette.primary.shade?.[50],
                  }}
                >
                  Vi kommer snart..
                </Typography>
                <Box
                  sx={{
                    display: `flex`,
                    gap: `4px`,
                    marginBottom: { xs: `32px` },
                  }}
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
                      sx={{
                        color: theme.palette[`neutral-variant`].shade?.[80],
                      }}
                      icon={[`fab`, `linkedin`]}
                    />
                  </IconButton>
                  {/* </Link> */}
                  {/* <Link href="http://google.com"> */}
                  <IconButton /* sx={{ padding: 0 }} */ disabled>
                    <StyledIcon
                      sx={{
                        color: theme.palette[`neutral-variant`].shade?.[70],
                      }}
                      icon={[`fab`, `twitter`]}
                    />
                  </IconButton>
                  {/* </Link> */}
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  justifyContent: `center`,
                  maxHeight: `calc(100vh-103.5px)`,
                  display: { md: `flex`, xs: `none` },
                }}
              >
                <img
                  src="/team-members.svg"
                  alt="jobbher-screenshot"
                  style={{ height: `100%`, maxHeight: `550px` }}
                />
              </Box>
            </Box>
            <Box sx={{ paddingBottom: `16px` }}>
              <Typography
                sx={{
                  fontSize: `14px`,
                  color: theme.palette.primary.shade?.[30],
                  textAlign: `center`,
                }}
              >
                Vi er i gang med å lage en ny jobbportal for deg som er på
                utkikk etter jobb eller arbeidsgiver som er på utkikk etter
                arbeidskraft.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box component="section" sx={{ padding: `72px 0 72px 0` }}>
        <Typography
          sx={{
            fontSize: `20px`,
            color: theme.palette.primary.shade?.[30],
            textAlign: `center`,
            marginBottom: `16px`,
            fontWeight: 500,
          }}
        >
          For nå kan du følge oss på
        </Typography>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          customTransition="all 20s linear"
          dotListClass=""
          draggable
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          // pauseOnHover
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={2}
          transitionDuration={10000}
          rtl
        >
          {facebookList.slice(0, 25).map((el: TFbEl, i: number) => (
            <Facebook key={el.name} el={el} reverse />
          ))}
        </Carousel>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          customTransition="all 20s linear"
          dotListClass=""
          draggable
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          // pauseOnHover
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={2}
          transitionDuration={12000}
        >
          {facebookList.slice(25, 49).map((el: TFbEl, i: number) => (
            <Facebook key={el.name} el={el} />
          ))}
        </Carousel>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          customTransition="all 8s linear"
          dotListClass=""
          draggable
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          // pauseOnHover
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          transitionDuration={7000}
          rtl
        >
          {facebookList.slice(49, 67).map((el: TFbEl, i: number) => (
            <Facebook reverse key={el.name} el={el} />
          ))}
        </Carousel>
      </Box>
    </Page>
  );
};

const Facebook = ({ el, reverse }: { el: TFbEl; reverse?: boolean }) => {
  const theme = useTheme();

  return (
    <Box sx={{ margin: `10px` }}>
      <Link href={el.url} sx={{ textDecoration: `none` }}>
        <Box
          sx={{
            borderRadius: `8px`,
            overflow: `hidden`,
            boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
            cursor: `pointer`,
          }}
        >
          <Box sx={{ maxHeight: { xs: 95, sm: 110 }, overflow: `hidden` }}>
            <img
              // eslint-disable-next-line global-require
              src="/facebook-group-bg.jpg"
              alt="standing person"
              style={{ width: `100%`, height: `100%` }}
            />
          </Box>
          <Box
            sx={{
              padding: `7px 3px`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              height: `100%`,
              background: `#4267b2`,
            }}
          >
            {reverse ? (
              <>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.shade?.[100],
                    textAlign: `center`,
                    marginLeft: `6px`,
                    width: `fit-content`,
                    fontSize: { xs: 11, sm: 13.3 },
                  }}
                >
                  {el.name}
                  {/* Vistit group */}
                </Typography>
                <FontAwesomeIcon
                  icon={[`fab`, `facebook`]}
                  style={{
                    color: theme.palette.primary.shade?.[100],
                    fontSize: `16px`,
                  }}
                />
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={[`fab`, `facebook`]}
                  style={{
                    color: theme.palette.primary.shade?.[100],
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.shade?.[100],
                    textAlign: `center`,
                    marginLeft: `6px`,
                    width: `fit-content`,
                    fontSize: { xs: 11, sm: 13.3 },
                  }}
                >
                  {el.name}
                  {/* Vistit group */}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Home;

Facebook.defaultProps = {
  reverse: false,
};
