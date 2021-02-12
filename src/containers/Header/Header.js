import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'components/ui/Container';
import { Switch, FormControlLabel } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navLink: {
      color: 'red',
    },
  })
);

export default function Header({ toggleDarkMode }) {
  const classes = useStyles();

  let history = useHistory();

  const { loggedIn } = useSelector((state) => state.signIn);

  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accountHandler = () => {
    handleClose();
    history.push('/account');
  };

  const logOutHandler = () => {
    handleClose();
  };

  const onLogin = () => {
    history.push('/login');
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>

          {loggedIn ? (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={accountHandler}>My account</MenuItem>
                <MenuItem onClick={accountHandler}>
                  <FormControlLabel control={<Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />} />
                </MenuItem>
                <MenuItem onClick={logOutHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Link component={RouterLink} className={classes.navLink} to='/login'>
              Login
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
