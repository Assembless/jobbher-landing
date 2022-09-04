// Dependencies scoped imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Stack,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Toolbar,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Project scoped imports
import { auth } from '../../../api/firebase';
import { config } from '../../../config';
import { AuthActions } from '../../../store/Auth/reducers';
import { AppState } from '../../../store/configureStore';
import { getInitials } from '../../../utils/account.helpers';
import { Logo } from '../../atoms';
import DisabilityMenu from '../DisabilityMenu';

// Module scoped imports
import { StyledAvatarButton, StyledRoot } from './styles';
import { AppBarProps } from './types';

/**
 * @module Organisms
 * @description The primary app bar displayed above content.
 */
const AppBar = ({ sx, classes, ...rootProps }: AppBarProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const account = useSelector((state: AppState) => state.auth.account);
  const session = useSelector((state: AppState) => state.auth.session);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const profileMenuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth.signOut();
    dispatch(AuthActions.resetSession());
    dispatch(AuthActions.resetAccount());
    enqueueSnackbar(`You have been logged out.`);
    handleClose();
  };

  const handleNavigation = (path: string) => () => {
    router.push(path);
    handleClose();
  };

  // TODO: Find a better way to gather information about the account. DTOs perhaps?
  const displayName = useMemo(() => {
    let clientName = ``;

    clientName = `${account?.personal?.first_name ?? ``} ${
      account?.personal?.last_name ?? ``
    }`;

    if (!clientName || !clientName.trim())
      clientName = session?.displayName as string;

    return getInitials(clientName as string);
  }, [account?.id, session?.displayName]);

  const displayNameInitials = useMemo(
    () =>
      displayName
        ?.split(` `)
        ?.map((n) => n[0])
        ?.join(``)
        ?.trim() || null,
    [displayName],
  );

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
              spacing={2}
              className={classes?.menuStack}
            >
              <DisabilityMenu />

              <Hidden smDown>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://assembless.tech/"
                >
                  For juniors
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push(`add-offer`)}
                >
                  Post offer
                </Button>
              </Hidden>

              {session && !session?.isAnonymous && (
                <>
                  <StyledAvatarButton
                    aria-controls={profileMenuOpen ? `profile-menu` : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileMenuOpen ? `true` : undefined}
                    id="profile-avatar"
                    onClick={handleClick}
                  >
                    <Avatar
                      srcSet={
                        account?.avatar_url ?? session?.photoURL ?? undefined
                      }
                    >
                      {displayNameInitials || <FontAwesomeIcon icon="user" />}
                    </Avatar>
                  </StyledAvatarButton>
                  <Menu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    open={profileMenuOpen}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': `profile-avatar`,
                    }}
                  >
                    <MenuItem onClick={handleNavigation(`/account`)}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="address-card" />
                      </ListItemIcon>
                      <ListItemText>Account</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleNavigation(`/company`)}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="building" />
                      </ListItemIcon>
                      <ListItemText>Company</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleNavigation(`/add-offer`)}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="plus" />
                      </ListItemIcon>
                      <ListItemText>Post offer</ListItemText>
                    </MenuItem>
                    {/* <MenuItem onClick={handleNavigation(`/myaccount`)}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="person" />
                      </ListItemIcon>
                      <ListItemText>My account</ListItemText>
                    </MenuItem> */}
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="arrow-right-from-bracket" />
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </MenuItem>
                    {config.mode !== `production` && (
                      <MenuItem onClick={handleNavigation(`/developers`)}>
                        <ListItemIcon>
                          <FontAwesomeIcon icon="code" />
                        </ListItemIcon>
                        <ListItemText>Developers</ListItemText>
                      </MenuItem>
                    )}
                  </Menu>
                </>
              )}

              {!session && (
                <>
                  <Button
                    id="menu-button"
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                    style={{ minHeight: `36.5px` }}
                    aria-controls={profileMenuOpen ? `main-menu` : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileMenuOpen ? `true` : undefined}
                  >
                    <FontAwesomeIcon
                      icon={[`fas`, `bars`]}
                      style={{ fontSize: `16px` }}
                    />
                  </Button>
                  <Menu
                    id="main-menu"
                    anchorEl={anchorEl}
                    open={profileMenuOpen}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': `menu-button`,
                    }}
                  >
                    <MenuItem onClick={handleNavigation(`/login`)}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="arrow-right-to-bracket" />
                      </ListItemIcon>
                      <ListItemText>Login</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleNavigation(`/add-offer`)}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon="plus" />
                      </ListItemIcon>
                      <ListItemText>Post offer</ListItemText>
                    </MenuItem>
                    {config.mode !== `production` && (
                      <MenuItem onClick={handleNavigation(`/developers`)}>
                        <ListItemIcon>
                          <FontAwesomeIcon icon="code" />
                        </ListItemIcon>
                        <ListItemText>Developers</ListItemText>
                      </MenuItem>
                    )}
                  </Menu>
                </>
              )}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </StyledRoot>
  );
};

export default AppBar;
