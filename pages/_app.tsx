import * as React from 'react';
import type { AppProps } from 'next/app';
import { Box, CssBaseline, GlobalStyles, useTheme } from '@mui/material';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard,
  faArrowRightFromBracket,
  faBars,
  faBriefcase,
  faCertificate,
  faBriefcaseMedical,
  faBuilding,
  faBullhorn,
  faCheckSquare,
  faCoffee,
  faDollar,
  faEye,
  faHammer,
  faLaptopCode,
  faLocationDot,
  faMoneyBill1,
  faMoon,
  faPerson,
  faSkull,
  faSliders,
  faSun,
  faTimes,
  faWheelchair,
  faCheck,
  faMinus,
  faAngleDown,
  faEnvelope,
  faGlobe,
  faLemon,
  faMapPin,
  faShapes,
  faGear,
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faPhone,
  faListUl,
  faListOl,
  faQuoteLeft,
  faRulerHorizontal,
  faRotateLeft,
  faRotateRight,
  faParagraph,
  faHourglass,
  faPen,
  faRocket,
  faUniversalAccess,
  faFilePdf,
  faArrowRightToBracket,
  faPlus,
  faPlusCircle,
  faBinoculars,
  faBurger,
  faShield,
  faMugSaucer,
  faBookSkull,
  faUserAstronaut,
  faJetFighter,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { ColorModeService } from './design/utils';
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false; /* eslint-disable import/first */

/**
 * Import FontAwesome icons.
 * This is required, else the icon wont show up!
 * Read more: https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-global-use
 */
const icons = [
  faCheckSquare,
  faCoffee,
  faWheelchair,
  faMoon,
  faSun,
  faCertificate,
  faEye,
  faBuilding,
  faLocationDot,
  faPhone,
  faDollar,
  faSliders,
  faBars,
  faHammer,
  faMoneyBill1,
  faLaptopCode,
  faBullhorn,
  faBriefcaseMedical,
  faSkull,
  faArrowRightFromBracket,
  faPerson,
  faAddressCard,
  faTimes,
  faBriefcase,
  faCheck,
  faMinus,
  faAngleDown,
  faEnvelope,
  faGlobe,
  faLemon,
  faMapPin,
  faShapes,
  faGear,
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faListUl,
  faListOl,
  faQuoteLeft,
  faRulerHorizontal,
  faRotateLeft,
  faRotateRight,
  faParagraph,
  faHourglass,
  faBriefcase,
  faPen,
  faRocket,
  faUniversalAccess,
  faFilePdf,
  faFacebook,
  faTwitter,
  faLinkedin,
  faArrowRightToBracket,
  faPlus,
  faPlusCircle,
  faBinoculars,
  faBurger,
  faShield,
  faMugSaucer,
  faBookSkull,
  faUserAstronaut,
  faJetFighter,
] as any;

library.add(...icons);


/**
 * Application wrapper, use to initialize services etc.
 */
const MyApp = ({ Component, pageProps }: AppProps) => (
    <ColorModeService>
      <CssBaseline />
      <GlobalStyles styles={{}} />
        <Component {...pageProps} />
    </ColorModeService>
);

export default MyApp;
